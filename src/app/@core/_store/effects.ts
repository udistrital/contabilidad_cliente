import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { fromEntityActions } from './actions';
import { ArbolHelper } from '../helpers/arbol/arbolHelper';

@Injectable()
export class EntityEffects {
  loadEntities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEntityActions.loadEntities),
      switchMap(() =>
        this.entityService.getTree().pipe(
          map((res: any) => fromEntityActions.loadEntitiesSuccess({
              data: res
            })
          ),
          catchError(error =>
            of(
              fromEntityActions.loadEntitiesFail({
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
