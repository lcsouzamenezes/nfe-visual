<template>
    <v-container grid-list-md text-xs-center>
        <nFolha :data="dataMod" />
    </v-container>
</template>
<script>
import nFolha from '@/components/nFolha';

export default {
  name: 'informacoesAdicionais',
  props: {
    data: Object,
  },
  components: {
    nFolha,
  },
  computed: {
    dataMod() {
      return [
        {
          title: 'Dados Gerais',
          data: [
            { label: 'Formato de Impressão DANFE 1 - DANFE normal, retrato', value: 0 },
          ],
        },
        {
          title: 'Informações Complementares de Interesse do Contribuinte',
          data: [
            { label: 'Descrição Total aproximado de tributos: R$ 57,43 (30,45%) Federais R$ 25,36 (13,45%) Estaduais R$ 32,06 (17,00%) . Fonte IBPT.  Valor do ICMS DIFAL para UF de destino R$ 20,75', value: 0 },
          ],
        },
      ];
    },
  },
};
</script>
