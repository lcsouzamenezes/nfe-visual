<template>
    <div>
        <div v-if="loading">
            <carregando :text="'Notas por usuário'"/>
        </div>
        <v-container v-else>
             <v-card>
                 <v-container fluid>
                      <v-layout
                              row
                              wrap>
                          <v-flex xs6>
                              <h2 class="mr-3 blue--text">Notas por usuário</h2>
                          </v-flex>
                          <v-flex
                                  xs5
                                  offset-xs1
                                  class=" text-xs-right">
                          </v-flex>
                      </v-layout>
                 </v-container>
             </v-card>
              <v-data-table
                  :headers="headers"
                  :items="notasGetter"
                  class="elevation-1"
                  :pagination.sync="pagination"
              >
                  <template v-slot:items="props">
                      <td class="">{{ props.item.chNFe }}</td>
                      <td class="">{{ props.item.data.NFe.infNFe.emit.CNPJ | cnpj }}</td>
                      <td class="">{{ props.item.data.NFe.infNFe.dest.CPF | cpf }}</td>
                      <td class="text-xs-center pl-5">
                          <v-tooltip bottom>
                              <v-btn
                                      :to="'/nfe/nota/' + props.item._id"
                                      slot="activator"
                                      flat
                                      icon
                              >
                                  <v-icon>visibility</v-icon>
                              </v-btn>
                              <span>Visualizar</span>
                          </v-tooltip>
                          <v-tooltip bottom>
                              <v-btn
                                      :href="'http://localhost:8081/nfe/download-local/' + props.item.chNFe"
                                      slot="activator"
                                      flat
                                      icon
                              >
                                  <v-icon>file_download</v-icon>
                              </v-btn>
                              <span>Baixar</span>
                          </v-tooltip>

                      </td>
                  </template>
              </v-data-table>
          </v-container>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import carregando from '@/components/carregando';

export default {
  components: {
    carregando,
  },
  data() {
    return {
      loading: true,
      pagination: { rowsPerPage: 10 },
      headers: [
        {
          text: 'Chave de Acesso',
          value: 'chNFe',
        },
        {
          text: 'Emitente',
          value: 'data',
        },
        {
          text: 'Destinatário',
          value: 'destinatario',
        },
        {
          text: 'Ações',
          align: 'center',
          value: '',
        },
      ],
      data: [],
    };
  },
  filters: {
    cpf(value) {
      return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    },
    cnpj(value) {
      return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    },
  },
  watch: {
    notasGetter() {
      this.loading = false;
    },
  },
  created() {
    this.syncNotasByUserAction(this.usuarioGetter.data.auth.usu_identificacao);
  },
  computed: {
    ...mapGetters({
      notasGetter: 'nota/notasGetter',
      usuarioGetter: 'usuario/usuarioGetter',
    }),
  },
  methods: {
    ...mapActions({
      notasAction: 'nota/notasAction',
      syncNotasByUserAction: 'nota/syncNotasByUserAction',
    }),
  },
};
</script>

<style>

</style>
