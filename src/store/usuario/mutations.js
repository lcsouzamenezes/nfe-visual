import * as types from './types'

export const state = {
  usuario: {}
}

export const mutations = {
  [types.SYNC_USUARIO] (state, params) {
    state.usuario = params
    localStorage.setItem('usuario', JSON.stringify(params));
  },
  [types.SYNC_USUARIO_LOCAL] (state, params) {
    state.usuario = JSON.parse(params)
  }
}
