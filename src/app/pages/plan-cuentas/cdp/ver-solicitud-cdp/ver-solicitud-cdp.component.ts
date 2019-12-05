import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CDPHelper } from '../../../../@core/helpers/cdp/cdpHelper';
import { PlanAdquisicionHelper } from '../../../../@core/helpers/plan_adquisicion/planAdquisicionHelper';
import { CoreHelper } from '../../../../@core/helpers/core/coreHelper';
import { DependenciaHelper } from '../../../../@core/helpers/oikos/dependenciaHelper';
import { MovimientosHelper } from '../../../../@core/helpers/movimientos/movimientosHelper';
import { AdmAmazonHelper } from '../../../../@core/helpers/administrativa/admAmazonHelper';
import { NecesidadesHelper } from '../../../../@core/helpers/necesidades/necesidadesHelper';
import { DocumentoPresupuestalHelper } from '../../../../@core/helpers/documentoPresupuestal/documentoPresupuestalHelper';
import { PopUpManager } from '../../../../@core/managers/popUpManager';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';
import { ImplicitAutenticationService } from '../../../../@core/utils/implicit_autentication.service';

@Component({
  selector: 'ngx-ver-solicitud-cdp',
  templateUrl: './ver-solicitud-cdp.component.html',
  styleUrls: ['./ver-solicitud-cdp.component.scss']
})
export class VerSolicitudCdpComponent implements OnInit {

  @Input('solicitudcdp') solicitud: object;
  @Input('expedido') expedido: boolean;
  @Output() eventChange = new EventEmitter();
  necesidad: any = {};
  TrNecesidad: any;
  mostrandoPDF: boolean = false;
  enlacePDF: string = 'assets/images/cdp_ejemplo.pdf';
  tituloPDF: string = '';
  username: string;
  responsable: string;
  areas = { "1": 'Rector', "2": 'Convenios' };
  entidades = {"1": 'Universidad Distrital Francisco José de Caldas' };

  areaFuncional: object;
  centroGestor: object;
  estadoNecesidadRechazada: object;

  constructor(
    private cdpHelper: CDPHelper,
    private planAdquisicionHelper: PlanAdquisicionHelper,
    private coreHelper: CoreHelper,
    private dependenciaHelper: DependenciaHelper,
    private movimientosHelper: MovimientosHelper,
    private necesidadesHelper: NecesidadesHelper,
    private documentoPresuestalHelper: DocumentoPresupuestalHelper,
    private popManager: PopUpManager,
    private router: Router,
    private implicitAutenticationService : ImplicitAutenticationService,
    private admAmazonHelper: AdmAmazonHelper
  ) { }

  ngOnInit() {
    this.cdpHelper.getFullNecesidad(this.solicitud['necesidad']).subscribe(res => {
      this.TrNecesidad = res;

      this.areaFuncional = this.areas[this.TrNecesidad["Necesidad"]["AreaFuncional"]];
      this.centroGestor = this.entidades[this.solicitud["centroGestor"]];

      this.getInfoJefeDepdencia(this.TrNecesidad["Necesidad"]["DependenciaNecesidadId"]["JefeDepSolicitanteId"])
        .pipe(
          mergeMap(res => this.getInfoDependencia(res["DependenciaId"]))
        ).pipe(
          mergeMap(res => { 
            this.TrNecesidad["Necesidad"]["DependenciaNecesidadId"]["DependenciaSolicitante"] = res;
            return this.getInfoMeta(this.TrNecesidad["Necesidad"]["Vigencia"], res["Id"]);
          })
        )
        .subscribe(res => {
        let actividades = res;

        if (this.TrNecesidad.Rubros) {
          this.TrNecesidad.Rubros.forEach(rubro => {
            rubro.MontoParcial = 0
            if (rubro.Metas) { 
              rubro.Metas.forEach(meta => {
                meta["InfoMeta"] = actividades["metas"]["actividades"].filter(actividad => actividad["meta_id"] === meta["MetaId"]);
                if (meta.Actividades) {
                  meta.Actividades.forEach(act => {
                    act["InfoActividad"] = actividades["metas"]["actividades"].filter(actividad => actividad["actividad_id"] === act["ActividadId"]);
                    if (act.FuentesActividad) {
                      act.FuentesActividad.forEach(fuente => {
                        rubro.MontoParcial += fuente.MontoParcial
                      });
                    }
                  });
                }
              });
            }
            if (rubro.Fuentes) {
              rubro.Fuentes.forEach(fuente => {
                rubro.MontoParcial += fuente.MontoParcial
              });
            }
          });
        }
      });
      
    });

    this.dependenciaHelper.get('', 'query=Nombre__contains:PRESUPUESTO')
      .pipe(
        mergeMap(res =>  {
          console.info("res dependencia: ", res)
          return this.coreHelper.getJefeDependenciaByDependencia(res[0]["Id"]) }
        )
      )
      .pipe (
        mergeMap(res =>  {
          console.info("res jefe dependencia: ", res)
          this.responsable = res;
          return this.admAmazonHelper.getPersonaNatural(res["TerceroId"]) }
        )
      )
    .subscribe(res => {
      if (typeof(res) === 'object') {
        this.responsable = res;
      }
      console.info("tercero: ", res);
    });

    if (this.implicitAutenticationService.live()) {
      this.username = (this.implicitAutenticationService.getPayload()).sub;
    }
  }

  getInfoMeta(vigencia: Number, dependencia: Number): Observable<any> {
    return this.planAdquisicionHelper.getPlanAdquisicionByDependencia(vigencia.toString(), dependencia.toString());
  };

  getInfoJefeDepdencia(jefe_dependencia_id: Number): Observable<any> {
    return this.coreHelper.getJefeDependencia(jefe_dependencia_id.toString());
  }

  getInfoDependencia(dependencia: Number): Observable<any> {
    return this.dependenciaHelper.get(dependencia);
  }

  cambioTab() {
    this.eventChange.emit(false);
  }

  expedirCDP(consecutivo) {
    this.popManager.showAlert('warning', `Expedir la solicitud de CDP ${consecutivo}`, 'continuar')
      .then((result) => {

        if (result.value) {

          let movimiento = this.construirDatosMovimiento();
          let consecutivoExpedido: number;
          this.movimientosHelper.postMovimiento(movimiento).pipe(
            mergeMap(res => {
              consecutivoExpedido = res['Consecutivo'];
              return this.cdpHelper.expedirCDP(this.solicitud["_id"]);
            })
          ).subscribe(res => {
            if (res) {
              this.popManager.showSuccessAlert(`Se expidió con éxito el CDP Nº ${consecutivoExpedido}`);
              this.router.navigate(['/pages/plan-cuentas/cdp']);
            }
          });
        }
      });
  }

  private construirDatosMovimiento(): object {
    var movimiento = {
      Data: { "solicitud_cdp": this.solicitud["_id"] },
      Tipo: "cdp",
      Vigencia: 2019,
      CentroGestor: String(this.solicitud["centroGestor"]),
      AfectacionMovimiento: []
    };

    this.TrNecesidad["Rubros"].forEach((rubro: object) => {
      movimiento.AfectacionMovimiento.push(
        {
          MovimientoProcesoExternoId: {
              TipoMovimientoId: {
                  Id: 6,
                  Acronimo: "cdp"
              }
          },
          DocumentoPadre: rubro["RubroId"],
          Valor: rubro["MontoParcial"],
          Descripcion: this.TrNecesidad["Necesidad"]["Objeto"]
        }
      )
    });
    return movimiento;
  };

  rechazarSolicitud() {
    this.popManager.showAlertInput('warning', `Rechazar solicitud de CDP`, 
      'Escriba la justificación del rechazo', 'Es necesario escribir una justificación de rechazo', 'textarea')
        .then((result) => {
          if (result.value) {
            this.necesidadesHelper.getEstadoRechazado().pipe(
              switchMap(estadoRechazada => {
                  if(estadoRechazada) {
                    let necesidad = this.TrNecesidad["Necesidad"]
                    necesidad["EstadoNecesidadId"] = estadoRechazada;
                    return this.necesidadesHelper.putNecesidad(necesidad, necesidad["Id"]);
                  }
                }
              )
            ).subscribe(res => {
              if(res) {
                let necesidadRechazada = {
                  Justificacion: result.value,
                  NecesidadId: { Id: this.TrNecesidad["Necesidad"]["Id"] },
                  FechaRechazo: new Date(),
                  ConsecutivoNecesidad: this.TrNecesidad["Necesidad"]["ConsecutivoNecesidad"]
                };
                this.necesidadesHelper.postNecesidadRechazada(necesidadRechazada).subscribe(); 
              }
            });
          }
      });
  }

  mostrarPDF(consecutivo) {
    this.tituloPDF = `Certificado de disponibilidad presupuestal N° ${consecutivo}`;
    this.mostrandoPDF = !this.mostrandoPDF;
  }

  async anularCdp() {
    const { value: tipoAnulacion } = await this.popManager.showAlertRadio(
      'Seleccione el tipo de anulación', 
      {
        'anul_p_cdp': 'Anulación parcial',
        'anul_t_cdp': 'Anulación total'
      },
      'Seleccione una opción');
    
    if (tipoAnulacion === 'anul_p_cdp') {
      const { value : valorAnulacion } = await this.popManager.showAlertInput('warning', 'Valor de la anulación', 'Ingrese el valor de la anulación', 'Debe ingresar un valor', 'text');
      this.expedirMovimientoAnulacion(tipoAnulacion, parseFloat(valorAnulacion));
    } else {
        let centroGestor =  String(this.solicitud["centroGestor"]);
        let vigencia = this.solicitud["vigencia"];
        this.documentoPresuestalHelper.get(vigencia, centroGestor, 'data.solicitud_cdp:'+this.solicitud["_id"]).subscribe(res => {
          this.expedirMovimientoAnulacion(tipoAnulacion, res["ValorActual"]);
      });
    }
  }

  private expedirMovimientoAnulacion(tipoAnulacion: string, valor: number) {
    let centroGestor =  String(this.solicitud["centroGestor"]);
    let vigencia = this.solicitud["vigencia"];

    this.documentoPresuestalHelper.get(vigencia, centroGestor, 'data.solicitud_cdp:'+this.solicitud["_id"]).pipe(
      mergeMap(documentoP => this.movimientosHelper.getByDocumentoPresupuestal(vigencia, centroGestor, documentoP[0]["_id"])
        .pipe(
          switchMap(movimientoD => {

            let movimiento = {
              Data: { "cdp": documentoP[0]["_id"] },
              Tipo: tipoAnulacion,
              Vigencia: Number(this.solicitud['vigencia']),
              CentroGestor: String(this.solicitud["centroGestor"]),
              AfectacionMovimiento: [
                {
                  MovimientoProcesoExternoId: {
                    TipoMovimientoId: {
                        Id: 8,
                        Acronimo: tipoAnulacion
                    }
                  },
                  DocumentoPadre: movimientoD[0]["_id"],
                  Valor: valor,
                  Descripcion: "anulación parcial del cdp"
              }]
            };
            return this.movimientosHelper.postMovimiento(movimiento);
          }
        )))).subscribe(res => {

          if(res) {
            this.popManager.showSuccessAlert('Se realizó la anulación del CDP');
            this.router.navigate(['/pages/plan-cuentas/cdp']);
          }
      }); 
  }

}
