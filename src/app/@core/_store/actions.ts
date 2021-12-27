import { createAction, props } from '@ngrx/store';

export enum CuentaActionTypes {
  LoadCuentas = '[Cuenta] Load Cuentas',
  LoadCuentasSuccess = '[Cuenta] Load Cuentas Success',
  LoadCuentasFail = '[Cuenta] Load Cuentas Fail',
  LoadCuenta = '[Cuenta] Load Cuenta',
  LoadCuentaSuccess = '[Cuenta] Load Cuenta Success',
  LoadCuentaFail = '[Cuenta] Load Cuenta Fail',
  UpdateCuenta = '[Cuenta] Update Cuenta',
  UpdateCuentaSuccess = '[Cuenta] Update Cuenta Success',
  UpdateCuentaFail = '[Cuenta] Update Cuenta Fail',
  LoadNaturalezas = '[Naturaleza] Load Naturaleza',
  LoadNaturalezasSuccess = '[Naturaleza] Load Naturalezas Success',
  LoadNaturalezasFail = '[Naturaleza] Load Naturalezas Fail',
}

export const loadCuentas = createAction(CuentaActionTypes.LoadCuentas);

export const loadCuentasSuccess = createAction(
  CuentaActionTypes.LoadCuentasSuccess,
  props<{ data: any[] }>()
);

export const loadCuentasFail = createAction(
  CuentaActionTypes.LoadCuentasFail,
  props<{ error: Error | any }>()
);

export const loadCuenta = createAction(
  CuentaActionTypes.LoadCuenta,
  props<{ id: string | number }>()
);

export const loadCuentaSuccess = createAction(
  CuentaActionTypes.LoadCuentaSuccess,
  props<{ id: string | number; item: any }>()
);

export const loadCuentaFail = createAction(
  CuentaActionTypes.LoadCuentaFail,
  props<{ error: Error | any }>()
);

export const updateCuenta = createAction(
  CuentaActionTypes.UpdateCuenta,
  props<{ id: number | string; originalItem: any; updatedItem: any }>()
);

export const updateCuentaSuccess = createAction(
  CuentaActionTypes.UpdateCuentaSuccess,
  props<{ id: number | string; originalItem: any; updatedItem: any }>()
);

export const updateCuentaFail = createAction(
  CuentaActionTypes.UpdateCuentaFail,
  props<{
    id: number | string;
    originalItem: any;
    updatedItem: any;
    error: Error | any;
  }>()
);

export const loadNaturalezas = createAction(CuentaActionTypes.LoadNaturalezas);

export const loadNaturalezasSuccess = createAction(
  CuentaActionTypes.LoadNaturalezasSuccess,
  props<{ data: any[] }>()
);

export const loadNaturalezasFail = createAction(
  CuentaActionTypes.LoadNaturalezasFail,
  props<{ error: Error | any }>()
);

export const fromCuentaActions = {
  loadCuentas,
  loadCuentasFail,
  loadCuentasSuccess,
  loadCuenta,
  loadCuentaFail,
  loadCuentaSuccess,
  loadNaturalezas,
  loadNaturalezasFail,
  loadNaturalezasSuccess,
};
