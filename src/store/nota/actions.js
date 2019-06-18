import * as types from './types';
import * as api from '@/api/nota';

export const notasAction = ({ commit }) => {
  api.syncNotas()
    .then((response) => {
      const { data } = response;
      commit(types.SYNC_NOTAS, data);
    }).catch((e) => {
      // console.log(e)
      // throw new TypeError(e, 'error', 10);
    });
};

export const syncNotasByUserAction = ({ commit }, params) => {
  api.syncNotasByUser(params)
    .then((response) => {
      const { data } = response;
      commit(types.SYNC_NOTAS, data);
    }).catch((e) => {
      // console.log(e)
      // throw new TypeError(e, 'error', 10);
    });
};

export const syncNotaAction = ({ commit }, params) => {
  api.syncNota(params)
    .then((response) => {
      const { data } = response;
      commit(types.SYNC_NOTA, data);
    }).catch((e) => {
      // console.log(e)
      // throw new TypeError(e, 'error', 10);
    });
};
