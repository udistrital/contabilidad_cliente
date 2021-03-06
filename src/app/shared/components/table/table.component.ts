import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ngx-general-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges, OnInit {

  @Input() config: any;
  @Input() datos: any;
  @Output() selectedAction: EventEmitter<any>;
  Subtotal: any;
  stringBusqueda: string;
  datosPrueba: any[];
  rowspanTitle: number;
  rowspanTable: any[];
  keyCompound: any;
  keyObject: any;

  constructor(
  ) {
    this.stringBusqueda = '';
    this.selectedAction = new EventEmitter<any>();
    this.rowspanTitle = 1;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.ConfiguracionTabla();
    }
  }

  ngOnInit() {
    this.ConfiguracionTabla();
  }

  ConfiguracionTabla() {
    if (this.config.endSubtotal) {
      if (!this.config.endSubtotal.last.name) {
        const arraySubtotal: any[] = [];
        if (Object.keys(this.datos).length !== 0) {
          this.datos.forEach((element: any) => {
            if (element.compound) {
              this.rowspanTitle = 2;
            }
            arraySubtotal.push(parseFloat(element[this.config.endSubtotal.property]));
          });
          this.Subtotal = arraySubtotal.reduce((accumulator, currentValue) => accumulator + currentValue);
        }
      }
    }

    const tablespan: any = [];
    this.config.dataConfig.forEach((element: any) => {
      if (element.compound !== undefined) {
        this.rowspanTitle = 2;
        this.keyCompound = element.key;
      }
      if (element.objectKeys !== undefined) {
        this.rowspanTitle = 2;
        this.keyObject = element.key;
      }
    });
    if (this.keyCompound !== undefined) {
      this.datos.forEach((element: any) => {
        tablespan.push(element[this.keyCompound].length + 1);
      });
    }
    this.rowspanTable = tablespan;
  }

  SelectedAllAction(action: any) {
    // console.log('Sirvio Action');
  }

  SelectedAction(action: any , row: any) {
    this.selectedAction.emit({accion: action, fila: row});
  }

}
