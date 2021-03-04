
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/* tslint:disable:component-selector */
@Component({
  selector: '[ngx-cell-view]',
  templateUrl: './cell-view.component.html',
  styleUrls: ['./cell-view.component.scss']
})
export class CellViewComponent implements OnInit {

  @Input() config: any;
  @Input() items: any;
  @Input() rowspanTable: any;
  @Input() index: any;
  @Output() accionFila = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  SelectedAction(action: any, row: any, index: any) {
    this.accionFila.emit({accion:action.name, fila:index})
  }

}