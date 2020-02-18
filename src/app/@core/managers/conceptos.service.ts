import { RequestManager } from '../managers/requestManager';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ConceptosService {

  entityEvent: string;
  entityListConceptos: string[];

  private entitySubect        = new BehaviorSubject([]);
  public  $entityProceedEvent = this.entitySubect.asObservable();


  public updateEvent(event) {
    this.entityEvent = event;
    this.entitySubect.next(event);
  }

  public getListConceptosNames() {
    return this.entityListConceptos;
  }

  public validateConceptNameExits(name){
    let arrayNames = this.getListConceptosNames();
    if (arrayNames.includes(name.toLowerCase())){
      return true;
    } else {
      return false;
    }
  }
}