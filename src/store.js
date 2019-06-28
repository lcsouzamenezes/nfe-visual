import Vue from 'vue';
import Vuex from 'vuex';
import global from './store/global/index';
import usuario from './store/usuario/index';
import nota from './store/nota/index';
import certificado from './store/certificado/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
    usuario,
    nota,
    certificado,
  },
  debug: true,
});
