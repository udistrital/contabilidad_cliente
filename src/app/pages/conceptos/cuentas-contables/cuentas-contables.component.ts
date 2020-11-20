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
  } from '@nebular/theme';

import { Observable } from 'rxjs';
import { ArbolHelper } from '../../../@core/helpers/arbol/arbolHelper';

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
  
  
  @Input("wizzardSteps")     wizzardSteps: boolean;
  @Input() updateSignal: Observable<string[]>;
  @Input('paramsFieldsName') paramsFieldsName: object;
  @Input () selectedNodeData: any;
  @Input("selectionDebito")  selectionDebito: string ;
  @Input("selectionCredito") selectionCredito: string ;

  @Output() guardarCuentas      = new EventEmitter<boolean>();
  @Output() columns : any;
  @Output() updateCuentaDebito  = new EventEmitter<string>();
  @Output() updateCuentaCredito = new EventEmitter<string>();

  @ViewChildren(NbTreeGridRowComponent, { read: ElementRef }) treeNodes: ElementRef[];

  stateHighlight: string = 'initial';
  animationCuenta: string;

  customColumn = 'Codigo';
  defaultColumns = ['Nombre'];
  searchValue: string;

  sortDirection: NbSortDirection = NbSortDirection.NONE;

  dataSourceCredito: NbTreeGridDataSource<EstructuraArbolRubrosApropiaciones>;
  dataSourceDebito: NbTreeGridDataSource<EstructuraArbolRubrosApropiaciones>;

  private data: [];
  constructor(
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<EstructuraArbolRubrosApropiaciones>,
    private treeHelper: ArbolHelper,
  ) { }

  ngOnInit() {
    this.loadTreeCuenta();
  }

  updateCredito(cuenta) {
    this.selectionCredito  = cuenta;
    this.updateCuentaCredito.emit(this.selectionCredito);
    this.animationCuenta = 'credito';
    this.stateHighlight  = 'highlight';
  }

  updateDebito(cuenta) {
    this.selectionDebito   = cuenta;
    this.updateCuentaDebito.emit(this.selectionDebito);
    this.animationCuenta = 'debito';
    this.stateHighlight  = 'highlight';
  }

  ngOnChanges(changes) {
    if (changes['updateSignal'] && this.updateSignal) {
      this.updateSignal.subscribe(() => {
        this.loadTreeCuenta();
      });
    }
    if (changes['externalSearch'] && changes['externalSearch'].currentValue) {
      this.searchValue = changes['externalSearch'].currentValue;
    }
    if (changes['paramsFieldsName'] && changes['paramsFieldsName'].currentValue) {
      this.paramsFieldsName = changes['paramsFieldsName'].currentValue;
    }
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

  loadTreeCuenta() {
    const getters: NbGetters<any, any> = {
      dataGetter: (node: any) => node.data || undefined,
      childrenGetter: (node: any) => !!node.children && !!node.children.length ? node.children : [],
      expandedGetter: (node: any) => !!node.expanded,
    };
    this.customColumn = 'Codigo';
    this.defaultColumns = ['Nombre'];
    this.columns = [this.customColumn, ...this.defaultColumns];
    this.treeHelper.getCuenta('credito',true).subscribe(res => {
      this.data = res;
      this.dataSourceCredito = this.dataSourceBuilder.create(this.data, getters);
    });
    this.treeHelper.getCuenta('debito',true).subscribe(res => {
      this.data = res;
      this.dataSourceDebito = this.dataSourceBuilder.create(this.data, getters);
    });
  }


  restaurarAnimationInitial( event ){
    this.stateHighlight = 'initial';
  }

  enviarGuardado(){
    this.guardarCuentas.emit(true);
  }
}
