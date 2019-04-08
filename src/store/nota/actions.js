import * as types from './types'
import * as api from '@/api/nota'

export const notasAction = ({ commit }) => {
    console.log('action')
    api.syncNotas()
        .then((response) => {
            console.log('200')
            const { data } = response;
            commit(types.SYNC_NOTAS, data)
        }).catch((e) => {
            console.log(e)
            // throw new TypeError(e, 'error', 10);
        });
};
