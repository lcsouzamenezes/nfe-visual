import * as http from './http';

export const syncUsuario = function (params) {
  return http.getRequest(`/conta/usuario/${params}`);
};
