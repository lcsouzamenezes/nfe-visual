<template>
    <v-container grid-list-md text-xs-center>
        <nFolha :data="dataMod" />
    </v-container>
</template>
<script>
import nFolha from '@/components/nFolha';

export default {
  name: 'Transporte',
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
          title: 'Dados do Transporte',
          data: [
            {
              label: 'Modalidade do Frete',
              value: this.data.modFrete,
            },
          ],
        },
        {
          title: 'Volumes',
          data: [
            {
              label: 'Quantidade',
              value: this.data.vol ? this.data.vol.qVol : '',
            },
            {
              label: 'Espécie',
              value: this.data.vol ? this.data.vol.qVol : '',
            },
            {
              label: 'Marca dos Volumes',
              value: this.data.vol ? this.data.vol.marca : '',
            },
          ],
        },
        {
          data: [
            {
              label: 'Numeração',
              value: this.data.vol ? this.data.vol.nVol : '',
            },
            {
              label: 'Peso Líquido',
              value: this.data.vol ? this.data.vol.pesoL : '',
            },
            {
              label: 'Peso Bruto',
              value: this.data.vol ? this.data.vol.pesoB : '',
            },
          ],
        },
      ];
    },
  },
};
</script>
