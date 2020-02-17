import { RequestManager } from '../managers/requestManager';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ConceptosService {

  entityEvent: string;

  private entitySubect        = new BehaviorSubject([]);
  public  $entityProceedEvent = this.entitySubect.asObservable();


  public updateEvent(event){
    this.entityEvent = event;
    this.entitySubect.next(event);
  }

}