import { Component, Input, EventEmitter, Output, OnInit, OnChanges, ViewChildren, ElementRef, Renderer2 } from '@angular/core';
import {
  NbGetters,
  NbSortDirection,
  NbTreeGridRowComponent,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
  NbSortRequest,
} from '@nebular/theme';
import { Observable } from 'rxjs';
// import { ArbolHelper } from '../../../@core/helpers/arbol/arbolHelper';
// import { RubroHelper } from '../../../@core/helpers/rubros/rubroHelper';
import { registerLocaleData } from '@angular/common';
import locales from '@angular/common/locales/es-CO';
import { ArbolHelper } from '../../@core/helpers/arbol/arbolHelper';
import { FormManager } from '../../@core/managers/formManager';
import { FORM_NODO_CUENTA_CONTABLE } from './form_nodo_cuenta_contable';
import { TranslateService } from '@ngx-translate/core';
import { PopUpManager } from '../../@core/managers/popUpManager';
import { TesoreriaHelper } from '../../@core/helpers/tesoreria/tesoreriaHelper';

registerLocaleData(locales, 'co');

interface EstructuraArbolRubrosApropiaciones {
  Codigo: string;
  Descripcion?: string;
  ValorInicial: number;
  Hijos?: EstructuraArbolRubrosApropiaciones[];
  Movimientos?: string[];
  Padre?: string;
  UnidadEjecutora: number;
  Estado?: string;
  IsLeaf: boolean;
  expanded?: boolean;
  isHighlighted?: boolean;
  data?: EstructuraArbolRubrosApropiaciones;
  children?: EstructuraArbolRubrosApropiaciones[];
}

@Component({
  selector: 'ngx-arbol-cuentas-contables',
  templateUrl: './arbol-cuentas-contables.component.html',
  styleUrls: ['./arbol-cuentas-contables.component.scss'],
})
export class ArbolCuentasContablesComponent implements OnInit, OnChanges {
  @Output() rubroSeleccionado = new EventEmitter();
  @Input() updateSignal: Observable<string[]>;
  @Input() optionSelect: string;
  @Input() vigencia: string;
  @Input() externalSearch: string;
  @Input('paramsFieldsName') paramsFieldsName: object;
  opcionSeleccionada: string;
  vigenciaSeleccionada: string;
  @ViewChildren(NbTreeGridRowComponent, { read: ElementRef }) treeNodes: ElementRef[];

  update: any;
  customColumn = 'Codigo';
  defaultColumns = ['Nombre'];
  hasListener: any[] = [];
  oldHighlight: ElementRef;

  allColumns = [this.customColumn, ...this.defaultColumns];
  dataSource: NbTreeGridDataSource<EstructuraArbolRubrosApropiaciones>;
  dataSource2: NbTreeGridDataSource<EstructuraArbolRubrosApropiaciones>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  idHighlight: any;
  isSelected: boolean;
  searchValue: string;
  formData: any;
  nodeData: any;
  selectedNodeData: any;

  cleanForm: boolean;

  showTree: boolean = true;
  viewTab: boolean = false;

  cuentaAlterna: any;
  cuentaAlternaAnt: number;

  constructor(
    private renderer: Renderer2,
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<EstructuraArbolRubrosApropiaciones>,
    // private dataSourceBuilder2: NbTreeGridDataSourceBuilder<EstructuraArbolRubrosApropiaciones>,
    private treeHelper: ArbolHelper,
    private translate: TranslateService,
    private pUpManager: PopUpManager,
    // private rubroHelper: RubroHelper,
    private tesoreriaHelper: TesoreriaHelper,
  ) {
  }

  ngOnInit() {

    this.loadTree();
    this.formData = FORM_NODO_CUENTA_CONTABLE;
    this.nodeData = undefined;
    this.construirForm();
  }
  construirForm() {
    this.formData.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formData.campos.length; i++) {
      this.formData.campos[i].label = this.formData.campos[i].label_i18n;
      this.formData.campos[i].placeholder = this.formData.campos[i].label_i18n;
    }

    const naturalezaIndex = FormManager.getIndexForm(this.formData, 'NaturalezaCuentaID');
    const tipoMonedaIndex = FormManager.getIndexForm(this.formData, 'MonedaID');
    const detalleCuentaIndex = FormManager.getIndexForm(this.formData, 'DetalleCuentaID');
    const centroCostosIndex = FormManager.getIndexForm(this.formData, 'CentroDecostosID');
    const cuentaBancariaIndex = FormManager.getIndexForm(this.formData, 'CuentaBancariaID');

    this.treeHelper.getNaturalezaCuenta().subscribe(res => {
      this.formData.campos[naturalezaIndex].opciones = res;
    });

    this.treeHelper.getTipoMoneda().subscribe(res => {
      this.formData.campos[tipoMonedaIndex].opciones = res;
    });

    this.treeHelper.getDetalleCuenta().subscribe(res => {
      this.formData.campos[detalleCuentaIndex].opciones = res;
    });

    this.treeHelper.getCentroCostos().subscribe(res => {
      this.formData.campos[centroCostosIndex].opciones = res;
    });

    // Cuentas bancarias
    this.tesoreriaHelper.getCuentasBancarias().subscribe(res => {
      if (res && res.Data) {
        this.formData.campos[cuentaBancariaIndex].opciones = res.Data.map(
          c => ({ Id: c.Id, Label: c.NumeroCuenta + ' - ' + c.NombreBanco + ' - ' + c.NombreSucursal }));
      }
    });

  }
  ngOnChanges(changes) {
    if (changes['updateSignal'] && this.updateSignal) {
      this.updateSignal.subscribe(() => {
        this.loadTree();
      });
    }
    if (changes['externalSearch'] && changes['externalSearch'].currentValue) {
      this.searchValue = changes['externalSearch'].currentValue;
    }
    if (changes['paramsFieldsName'] && changes['paramsFieldsName'].currentValue) {
      this.paramsFieldsName = changes['paramsFieldsName'].currentValue;
    }
  }

  // private data: TreeNode<EstructuraArbolRubrosApropiaciones>[] | TreeNode<EstructuraArbolRubros>[];

  private data: [];

  loadTree() {
    const getters: NbGetters<any, any> = {
      dataGetter: (node: any) => node.data || undefined,
      childrenGetter: (node: any) => !!node.children && !!node.children.length ? node.children : [],
      expandedGetter: (node: any) => !!node.expanded,
    };
    this.customColumn = 'Codigo';
    this.defaultColumns = ['Nombre', 'Activo'];
    this.allColumns = [this.customColumn, ...this.defaultColumns];
    this.treeHelper.getTree(true).subscribe(res => {
      this.data = res;
      this.dataSource = this.dataSourceBuilder.create(this.data, getters);
    });
  }
  updateTreeSignal($event) {
    this.loadTree();
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  async onSelect(selectedItem: any, treegrid) {
    this.idHighlight = treegrid.elementRef.nativeElement.getAttribute('data-picker');
    this.rubroSeleccionado.emit(selectedItem.data);
    this.selectedNodeData = selectedItem.data;

  }

  cleanInterface() {
    this.loadTree();
    this.cleanForm = !this.cleanForm;
    // this.selectedNodeData = undefined;
    this.formData.campos[FormManager.getIndexForm(this.formData, 'Codigo')].prefix.value = '';
    this.nodeData = undefined;
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + nextColumnStep * index;
  }

  updateHighlight(newHighlight: ElementRef, row) {
    this.oldHighlight && this.renderer.setStyle(this.oldHighlight.nativeElement, 'background', 'white');
    if (row.Codigo === this.idHighlight) {
      this.renderer.setStyle(newHighlight.nativeElement, 'background', 'lightblue');
    }
    this.oldHighlight = newHighlight;
  }

  validHighlight(selectedItem: any, treegrid) {

    if (selectedItem.data.Codigo === this.idHighlight) {
      this.updateHighlight(treegrid.elementRef, selectedItem.data);
      return true;
    }
    return false;
  }

  validarCampo($event) {
    // Cambios por campo
    switch ($event.nombre) {
      // Cuando se cambia el campo de cuenta alterna, se oculta o muestran el campo de cód y nombre
      case 'CuentaAlterna': {
        const codCuenta = this.formData.campos[FormManager.getIndexForm(this.formData, 'CodigoCuentaAlterna')];
        const nomCuenta = this.formData.campos[FormManager.getIndexForm(this.formData, 'NombreCuentaAlterna')];
        if ($event.valor !== undefined && $event.valor.Id) {
          codCuenta.claseGrid = codCuenta.claseGrid.replaceAll(' d-none', '');
          nomCuenta.claseGrid = nomCuenta.claseGrid.replaceAll(' d-none', '');
          codCuenta.requerido = true;
        } else {
          this.cuentaAlterna = null;
          codCuenta.claseGrid += ' d-none';
          nomCuenta.claseGrid += ' d-none';
          codCuenta.requerido = false;
        }
        break;
      }
      // Cuando se cambia el cód de cuenta, se debe buscar la cuenta
      case 'CodigoCuentaAlterna': {
        if (this.cuentaAlternaAnt !== $event.valor.toString()) {
          this.cuentaAlternaAnt = $event.valor;
          const nomCuenta = this.formData.campos[FormManager.getIndexForm(this.formData, 'NombreCuentaAlterna')];
          const cAlterna = $event.valor.toString();
          let cA = '';
          // Cuenta númerica a cuenta con guiones
          if (cAlterna.length >= 6) {
            cA = cAlterna[0] + '-' + cAlterna[1] + '-' + cAlterna.substring(2, 4) + '-' + cAlterna.substring(4, 6);
            if (cAlterna.length >= 8)
              cA += '-' + cAlterna.substring(6, 8);
          }
          // Valores para cuenta inválida o no encontrada
          this.cuentaAlterna = null;
          nomCuenta.requerido = true;
          nomCuenta.valor = '';
          nomCuenta.alerta = 'Cuenta inválida o no encontrada';
          // Solicitud de datos de cuenta
          this.treeHelper.getInfoCuenta(cA, false).subscribe(res => {
            if (res && res !== undefined && res.Codigo && res.Nombre) {
              // Valores para cuenta válida
              this.cuentaAlterna = res.Codigo;
              nomCuenta.requerido = false;
              nomCuenta.valor = res.Codigo + ' ' + res.Nombre;
              nomCuenta.alerta = null;
            }
          });
        }
        break;
      }
    }
  }

  validarForm($event) {
    if (!$event.valid) return;
    const nodeData = $event.data.NodoCuentaContable;

    nodeData['DetalleCuentaID'] = nodeData['DetalleCuentaID']['Id'];
    nodeData['MonedaID'] = nodeData['MonedaID']['Id'];
    nodeData['NaturalezaCuentaID'] = nodeData['NaturalezaCuentaID']['Id'];
    nodeData['CentroDecostosID'] = nodeData['CentroDecostosID']['Id'];
    nodeData['Ajustable'] = nodeData['Ajustable']['Id'];
    nodeData['RequiereTercero'] = nodeData['RequiereTercero']['Id'];
    nodeData['Nmnc'] = nodeData['Nmnc']['Id'];
    nodeData['CodigoCuentaAlterna'] = this.cuentaAlterna !== null ? this.cuentaAlterna.replaceAll('-', '') : null;
    nodeData['Codigo'] = nodeData['Codigo'] + '';
    nodeData['Activo'] = nodeData['Activa']['Id'];
    nodeData['CuentaBancariaID'] = nodeData['CuentaBancariaID']['Id'];
    if (this.selectedNodeData) {
      nodeData['Padre'] = this.selectedNodeData['Codigo'];
    }
    if (this.nodeData) {
      this.treeHelper.updateNode($event.data.NodoCuentaContable.Codigo, $event.data.NodoCuentaContable).subscribe(res => {
        if (res) {
          this.pUpManager.showAlert('success', 'Cuenta contable', 'Cuenta actualizada correctamente');
          this.cleanInterface();
          this.showTreeTab();
        }
      });
    } else {

      this.treeHelper.addNode($event.data.NodoCuentaContable).subscribe(res => {
        if (res) {
          this.pUpManager.showAlert('success', 'Cuenta contable', 'Cuenta registrada correctamente');
          this.cleanInterface();
          this.showTreeTab();
        }
      });
    }


  }

  showViewTab(option = '') {
    this.showTree = false;
    this.viewTab = true;
    this.formData.campos[FormManager.getIndexForm(this.formData, 'Codigo')].prefix.value = this.selectedNodeData ? this.selectedNodeData.Codigo + '-' : '';
    switch (option) {
      case 'group':
        this.selectedNodeData = undefined;
        this.formData.campos[FormManager.getIndexForm(this.formData, 'Codigo')].prefix.value = '';
        break;

      default:
        break;
    }
  }

  makeFormEditable(editable: boolean, update = false) {
    for (let i = 0; i < this.formData.campos.length; i++) {
      this.formData.campos[i].deshabilitar = editable;
    }
    // always "Codigo" field is disabled.
    if (update === true) {
      const codigoIndex = FormManager.getIndexForm(this.formData, 'Codigo');
      this.formData.campos[codigoIndex].deshabilitar = true;
    }
    this.formData.campos[FormManager.getIndexForm(this.formData, 'NombreCuentaAlterna')].deshabilitar = true;
  }

  showTreeTab() {
    this.showTree = true;
    this.viewTab = false;
  }

  getTreeInfo() {
    this.treeHelper.getInfoCuenta(this.selectedNodeData.Codigo).subscribe(res => {
      this.nodeData = res;
      const naturalezaIndex = FormManager.getIndexForm(this.formData, 'NaturalezaCuentaID');
      const tipoMonedaIndex = FormManager.getIndexForm(this.formData, 'MonedaID');
      const detalleCuentaIndex = FormManager.getIndexForm(this.formData, 'DetalleCuentaID');
      const centroCostosIndex = FormManager.getIndexForm(this.formData, 'CentroDecostosID');
      const cuentaBancariaIndex = FormManager.getIndexForm(this.formData, 'CuentaBancariaID');
      this.nodeData['DetalleCuentaID'] = this.formData.campos[detalleCuentaIndex].opciones.find(element => element.Id === this.nodeData['DetalleCuentaID']);
      this.nodeData['CentroDecostosID'] = this.formData.campos[centroCostosIndex].opciones.find(element => element.Id === this.nodeData['CentroDecostosID']);
      this.nodeData['MonedaID'] = this.formData.campos[tipoMonedaIndex].opciones.find(element => element.Id === this.nodeData['MonedaID']);
      this.nodeData['NaturalezaCuentaID'] = this.formData.campos[naturalezaIndex].opciones.find(element => element.Id === this.nodeData['NaturalezaCuentaID']);
      this.nodeData['Ajustable'] = this.nodeData['Ajustable'] === true ? { Label: 'Si', Id: true } : { Label: 'No', Id: false };
      this.nodeData['RequiereTercero'] = this.nodeData['RequiereTercero'] === true ? { Label: 'Si', Id: true } : { Label: 'No', Id: false };
      this.nodeData['Nmnc'] = this.nodeData['Nmnc'] === true ? { Label: 'Si', Id: true } : { Label: 'No', Id: false };
      this.nodeData['CuentaAlterna'] =
        this.nodeData['CodigoCuentaAlterna'] !== null && this.nodeData['CodigoCuentaAlterna'] !== '' ? { Label: 'Si', Id: true } : { Label: 'No', Id: false };
      this.nodeData['Activa'] = this.nodeData['Activo'] === true ? { Label: 'Si', Id: true } : { Label: 'No', Id: false };
      this.nodeData['CuentaBancariaID'] = this.formData.campos[cuentaBancariaIndex].opciones.find(element => element.Id === this.nodeData['CuentaBancariaID']);
    });
  }

}



@Component({
  selector: 'ngx-nb-fs-icon',
  template: `
    <nb-tree-grid-row-toggle
      [expanded]="expanded"
      *ngIf="isDir(); else fileIcon"
    >
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon> </ng-template>
  `,
})
export class FsIconAComponent {
  @Input() kind: string;

  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === 'dir';
  }
}
