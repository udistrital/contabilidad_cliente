import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ProvisionesHelper } from '../../../@core/helpers/provisiones/provisionesHelper';




@Component({
  selector: 'ngx-set-resumenprovision',
  templateUrl: './set-resumenprovision.component.html',
  styleUrls: ['./set-resumenprovision.component.scss']
})
export class SetResumenprovisionComponent implements OnInit {

  @Output() resetStepper = new EventEmitter();

  constructor( public provisionesHelper: ProvisionesHelper) {

   }

  ngOnInit() {
  }

  reset() {
    this.provisionesHelper.nuevaProvision = {};
    this.resetStepper.emit(0);
  }

  borrarRegistro() {
    this.provisionesHelper.listaProvisiones.splice(-1, 1);
  }

}
