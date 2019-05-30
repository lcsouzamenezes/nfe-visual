<template>
  <v-container>
      <h2>Notas por usuário</h2>
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
              <td class="">
                  <v-btn :to="'/nfe/nota/' + props.item._id">Visualizar</v-btn>
                  <v-btn :href="'http://localhost:8081/download-local/' + props.item.chNFe">Baixar</v-btn>
              </td>
          </template>
      </v-data-table>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data(){
        return {
            pagination:{rowsPerPage: 10},
            headers: [
                {
                  text: 'Chave de Acesso',
                  value: 'id',
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
                  value: '',
                }
            ],
            data: [ ]
        }
    },
    filters: {
      cpf: function (value) {
          return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      },
      cnpj: function (value) {
          return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
      }
    },
    created(){
       this.syncNotasByUserAction(this.usuarioGetter.data.auth.usu_identificacao)
    },
    computed: {
      ...mapGetters({
          notasGetter: 'nota/notasGetter',
          usuarioGetter: 'usuario/usuarioGetter'
      })
    },
    methods: {
        ...mapActions({
            notasAction: 'nota/notasAction',
            syncNotasByUserAction : 'nota/syncNotasByUserAction'
        })
    }
}
</script>

<style>

</style>
