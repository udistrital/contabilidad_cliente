import { EstructuraCuentaContable } from './arbol-contable/cuenta-contable.model';
import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import locales from '@angular/common/locales/es-CO';

registerLocaleData(locales, 'co');


@Component({
  selector: 'ngx-arbol-cuentas-contables',
  templateUrl: './arbol-cuentas-contables.component.html',
  styleUrls: ['./arbol-cuentas-contables.component.scss'],
})
export class ArbolCuentasContablesComponent implements OnInit {

  defaultOptions = [{
    key: 'crear',
    label: 'crear',
    color: 'yellow',
    icon: 'plus'
  }];

  selectedOptions = [
    {
      key: 'ver',
      label: 'ver',
      color: 'yellow',
      icon: 'glasses'
    },
    {
      key: 'editar',
      label: 'editar',
      color: 'yellow',
      icon: 'edit'
    },
    {
      key: 'eliminar',
      label: 'eliminar',
      color: 'yellow',
      icon: 'trash'
    }
  ];

  menu = {
    direction: 'row',
    style: 'basic-dark',
    expanded: false,
    options:  [
      ...this.defaultOptions
    ]
  };

  tabs = [];

  tabItemsActions = [];
  selected: number = 0;
  selectedCoumt: EstructuraCuentaContable;

  constructor() {}

  ngOnInit() {
  }

  selectAction(action: string) {
    let node = {};
    switch (action) {
      case 'delete':
        return;
      case 'crear':
        node = { title: 'Nueva Cuenta', type: action};
        break;
      default:
        node = {title: `${this.selectedCoumt.Codigo} ${this.selectedCoumt.Nombre}`, data: this.selectedCoumt, type: action, code: this.selectedCoumt.Codigo};
        break;
    }
    const index: number = this.tabs.findIndex(item => item.type === action && (action === 'crear' || item.code === this.selectedCoumt.Codigo) );
    if (index < 0 ) {
      this.selected  = this.tabs.push(node);
      return;
    }
    this.selected = index + 1;
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  onSelectNode(e) {
    this.selectedCoumt = e;
    this.menu.options = [...this.defaultOptions, ...this.selectedOptions];
  }

}
