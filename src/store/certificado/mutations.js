import * as types from './types'

export const state = {
  certificado: {},
  listarCertificado: [],
  excluirCertificado: []
};

export const mutations = {
    [types.SYNC_CERTIFICADO] (state, params) {
      state.certificado = params;
      localStorage.setItem('certificado', JSON.stringify(params));
    },
    [types.SYNC_LISTAR_CERTIFICADO] (state, params) {
      state.listarCertificado = params;
      localStorage.setItem('listarCertificado', JSON.stringify(params));
    },
    [types.SYNC_EXCLUIR_CERTIFICADO] (state, params) {
      state.excluirCertificado = params;
      localStorage.setItem('excluirCertificado', JSON.stringify(params));
    }
};
