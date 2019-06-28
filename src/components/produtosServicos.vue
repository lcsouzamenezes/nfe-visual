<template>
    <v-container grid-list-md text-xs-center>
        <nFolha :data="dataMod" />

        <v-subheader>Dados dos Produtos e Serviços</v-subheader>

        <v-expansion-panel>
            <v-expansion-panel-content
                v-for="(item,i) in 2"
                :key="i"
                >
                <template v-slot:header>
        Num.

        Descrição

        Qtd.

        Unidade Comercial

        Valor(R$)

        1   PASTA AMENDOIM INTEGRAL TORRADO GROWTH 1kg  1,0000  pc  17,00
                </template>
                <v-card>
                    <v-card-text>

                        <v-layout row wrap>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">Modelo:
                                        Código do Produto
                                        <strong>6818</strong>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">Modelo:
                                        Código NCM
                                        <strong>20081100</strong>
                                    </v-card-text>
                                </v-card>
                            </v-flex>

                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">Modelo:
                                        Código CEST
                                        <strong>N/D</strong>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">Modelo:
                                        Indicador de Escala Relevante
                                        <strong>N/D</strong>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">Modelo:
                                        CNPJ do Fabricante da Mercadoria
                                        <strong>N/D</strong>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">Modelo:
                                        Código de Benefício Fiscal na UF
                                        <strong>N/D</strong>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">Modelo:
                                        Código EX da TIPI
                                        <strong>N/D</strong>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">Modelo:
                                        CFOP
                                        <strong>
                                            6107
                                        </strong>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">Modelo:
                                        Outras Despesas Acessórias
                                        Valor do Desconto
                                        <strong>
                                            2,01
                                        </strong>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">Modelo:
                                        Valor Total do Frete
                                        <strong>
                                            4,21
                                        </strong>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Valor Total do Frete
                                        <strong>
                                            4,21
                                        </strong>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Valor do Seguro

                                        Indicador de Composição do Valor Total da NF-e
                                        1 - O valor do item (vProd) compõe o valor total da NF-e (vProd)
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Código EAN Comercial
                                        SEM GTIN
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Unidade Comercial
                                        pc
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Quantidade Comercial
                                        1,0000
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Código EAN Tributável
                                        SEM GTIN
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Unidade Tributável
                                        pc
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Quantidade Tributável
                                        1,0000
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Valor unitário de comercialização
                                        17,0000000000
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Valor unitário de tributação
                                        17,0000000000
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Número do pedido de compra
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Item do pedido de compra
                                        1
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Valor Aproximado dos Tributos
                                        5,85
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Número da FCI
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                        <v-subheader>
                            ICMS Normal e ST
                        </v-subheader>
                        <v-layout row wrap>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Origem da Mercadoria
                                        0 - Nacional
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Tributação do ICMS
                                        00 - Tributada integralmente
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Modalidade Definição da BC ICMS NORMAL
                                        3 - Valor da Operação
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Base de Cálculo do ICMS Normal
                                        19,20
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Alíquota do ICMS Normal
                                        7,0000
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Valor do ICMS Normal
                                        1,34
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Percentual do Fundo de Combate à Pobreza (FCP)
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Valor do Fundo de Combate à Pobreza (FCP)
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                        <v-subheader>
                            ICMS para a UF de destino
                        </v-subheader>
                        <v-layout row wrap>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        ICMS para a UF de destino
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Valor BC ICMS na UF Destino
                                        19,20
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Valor da BC FCP na UF de destino
                                        19,20
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Percentual ICMS FCP na UF Destino
                                        0,0000
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Alíquota Interna UF Destino
                                        18,0000
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Alíquota Interestadual das UFs
                                        7,0000
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Percentual Provisório de Partilha
                                        100,0000
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Valor do ICMS FCP
                                        0,00
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Valor ICMS Interestadual UF Destino
                                        2,11
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Valor ICMS Interestadual UF Remetente
                                        0,00
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                        <v-subheader>
                            Imposto Sobre Produtos Industrializados
                        </v-subheader>
                        <v-layout row wrap>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Classe de Enquadramento
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Código de Enquadramento
                                        999
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Código do Selo
                                        CNPJ do Produtor
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Qtd. Selo
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        CST
                                        53-Saída não-tributada
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Qtd Total Unidade Padrão
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Valor por Unidade
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Valor IPI
                                        Base de Cálculo
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        Alíquota
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                        <v-subheader>
                            PIS
                        </v-subheader>
                        <v-layout row wrap>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        CST
                                        07 - Operação Isenta da Contribuição
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                        <v-subheader>
                            COFINS
                        </v-subheader>
                        <v-layout row wrap>
                            <v-flex >
                                <v-card>
                                    <v-card-text class="px-0">
                                        CST
                                        07 - Operação Isenta da Contribuição
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
        </v-layout>
    </v-container>
</template>

<script>
import nFolha from '@/components/nFolha';

export default {
  name: 'destinatario',
  props: {
    data: Object,
  },
  components: {
    nFolha,
  },
  computed: {
    dataMod() {
      return [];
    },
  },
};
</script>
