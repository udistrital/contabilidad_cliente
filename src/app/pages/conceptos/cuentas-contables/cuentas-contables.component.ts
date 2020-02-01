import { Component, OnInit } from '@angular/core';
import { fruits } from '../../layout/list/fruits-list';

@Component({
  selector: 'ngx-cuentas-contables',
  templateUrl: './cuentas-contables.component.html',
  styleUrls: ['./cuentas-contables.component.scss']
})
export class CuentasContablesComponent implements OnInit {
  fruits = fruits;
  
  constructor() { }

  ngOnInit() {
  }

}
