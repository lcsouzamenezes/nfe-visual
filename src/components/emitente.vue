<template>
    <v-container>
        <nFolha 
            v-if=" data && typeof data !== 'undefined' && Object.keys(data).length > 0"
            :data="dataMod" 
        />
    </v-container>
</template>

<script>
  import nFolha from '@/components/nFolha'
  import { formatPTBR } from '../mixins/cnpj'

  export default {
    name: 'emitente',
      components:{
          nFolha: nFolha
      },
      mixins: [ formatPTBR ],
      props: {
          data: Object
      },
      computed:{
        dataMod(){
            console.log(this.data)
            return [
                {
                   title: 'Dados do Emitente',
                   data: [
                    {
                        flex:{ 'lg6': true},
                        label: 'Nome / Razão Social',
                        value: this.data.xNome
                    },
                    {
                        flex:{ 'lg6': true},
                        label: 'Nome Fantasia',
                        value: this.data.nomeFantasia ? this.data.nomeFantasia : 'N/D'
                    },
                   ]
                },
                {
                   data: [
                    {
                        flex:{ 'lg6': true},
                        label: 'CNPJ',
                        value: this.cnpj(this.data ? this.data.CNPJ : '1111111111111')
                    },
                    {
                        flex:{ 'lg6': true},
                        label: 'Endereço',
                        value: this.data.enderEmit ? this.data.enderEmit.xLgr : ''
                    },]
                },
                {
                   data: [
                    {
                        flex:{ 'lg6': true},
                        label: 'Bairro/Distrito',
                        value: this.data.enderEmit ? this.data.enderEmit.xBairro : ''
                    },
                    {
                        flex:{ 'lg6': true},
                        label: 'CEP',
                        value: this.cep(this.data.enderEmit ? this.data.enderEmit.CEP : '')
                    },
                   ]
                },
                {
                   data: [
                    {
                        flex:{ 'lg6': true},
                        label: 'Municípios',
                        value: this.data.enderEmit ? this.data.enderEmit.xMun : ''
                    },
                    {
                        flex:{ 'lg6': true},
                        label: 'Telefone',
                        value: this.data.telefone ? this.data.telefone : 'N/D'
                    }]
                },
                {
                   data: [
                    {
                        flex:{ 'lg6': true},
                        label: 'UF',
                        value: this.data.enderEmit ? this.data.enderEmit.UF : ''
                    },
                    {
                        flex:{ 'lg6': true},
                        label: 'País',
                        value: this.data.enderEmit ? this.data.enderEmit.xPais : ''
                    },]
                },
                {
                   data: [
                    {
                        flex:{ 'lg6': true},
                        label: 'Inscrição Estadual',
                        value: this.data.IE
                    },
                    {
                        flex:{ 'lg6': true},
                        label: 'Inscrição Estadual do Substituto Tributário',
                        value: 'N/D'
                    },
                   ]
                },
                {
                   data: [
                    {
                        flex:{ 'lg6': true},
                        label: 'Inscrição Municipal',
                        value: 'N/D'
                    },
                    {
                        flex:{ 'lg6': true},
                        label: 'Município da Ocorrência do Fato Gerador do ICMS',
                        value: this.data.enderEmit ? this.data.enderEmit.cMun : 'N/D'
                    },
                   ]
                },
                {
                   data: [
                    {
                        flex:{ 'lg6': true},
                        label: 'CNAE Fiscal ',
                        value: 'N/D'
                    },
                    {
                        flex:{ 'lg6': true},
                        label: 'Código de Regime Tributário',
                        value: 'N/D'
                    },
                   ]
                }
            ]
        }
      }
  }
</script>
