import * as http from './http';

const buildData = (params) => {
  const bodyFormData = new FormData();

  Object.keys(params).forEach((key) => {
    bodyFormData.append(key, params[key]);
  });

  return bodyFormData;
};

export const syncCertificado = (params) => {
  const path = '/nfe/admin/cadastrar-certificado';
  return http.postRequest(path, buildData(params));
};

export const syncListarCertificado = function () {
  return http.postRequest('/nfe/admin/listar-certificados');
};
