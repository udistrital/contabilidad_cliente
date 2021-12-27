import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { fromCuentaActions } from './actions';
import { ArbolHelper } from '../helpers/arbol/arbolHelper';

@Injectable()
export class CuentaEffects {
  loadCuentas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCuentaActions.loadCuentas),
      switchMap(() =>
        this.entityService.getTree().pipe(
          map((res: any) => fromCuentaActions.loadCuentasSuccess({
              data: res
            })
          ),
          catchError(error =>
            of(
              fromCuentaActions.loadCuentasFail({
                error
              })
            )
          )
        )
      )
    )
  );

  loadNaturalezas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCuentaActions.loadNaturalezas),
      switchMap(() =>
        this.entityService.getNaturalezaCuenta().pipe(
          map((res: any) => fromCuentaActions.loadNaturalezasSuccess({
              data: res
            })
          ),
          catchError(error =>
            of(
              fromCuentaActions.loadNaturalezasFail({
                error
              })
            )
          )
        )
      )
    )
  );


  constructor(
    private actions$: Actions,
    private entityService: ArbolHelper
  ) {}
}
