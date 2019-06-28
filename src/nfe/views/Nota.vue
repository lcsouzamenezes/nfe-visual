<template>
    <div>
      <v-btn @click="$router.go(-1)">Voltar</v-btn>
        <v-container  grid-list-md text-xs-center>
            <v-subheader>
                Dados Gerais
            </v-subheader>
            <v-layout row wrap v-if="Object.keys(nota).length > 0 ">
                <v-flex >
                    <v-card
                        :hover="true"
                        color="amber lighten-4"
                        flat
                    >
                        <v-card-text class="px-0 py-0">
                            <h5>Chave de Acesso:</h5>
                            <strong>
                                {{this.nota.data.NFe.infNFe.attributes.Id}}
                            </strong>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex >
                    <v-card
                        flat
                    >
                        <v-card-text
                            class="px-0 py-0"
                        >
                            <h5>Número:</h5>
                            <strong>
                                {{this.nota.data.NFe.infNFe.ide.nNF}}
                            </strong>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex >
                    <v-card
                        flat
                    >
                        <v-card-text
                            class="px-0 py-0"
                        >
                            <h5>Versão XML</h5>
                            <strong>
                                {{this.nota.data.NFe.infNFe.attributes.versao}}
                            </strong>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <v-tabs
            v-model="model"
            fixed-tabs
            show-arrows
            color="blue"
            dark
        >
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab
                v-for="n in tabs"
                :key="n.id"
                :href="`#tab-${n.id}`"
            >
                {{ n.text }}
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="model">
            <v-tab-item
                v-for="t in tabs"
                :key="t.id"
                :value="`tab-${t.id}`"
            >
                 <v-card flat>
                    <component :is="t.component" :data="t.data" v-if="t.data"/>
                 </v-card>
            </v-tab-item>
        </v-tabs-items>
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
          id: 0, text: 'NFe', component: nfe, data: this.notaGetter,
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
      nota: {},
      emit: {},
    };
  },
  created() {
    this.syncNotaAction(this.$route.params.id);
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
      this.nota = v;
      this.tabs[1].data = v.infNFe.NFe.infNFe.emit;
      this.tabs[2].data = v.infNFe.NFe.infNFe.dest;
      this.tabs[4].data = v.infNFe.NFe.infNFe.total;
      // this.tabs[5].data = v.infNFe.NFe.infNFe.transp
      this.tabs[6].data = v.infNFe.NFe.infNFe.cobr;
      // console.log(v.infNFe.NFe.infNFe.emit)
    },
    $route(to, from) {
      if (
        typeof to.params.id !== 'undefined'
                && to.params.id !== from.params.id
      ) {
        this.syncNotaAction(this.$route.params.id);
      }
    },
  },
};
</script>
