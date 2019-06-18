import * as http from './http';


export const syncNotas = function () {
  return http.getRequest('/nfe/listar-notas');
};

export const syncNotasByUser = function (params) {
  return http.getRequest(`/nfe/listar-notas/${params}`);
};

export const syncNota = id => http.getRequest(`/nfe/buscar-notas/${id}`);
