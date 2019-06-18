<template>
    <v-container grid-list-md text-xs-center>
        <nFolha :data="dataMod" />
        {{data}}
    </v-container>
</template>
<script>
import nFolha from '@/components/nFolha';

export default {
  name: 'Cobranca',
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
          title: 'Fatura',
          data: [
            { label: 'Número 045649', value: 0 },
            { label: 'Valor Original 208,32', value: 0 },
            { label: 'Valor do Desconto 19,71', value: 0 },
            { label: 'Valor Líquido 188,61', value: 0 },
            { label: 'Duplicatas Número', value: 0 },
            { label: 'Vencimento', value: 0 },
            { label: 'Valor 001 31/01/2019 188,61', value: 0 },
            { label: 'Formas de Pagamento Forma de Pagamento', value: 0 },
            { label: 'Valor do Pagamento', value: 0 },
            { label: 'Tipo de Integração Pagamento', value: 0 },
            { label: 'CNPJ da Credenciadora', value: 0 },
            { label: 'Bandeira da operadora', value: 0 },
            { label: 'Número de autorização 15 188,61', value: 0 },
            { label: 'Troco ', value: 0 },
          ],
        },
        {
          title: 'Duplicatas',
          data: [
            { label: 'Número', value: 0 },
            { label: 'Vencimento', value: 0 },
            { label: 'Valor', value: 0 },
          ],
        },
        {
          title: 'Formas de Pagamento',
          data: [
            { label: 'Formas de Pagamento', value: 0 },
            { label: 'Valor do Pagamento', value: 0 },
            { label: 'Tipo de Integração Pagamento', value: 0 },
            { label: 'CNPJ da Credenciadora', value: 0 },
            { label: 'Bandeira da operadora', value: 0 },
            { label: 'Número de autorização', value: 0 },
            { label: 'Troco ', value: 0 },
          ],
        },
      ];
    },
  },
};
</script>
