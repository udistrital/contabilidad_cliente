import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";
import { FormManager } from "../../../@core/managers/formManager";
import { PopUpManager } from '../../../@core/managers/popUpManager';
import { ComprobanteHelper } from "../../../@core/helpers/comprobantes/comprobanteHelper";
import { FORM_PARAM_COMPROBANTES } from './form-param-comprobante';
import Swal from "sweetalert2";

@Component({
  selector: "ngx-parametros-comprobante",
  templateUrl: "./parametros-comprobante.component.html",
  styleUrls: ["./parametros-comprobante.component.scss"]
})
export class ParametrosComprobanteComponent implements OnInit {
  entityId: any;
  @Input("infoinput") infoinput: any;
  @Input("formEntity") formEntity: any;
  @Output() auxcambiotab = new EventEmitter<boolean>();
  entityInfo: any;
  formTittle: string;
  updateMessage: string;
  updateConfirmMessage: string | string[];
  clean: boolean;

  constructor(
    private translate: TranslateService,
    private comprobanteHelper: ComprobanteHelper,
    private popUpManager: PopUpManager
  ) {
  }
  
  ngOnInit() {
    this.formEntity = FORM_PARAM_COMPROBANTES;
    this.entityId = this.infoinput._id; 
    this.formTittle = "COMPROBANTE.add_param";
    this.updateMessage = "COMPROBANTE.mensaje_actualizar_param";
    this.updateConfirmMessage = "COMPROBANTE.confirm_actualizar_param"
    this.formEntity = FormManager.ConstruirForm(
      this.formEntity,
      this.translate,
      this.formTittle
    );
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.formEntity = FormManager.ConstruirForm(
        this.formEntity,
        this.translate,
        this.formTittle
      );
    });
    this.loadData();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.entityInfo === undefined) {
        // this.createEntity(event.data[this.formEntity['modelo']]);
      } else {
        this.updateEntity(event.data[this.formEntity["modelo"]]);
      }
    }
  }
  updateEntity(entityData: any): void {
    const opt: any = {
      title: this.translate.instant("GLOBAL.actualizar"),
      text: this.translate.instant(this.updateMessage),
      icon: "warning",
      buttons: true,
      dangerMode: true,
      showCancelButton: true
    };
    Swal.fire(opt).then(willDelete => {
      if (willDelete.value) {
        this.entityInfo = entityData;
        this.entityInfo.FormatoImpresion = this.entityInfo.FormatoImpresion.valor;
        this.entityInfo.TipoImpresion = this.entityInfo.TipoImpresion.valor;
        this.entityInfo.NumeracionAutomatica = this.entityInfo.NumeracionAutomatica.valorBool;
        this.comprobanteHelper.comprobanteUpdate(this.entityInfo).subscribe(res => {
          if (res["Type"] === "error") {
            this.popUpManager.showErrorAlert(res["Message"]);
          } else {
            this.loadData();
            this.popUpManager.showSuccessAlert(
              this.translate.instant(this.updateConfirmMessage)
            );
            this.auxcambiotab.emit(false);
          }
        });
      }
    });
  }

  public loadData(): void {
    if (this.entityId) {
      this.comprobanteHelper.getComprobantes(this.entityId).subscribe(res => {
        if (res !== null) {
          this.entityInfo = res;
        }
      });
    } else {
      this.entityInfo = undefined;
      this.clean = !this.clean;
    }
  }
}
