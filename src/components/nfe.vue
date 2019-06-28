<template>
    <v-container >
    <v-sheet
        v-if=" data && typeof data !== 'undefined' && Object.keys(data).length > 0"
        color="grey lighten-3"
    >
    <v-container grid-list-md text-xs-center>
        <template v-for="data in dataMod">
            <v-subheader>{{data.title}}</v-subheader>
            <v-layout  row wrap>
                <v-flex v-for="field in data.data" >
                    <nCel :label="field.label" :value="field.value" ></nCel>
                </v-flex>
            </v-layout>
        </template >
     </v-container >
        </v-sheet>
     </v-container >
</template>
<script>
import nCel from '@/components/nCel';
import moment from 'moment-timezone';

export default {
  name: 'NFe',
  components: {
    nCel,
    moment,
  },
  filters: {
    cpf(value) {
      return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    },
    cnpj(value) {
      return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3/$4-$5');
    },
  },
  props: {
    data: Object,
  },
  computed: {
    dataMod() {
      return [
        {
          title: 'Dados da NF-e',
          data: [
            {
              label: 'Modelo',
              value: this.data.data.NFe.infNFe.ide.mod,
            },
            {
              label: 'Série',
              value: this.data.data.NFe.infNFe.ide.serie,
            },
            {
              label: 'Número',
              value: this.data.data.NFe.infNFe.ide.nNF,
            },
            {
              label: 'Data de Emissão',
              value: moment(this.data.data.NFe.infNFe.ide.dhEmi).tz('UTC').format('DD/MM/YYYY HH:mm:ss'),
            },
            {
              label: 'Data Saída/Entrada',
              value: moment(this.data.data.NFe.infNFe.ide.dhSaiEnt).tz('UTC').format('DD/MM/YYYY HH:mm:ss'),
            },
            {
              label: 'Valor Total da Nota Fiscal',
              value: this.currency(this.data.data.NFe.infNFe.pag.detPag.vPag),
            },
          ],
        },
        {
          title: 'Emitente',
          data: [
            {
              label: 'CNPJ',
              value: this.cnpj(this.data.data.NFe.infNFe.emit.CNPJ),
            },
            {
              label: 'Nome / Razão Social',
              value: this.data.data.NFe.infNFe.emit.xNome,
            },
            {
              label: 'Inscrição Estadual',
              value: this.data.data.NFe.infNFe.emit.IE,
            },
            {
              label: 'UF',
              value: this.data.data.NFe.infNFe.emit.enderEmit.UF,
            },
          ],
        },
        {
          title: 'Destinatário',
          data: [
            {
              label: 'CPF',
              value: this.cpfCnpj(this.data.data.NFe.infNFe.dest.CPF),
            },
            {
              label: 'Nome / Razão Social',
              value: this.data.data.NFe.infNFe.dest.xNome,
            },
            {
              label: 'UF',
              value: this.data.data.NFe.infNFe.dest.enderDest.UF,
            },
            {
              label: 'Inscrição Estadual',
              value: this.data.inscricaoEstadualDestinatario ? this.data.inscricaoEstadualDestinatario : 'N/A',
            },
            {
              label: 'Destino da operação',
              value: this.destinoOperacao(this.data.data.NFe.infNFe.ide.idDest),
            },
            {
              label: 'Consumidor final',
              value: this.consumidorFinal(this.data.data.NFe.infNFe.ide.indFinal),
            },
            {
              label: 'Presença do Comprador',
              value: this.presencaConsumidor(this.data.data.NFe.infNFe.ide.indPres),
            },
          ],
        },
        {
          title: 'Emissão',
          data: [
            {
              label: 'Processo',
              value: this.processo(this.data.data.NFe.infNFe.ide.procEmi),
            },
            {
              label: 'Versão do Processo',
              value: this.data.data.NFe.infNFe.ide.verProc,
            },
            {
              label: 'Tipo de Emissão',
              value: this.tipoEmissao(this.data.data.NFe.infNFe.ide.tpEmis),
            },
            {
              label: 'Finalidade',
              value: this.finalidade(this.data.data.NFe.infNFe.ide.finNFe),
            },
            {
              label: 'Natureza da Operação',
              value: this.data.data.NFe.infNFe.ide.natOp,
            },
            {
              label: 'Tipo da Operação',
              value: this.tipoOperacao(this.data.data.NFe.infNFe.ide.tpNF),
            },
            {
              label: 'Forma de Pagamento',
              value: this.formaPagamento(this.data.data.NFe.infNFe.pag.detPag.indPag),
            },
            {
              label: 'Digest Value da NF-e',
              value: (this.data.data.NFe.Signature.SignedInfo.Reference.DigestValue),
            },
          ],
        },
        {
          title: 'Situação Atual',
          data: [
            {
              label: 'Eventos da NF-e',
              value: this.data.data.protNFe.infProt.xMotivo,
            },
            {
              label: 'Protocolo',
              value: this.data.data.protNFe.infProt.nProt,
            },
            {
              label: 'Data Autorização',
              value: this.data.data.protNFe.infProt.dhRecbto,
            },
            {
              label: 'Data Inclusão AN',
              value: this.data.CNPJ,
            },
          ],
        },
      ];
    },
  },
  methods: {
    currency(value) {
      //              if (typeof value !== "number") {
      //                 return value;
      //            }

      const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
      });

      return formatter.format(value);
    },
    cpfCnpj(value) {
      if (value.length == 11) {
        return this.cpf(value);
      }
      return this.cnpj(value);
    },
    cpf(value) {
      return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    },
    cnpj(value) {
      return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    },
    destinoOperacao(value) {
      let data = 'N/D';

      switch (value) {
        case '1':
          data = '1 - Operação interna';
          break;
        case '2':
          data = '2 - Operação interestadual';
          break;
        case '3':
          data = '3 - Operação com exterior.';
          break;
      }
      return data;
    },
    consumidorFinal(value) {
      let data = 'N/D';

      switch (value) {
        case '0':
          data = '0 - Normal';
          break;
        case '1':
          data = '1 - Consumidor final';
          break;
      }
      return data;
    },
    presencaConsumidor(value) {
      let data = 'N/D';

      switch (value) {
        case '0':
          data = '0 - Não se aplica';
          break;
        case '1':
          data = '1 - Operação presencial';
          break;
        case '2':
          data = '2 - Operação não presencial, pela Internet';
          break;
        case '3':
          data = '3 - Operação não presencial, Teleatendimento';
          break;
        case '4':
          data = '4 - NFC-e em operação com entrega em domicílio';
          break;
        case '9':
          data = '9 - peração não presencial';
          break;
      }

      return data;
    },
    processo(value) {
      let data = 'N/D';

      switch (value) {
        case '0':
          data = '0 - Emissão de NF-e com aplicativo do contribuinte.';
          break;
        case '1':
          data = '1 - Emissão de NF-e avulsa pelo Fisco.';
          break;
        case '2':
          data = '2 - Emissão de NF-e avulsa, pelo contribuinte com seu certificado digital, através do site do Fisco.';
          break;
        case '3':
          data = '3 - Emissão NF-e pelo contribuinte com aplicativo fornecido pelo Fisco.';
          break;
      }
      return data;
    },
    tipoEmissao(value) {
      let data = 'N/D';

      switch (value) {
        case '1':
          data = '1 - Emissão normal';
          break;
        case '2':
          data = '2 - Contingência FS-IA, com impressão do DANFE em formulário de segurança';
          break;
        case '3':
          data = '3 - Contingência SCAN (Sistema de Contingência do Ambiente Nacional)';
          break;
        case '4':
          data = '4 - Contingência DPEC (Declaração Prévia da Emissão em Contingência)';
          break;
        case '5':
          data = '5 - Contingência FS-DA, com impressão do DANFE em formulário de segurança';
          break;
        case '6':
          data = '6 - Contingência SVC-AN (SEFAZ Virtual de Contingência do AN)';
          break;
        case '7':
          data = '7 - Contingência SVC-RS (SEFAZ Virtual de Contingência do RS)';
          break;
      }

      return data;
    },
    finalidade(value) {
      let data = 'N/D';

      switch (value) {
        case '1':
          data = '1 - NF-e normal.';
          break;
        case '2':
          data = '2 - NF-e complementar.';
          break;
        case '3':
          data = '3 - NF-e de ajuste.';
          break;
        case '4':
          data = '4 = Devolução de mercadoria.';
          break;
      }

      return data;
    },
    tipoOperacao(value) {
      let data = 'N/D';

      switch (value) {
        case '0':
          data = '0 - Entrada.';
          break;
        case '1':
          data = '1 - Saída.';
          break;
      }

      return data;
    },
    formaPagamento(value) {
      let data = 'N/D';

      switch (value) {
        case '0':
          data = '0 - Pagamento à vista.';
          break;
        case '1':
          data = '1 - Pagamento a prazo.';
          break;
        case '2':
          data = '2 - Outros.';
          break;
      }

      return data;
    },
  },
};
</script>
