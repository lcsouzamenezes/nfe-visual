<template>
    <div>
        auth
    </div>
</template>

<script>
import nfe from '@/components/nfe';
import emitente from '@/components/emitente';
import destinatario from '@/components/destinatario';
import cobranca from '@/components/cobranca';
import produtosServicos from '@/components/produtosServicos';
import totais from '@/components/totais';
import transporte from '@/components/transporte';
import informacoesAdicionais from '@/components/informacoesAdicionais';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'nota',
  components: { nfe },
  data() {
    return {
      model: 'tab-0',
      tabs: [
        {
          id: 0, text: 'NFe', component: nfe, data: {},
        },
        {
          id: 1, text: 'Emitente', component: emitente, data: {},
        },
        {
          id: 2, text: 'Destinatario', component: destinatario, data: {},
        },
        {
          id: 3, text: 'Produtos e Serviços', component: produtosServicos, data: {},
        },
        {
          id: 4, text: 'Totais ', component: totais, data: {},
        },
        {
          id: 5, text: 'Transportes', component: transporte, data: {},
        },
        {
          id: 6, text: 'Cobrança ', component: cobranca, data: {},
        },
        {
          id: 7, text: 'Informações Adicionais ', component: informacoesAdicionais, data: {},
        },
      ],
    };
  },
  created() {
    this.syncNotaAction();
  },
  computed: {
    ...mapGetters({
      notaGetter: 'nota/notaGetter',
    }),
  },
  methods: {
    ...mapActions({
      syncNotaAction: 'nota/syncNotaAction',
    }),
  },
  watch: {
    notaGetter(v) {
      const index = (this.tabs.findIndex(t => t.id == 0));
      this.tabs[index].data = v;
    },
  },
};
</script>
