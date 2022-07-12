import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { fromCuentaActions } from './actions';

export const CUENTA_FEATURE_KEY = 'Cuenta';
export const NATURALEZA_FEATURE_KEY = 'naturaleza';

export interface State extends EntityState<any> {
  loaded: boolean;
  error?: Error | any;
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({
  // In this case this would be optional since primary key is id
  selectId: item => item.data.Codigo,
});

export interface CuentaPartialState {
  readonly [CUENTA_FEATURE_KEY]: State;
  readonly [NATURALEZA_FEATURE_KEY]: State;
}

export const initialState: State = adapter.getInitialState({
  // Additional entity state properties
  loaded: false,
  error: null
});

const _reducer = createReducer(
  initialState,
  on(fromCuentaActions.loadCuentasSuccess, (state, { data }) => {
    if (!data) data = []
    return adapter.addMany(data, {
      ...state,
      loaded: true
    });
  }),
  on(fromCuentaActions.loadCuentasFail, (state, { error }) => {
    return {
      ...state,
      error
    };
  }),
  on(fromCuentaActions.loadCuentaSuccess, (state, { id, item }) => {
    return adapter.addOne(item, state);
  }),
  on(fromCuentaActions.loadCuentaFail, (state, { error }) => {
    return {
      ...state,
      error
    };
  }),
  on(fromCuentaActions.loadNaturalezasSuccess, (state, { data }) => {
    return adapter.addMany(data, {
      ...state,
      loaded: true
    });
  }),
  on(fromCuentaActions.loadNaturalezasFail, (state, { error }) => {
    return {
      ...state,
      error
    };
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}
