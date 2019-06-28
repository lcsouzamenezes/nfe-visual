<template>
  <v-container>
    <div class="display-1">
        Bem vindo ao NF-E Visual!
    </div>
    <v-btn to="/nfe/notas-by-user">Listar Notas</v-btn>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  created() {
    this.syncUsuarioAction(this.$route.params.token);
  },
  computed: {
    ...mapGetters({
      usuarioGetter: 'usuario/usuarioGetter',
    }),
  },
  methods: {
    ...mapActions({
      syncUsuarioAction: 'usuario/syncUsuarioAction',
    }),
  },
};
</script>
