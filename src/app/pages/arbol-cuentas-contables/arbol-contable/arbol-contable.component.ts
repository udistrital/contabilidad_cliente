import { MovimientosCuentaComponent } from './../movimientos-cuenta/movimientos-cuenta.component';
import { selectAllCuentas } from './../../../@core/_store/selectors';
import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NbGetters, NbSortDirection, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbSortRequest } from '@nebular/theme';
import { EstructuraCuentaContable } from './cuenta-contable.model';
import { Store, select } from '@ngrx/store';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'ngx-arbol-contable',
  templateUrl: './arbol-contable.component.html',
  styleUrls: ['./arbol-contable.component.scss'],
})
export class ArbolContableComponent implements OnInit {

  @Output() onSelection: EventEmitter<EstructuraCuentaContable> = new EventEmitter();

  customColumn = 'Codigo';
  customMovimientos = 'Movimientos';
  customDisponible = 'Disponible';
  defaultColumns = ['Nombre'];
  allColumns = [this.customColumn, ...this.defaultColumns, this.customDisponible, this.customMovimientos];
  dataSource: NbTreeGridDataSource < EstructuraCuentaContable > ;
  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  data: any;
  selectedNode: EstructuraCuentaContable;

  dataTree = this.store.pipe(select(selectAllCuentas));

  constructor(
    private dataSourceBuilder: NbTreeGridDataSourceBuilder < EstructuraCuentaContable >,
    private store: Store<any>,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadTree();
  }

  loadTree() {
    const getters: NbGetters < any, any > = {
      dataGetter: (node: any) => node.data || undefined,
      childrenGetter: (node: any) =>
        ( !!node.children && !!node.children.length ) ? node.children : [],
      expandedGetter: (node: any) => !!node.expanded,
    };

    this.dataTree.subscribe(res => {
      this.dataSource = this.dataSourceBuilder.create(res, getters);
      this.data = res;
    });

  }

  onSelect(row) {
    this.selectedNode = row.data;
    this.onSelection.emit(this.selectedNode );
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.dataSource.sort(sortRequest);
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + nextColumnStep * index;
  }

  openDialog(row): void {
    const dialogRef = this.dialog.open(MovimientosCuentaComponent, {
      data: row,
      width: '95%',
      maxWidth: '95%',
      minWidth: '95%',
    });
  }
}
