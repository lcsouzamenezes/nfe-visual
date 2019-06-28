<template>
    <v-container grid-list-md text-xs-center>
        <nFolha :data="dataMod" />
    </v-container>
</template>

<script>
import nFolha from '@/components/nFolha';

export default {
  name: 'Destinatario',
  components: {
    nFolha,
  },
  props: {
    data: Object,
  },
  computed: {
    dataMod() {
      return [
        {
          title: 'Dados do Emitente',
          data: [
            {
              label: 'Nome / Razão Social',
              value: this.data.xNome,
            },
            {
              label: 'Nome Fantasia',
              value: this.data.nomeFantasia,
            },
            {
              label: 'CNPJ',
              value: this.data.CPF,
            },
            {
              label: 'Endereço',
              value: this.data.enderDest ? this.data.enderDest.xLgr : '',
            },
            {
              label: 'Bairro/Distrito',
              value: this.data.enderDest ? this.data.enderDest.xBairro : '',
            },
            {
              label: 'CEP',
              value: this.data.enderDest ? this.data.enderDest.CEP : '',
            },
            {
              label: 'Municípios',
              value: this.data.enderDest ? this.data.enderDest.xMun : '',
            },
            {
              label: 'Telefone',
              value: this.data.telefone,
            },
            {
              label: 'UF',
              value: this.data.UF,
            },
            {
              label: 'País',
              value: this.data.pais,
            },
            {
              label: 'Inscrição Estadual',
              value: this.data.pais,
            },
            {
              label: 'Inscrição Estadual do Substituto Tributário',
              value: this.data.pais,
            },
            {
              label: 'Inscrição Municipal',
              value: this.data.pais,
            },
            {
              label: 'Município da Ocorrência do Fato Gerador do ICMS',
              value: this.data.pais,
            },
            {
              label: 'CNAE Fiscal ',
              value: this.data.pais,
            },
            {
              label: 'Código de Regime Tributário',
              value: this.data.pais,
            },
          ],
        },
      ];
    },
  },
};
</script>
