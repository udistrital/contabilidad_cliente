/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: false,
  NUXEO: {
    PATH: 'https://documental.udistrital.edu.co/nuxeo/',
  },
  CLIENTE_PRESUPUESTO: 'https://pruebaspresupuesto.portaloas.udistrital.edu.co/pages',
  CLIENTE_CONTABILIDAD: '/pages/comprobantes',
  WSO2_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/',
  PLAN_CUENTAS_MONGO_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/plan_cuentas_mongo_crud/v1/',
  CUENTAS_CONTABLES_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/cuentas_contables_crud/v1/',
  CONFIGURACION_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/configuracion_crud_api/v1/',
  TESORERIA_MID_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/tesoreria_mid/v1/',
  CONF_MENU_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/configuracion_crud_api/v1/menu_opcion_padre/ArbolMenus/',
  MOVIMIENTOS_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/movimientos_contables_crud/v1/',
  MOVIMIENTOS_MID: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/movimientos_contables_mid/v1/',
  TOKEN: {
    AUTORIZATION_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize',
    CLIENTE_ID: 'uWfP3Z3v8e6b35LOxzj_eSEnbJwa',
    RESPONSE_TYPE: 'id_token token',
    SCOPE: 'openid email role',
    REDIRECT_URL: 'https://pruebascontabilidad.portaloas.udistrital.edu.co',
    SIGN_OUT_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oidc/logout',
    SIGN_OUT_REDIRECT_URL: 'https://pruebascontabilidad.portaloas.udistrital.edu.co',
  },

};
