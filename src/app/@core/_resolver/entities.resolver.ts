import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { fromCuentaActions } from '../_store/actions';
import { CuentaPartialState } from '../_store/reducer';
import { selectCuentaLoaded,  selectNaturalezaLoaded} from '../_store/selectors';



@Injectable()
export class CuentasResolver implements Resolve<boolean> {
  constructor(private store: Store<CuentaPartialState>) {}

  resolve(): Observable<boolean> {
    const loaded$ = this.store.pipe(select(selectCuentaLoaded));

    const loadedNaturaleza$ = this.store.pipe(select(selectNaturalezaLoaded));

    return loaded$.pipe(
      filter(loaded => {
        if (loaded === false) {
          this.store.dispatch(fromCuentaActions.loadCuentas());
        }

        return loaded;
      }),
      take(1)
    );
  }
}
