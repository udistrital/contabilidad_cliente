import { Component, OnInit, Input, Output, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition } from '@angular/animations';
import {
    NbSortDirection,
    NbSortRequest,
  } from '@nebular/theme';

@Component({
  selector: 'ngx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
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
export class TableComponent implements OnInit {
    
  @Input() allColumns : any;
  @Input() dataSource : any;
  @Input() selection: String = "";
  
  @Output() rubroSeleccionado = new EventEmitter();
  @Output() selectedNodeData: any;
  @Output() updateDebito  = new EventEmitter<string>();
  @Output() updateCredito = new EventEmitter<string>();
  

  customColumn = 'Codigo';
  defaultColumns = ['Nombre'];
  oldHighlight: ElementRef;
  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  idHighlight: any;

  constructor(
    private renderer: Renderer2) { 
      
  }

  ngOnInit() {
  }

  async onSelect(selectedItem: any, treegrid) {
    this.idHighlight = treegrid.elementRef.nativeElement.getAttribute('data-picker');
    this.selectedNodeData = selectedItem.data;
    if (this.selection=='credito'){
      this.updateCredito.emit(this.selectedNodeData.Nombre);   
    } else if (this.selection=='debito'){
      this.updateDebito.emit(this.selectedNodeData.Nombre);
    }
  }


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
  
}
