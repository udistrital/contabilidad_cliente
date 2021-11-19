import { Component, OnInit} from '@angular/core';
import { NbGetters, NbSortDirection, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbSortRequest } from '@nebular/theme';
import { ArbolHelper } from '../../@core/helpers/arbol/arbolHelper';
import { EstructuraCuentaContable } from './cuenta-contable.model';

@Component({
  selector: 'ngx-arbol-contable',
  templateUrl: './arbol-contable.component.html',
  styleUrls: ['./arbol-contable.component.scss'],
})
export class ArbolContableComponent implements OnInit {
  customColumn = 'Codigo';
  defaultColumns = ['Nombre', 'Activo'];
  allColumns = [this.customColumn, ...this.defaultColumns];
  dataSource: NbTreeGridDataSource < EstructuraCuentaContable > ;
  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  data: null;
  selectedNode: EstructuraCuentaContable;

  constructor(
    private dataSourceBuilder: NbTreeGridDataSourceBuilder < EstructuraCuentaContable > ,
    private treeHelper: ArbolHelper
  ) {}

  ngOnInit() {
    this.loadTree();
  }

  loadTree() {
    const getters: NbGetters < any, any > = {
      dataGetter: (node: any) => node.data || undefined,
      childrenGetter: (node: any) =>
        !!node.children && !!node.children.length ? node.children : [],
      expandedGetter: (node: any) => !!node.expanded,
    };
    this.treeHelper.getTree(true).subscribe((res) => {
      this.dataSource = this.dataSourceBuilder.create(res, getters);
      this.data = res;
    });
  }

  onSelect(row) {
    this.selectedNode = row.data;
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
}
