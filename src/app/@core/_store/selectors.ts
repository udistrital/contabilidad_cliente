import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, adapter, CUENTA_FEATURE_KEY, NATURALEZA_FEATURE_KEY } from './reducer';

// Lookup the 'Cuenta' feature state managed by NgRx
const getCuentaState = createFeatureSelector<State>(CUENTA_FEATURE_KEY);
const getNaturalezaState = createFeatureSelector<State>(NATURALEZA_FEATURE_KEY);

// get the selectors
const { selectIds, selectAll, selectTotal } = adapter.getSelectors();

// select the array of Cuenta ids
export const selectCuentaIds = createSelector(
  getCuentaState,
  selectIds
);

// select the array of Cuentas
export const selectAllCuentas = createSelector(
  getCuentaState,
  selectAll
);

// select the total Cuenta count
export const selectCuentaCount = createSelector(
  getCuentaState,
  selectTotal
);

// select entity loaded flag
export const selectCuentaLoaded = createSelector(
  getCuentaState,
  state => state.loaded
);

export const selectNaturalezaLoaded = createSelector(
  getNaturalezaState,
  state => state.loaded
);


// select entity error
export const selectError = createSelector(
  getCuentaState,
  state => state.error
);

export const selectAllNaturalezas = createSelector(
  getNaturalezaState,
  selectAll
);
