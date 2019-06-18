<template>
    <div>
        <div v-if="loading">
            <carregando :text="'Lista de certificados'"/>
        </div>
        <v-container v-else>
            <v-card>
                <v-container fluid>
                    <v-layout
                            row
                            wrap>
                        <v-flex xs6>
                            <h2 class="mr-3 blue--text">Lista de Certificados</h2>
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
                    :items="listarCertificadoGetter"
                    class="elevation-1"
                    :pagination.sync="pagination"
            >
                <template v-slot:items="props">
                    <td class="text-xs-left">{{ props.item.razaosocial }}</td>
                    <td class="text-xs-left">{{ props.item.cnpj | cnpj }}</td>
                    <td class="text-xs-center">{{ props.item.tpAmb }}</td>
                    <td class="text-xs-left">{{ props.item.path }}</td>
                </template>
            </v-data-table>
        </v-container>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import carregando from '@/components/carregando';

export default {
  name: 'ListarCertificados',
  components: {
    carregando,
  },
  data() {
    return {
      loading: true,
      pagination: { rowsPerPage: 10 },
      headers: [
        {
          text: 'Razão Social',
          align: 'left',
          value: 'razaosocial',
        },
        {
          text: 'CNPJ',
          align: 'left',
          value: 'cnpj',
        },
        {
          text: 'Ambiente',
          align: 'center',
          value: 'tpAmb',
        },
        {
          text: 'Certificado',
          align: 'left',
          value: 'path',
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
    listarCertificadoGetter() {
      this.loading = false;
    },
  },
  created() {
    this.listarCertificadoAction();
  },
  computed: {
    ...mapGetters({
      listarCertificadoGetter: 'certificado/listarCertificadoGetter',
    }),
  },
  methods: {
    ...mapActions({
      listarCertificadoAction: 'certificado/listarCertificadoAction',
    }),
  },
};
</script>
