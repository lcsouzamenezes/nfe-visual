import vue from 'vue';
import * as types from './types';

export const state = {
  notas: [],
  nota: {},
};

export const mutations = {
  [types.SYNC_NOTAS](state, params) {
    state.notas = params;
  },
  [types.INSERT_TRADE](state, params) {
    state.dashboard.trades.push(params);
  },
  [types.UPDATE_TRADE](state, params) {
    vue.set(state.dashboard.trades, params.index, params);
  },
  [types.REMOVE_TRADE](state, params) {
    vue.delete(state.dashboard.trades, params);
  },
  [types.REMOVE_ALL_TRADES](state) {
    vue.set(state.dashboard, 'trades', []);
  },
  [types.INSERT_SESSION](state, params) {
    const data = state.dashboard.sessions;
    data.push(params);

    vue.set(state.dashboard, 'sessions', data);
  },
  [types.REMOVE_ALL_SESSION](state) {
    vue.set(state.dashboard, 'sessions', []);
  },
  [types.SYNC_NOTA](state, params) {
    state.nota = params;
  },
};
