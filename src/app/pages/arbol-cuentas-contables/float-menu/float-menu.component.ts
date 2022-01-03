import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

export interface MenuType {
  direction: 'column' | 'row';
  style: 'primary' | 'basic-dark';
  expanded: boolean;
  options: {
      showLabel: boolean;
      key: string;
      label: string;
      color: string;
      icon: string;
  }[];
}

@Component({
  selector: 'ngx-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss']
})
export class FloatMenuComponent implements OnInit {

  @Input() menu: MenuType;
  @Output() itemClick: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(e) {
    this.itemClick.emit(e);
  }

}
