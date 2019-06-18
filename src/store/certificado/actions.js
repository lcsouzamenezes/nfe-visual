import * as types from './types';
import * as api from '@/api/certificado';

export const certificadoAction = async ({ commit }, params) => {
  await api.syncCertificado(params)
    .then((response) => {
      const { data } = response;
      commit(types.SYNC_CERTIFICADO, data);
    }).catch((e) => {
      // console.log(e)
      // throw new TypeError(e, 'error', 10);
    });
};

export const listarCertificadoAction = ({ commit }) => {
  api.syncListarCertificado()
    .then((response) => {
      const { data } = response;
      commit(types.SYNC_LISTAR_CERTIFICADO, data);
    }).catch((e) => {
      // console.log(e)
      // throw new TypeError(e, 'error', 10);
    });
};
