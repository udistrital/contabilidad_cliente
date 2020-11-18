import { Component, OnInit, Input, Output,ViewChildren, ElementRef, EventEmitter, Renderer2} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition } from '@angular/animations';
import {
    NbGetters,
    NbSortDirection,
    NbTreeGridRowComponent,
    NbTreeGridDataSource,
    NbTreeGridDataSourceBuilder,
    NbSortRequest,
  } from '@nebular/theme';
  import { Observable, forkJoin } from 'rxjs';
import { ArbolHelper } from '../../../@core/helpers/arbol/arbolHelper';
import { FormGroup } from '@angular/forms';
import { FormManager } from '../../../@core/managers/formManager';
import { fruits } from '../../layout/list/fruits-list';

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
  selector: 'ngx-cuentas-contables',
  templateUrl: './cuentas-contables.component.html',
  styleUrls: ['./cuentas-contables.component.scss'],
  animations: [
    trigger('changeSelectedValue',[
      state('initial', style({
        color: '#101426',
        fontSize:  '1.1rem'
      })),
      state('highlight', style({
        color: '#42A948',
        fontSize:  '1.15rem'
      })),
      transition('initial <=> highlight',animate('200ms'))
    ]),
  ]
})
export class CuentasContablesComponent implements OnInit {
  fruits = fruits;
  @Input("selectionDebito")  selectionDebito: string ;
  @Input("selectionCredito") selectionCredito: string ;
  @Input("wizzardSteps")     wizzardSteps: boolean;
  @Input() updateSignal: Observable<string[]>;
  @Input('paramsFieldsName') paramsFieldsName: object;

  @Output() updateCuentaDebito  = new EventEmitter<string>();
  @Output() updateCuentaCredito = new EventEmitter<string>();
  @Output() guardarCuentas      = new EventEmitter<boolean>();
  @Output() rubroSeleccionado = new EventEmitter();
  
  @ViewChildren(NbTreeGridRowComponent, { read: ElementRef }) treeNodes: ElementRef[];

  stateHighlight: string = 'initial';
  animationCuenta: string;

  update: any;
  customColumn = 'Codigo';
  defaultColumns = ['Nombre'];
  hasListener: any[] = [];
  oldHighlight: ElementRef;
  searchValue: string;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  idHighlight: any;
  isSelected: boolean;
  selectedNodeData: any;

  allColumns = [this.customColumn, ...this.defaultColumns];
  dataSourceCredito: NbTreeGridDataSource<EstructuraArbolRubrosApropiaciones>;
  dataSourceDebito: NbTreeGridDataSource<EstructuraArbolRubrosApropiaciones>;

  private data: [];
  constructor(
    private renderer: Renderer2,
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<EstructuraArbolRubrosApropiaciones>,
    private treeHelper: ArbolHelper,
  ) { }



  ngOnInit() {
    this.loadTreeCuenta('credito');
    this.loadTreeCuenta('debito');
  }

  ngOnChanges(changes) {
    if (changes['updateSignal'] && this.updateSignal) {
      this.updateSignal.subscribe(() => {
        this.loadTreeCuenta('credito');
        this.loadTreeCuenta('debito');
      });
    }
    if (changes['externalSearch'] && changes['externalSearch'].currentValue) {
      this.searchValue = changes['externalSearch'].currentValue;
    }
    if (changes['paramsFieldsName'] && changes['paramsFieldsName'].currentValue) {
      this.paramsFieldsName = changes['paramsFieldsName'].currentValue;
    }
  }

  async onSelect(selectedItem: any, treegrid) {
    this.idHighlight = treegrid.elementRef.nativeElement.getAttribute('data-picker');
    this.rubroSeleccionado.emit(selectedItem.data);
    this.selectedNodeData = selectedItem.data;

  }

  triggerAnimationText(cuenta: string){
    if (cuenta == 'debito'  && this.animationCuenta === 'debito') {
      return 'highlight';
    }
    else if (cuenta == 'credito' && this.animationCuenta === 'credito') {
      return 'highlight';
    } else {
      return 'initial';
    }
  }

  loadTreeCuenta(cuenta) {
    const getters: NbGetters<any, any> = {
      dataGetter: (node: any) => node.data || undefined,
      childrenGetter: (node: any) => !!node.children && !!node.children.length ? node.children : [],
      expandedGetter: (node: any) => !!node.expanded,
    };
    this.customColumn = 'Codigo';
    this.defaultColumns = ['Nombre'];
    this.allColumns = [this.customColumn, ...this.defaultColumns];
    this.treeHelper.getCuenta(cuenta,true).subscribe(res => {
      this.data = res;
      if (cuenta == 'credito'){
        this.dataSourceCredito = this.dataSourceBuilder.create(this.data, getters);
      } else if (cuenta == 'debito') {
        this.dataSourceDebito = this.dataSourceBuilder.create(this.data, getters);
      }
    });
  }


  /* updateTreeSignal($event) {
    this.loadTreeCuenta('debito');
    this.loadTreeCuenta('credito');
  } */


  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + nextColumnStep * index;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
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

  updateCredito(cuenta) {
    this.selectionCredito  = cuenta.data.Nombre;
    this.updateCuentaCredito.emit(this.selectionCredito);
    this.animationCuenta = 'credito';
    this.stateHighlight  = 'highlight';
    console.log(this.selectionCredito);
  }

  updateDebito(cuenta) {
    this.selectionDebito   = cuenta.data.Nombre;
    this.updateCuentaDebito.emit(this.selectionDebito);
    this.animationCuenta = 'debito';
    this.stateHighlight  = 'highlight';
    console.log(this.selectionDebito);
  }

  restaurarAnimationInitial( event ){
    this.stateHighlight = 'initial';
  }

  enviarGuardado(){
    this.guardarCuentas.emit(true);
  }
}
