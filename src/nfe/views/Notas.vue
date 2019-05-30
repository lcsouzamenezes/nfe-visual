<template>
    <v-container>
        <v-btn to="/nfe/cadastrar">Cadastrar Nota</v-btn>
        <v-data-table
                :pagination.sync="pagination"
                :headers="headers"
                :items="notasGetter"
                class="elevation-1"
        >
            <template v-slot:items="props">
                <td class="">{{ props.item.chNFe}}</td>
                <td class="">{{ props.item.data.NFe.infNFe.ide.nNF }}</td>
                <td class="">{{ props.item.data.NFe.infNFe.dest.CPF }}</td>
                <td class="">{{ props.item.data.NFe.infNFe.dest.xNome }}</td>
                <td class="text-xs-center">
                    <v-tooltip bottom>
                        <v-btn
                            :to="'/nfe/nota/' + props.item._id"
                            slot="activator"
                            flat
                            icon
                        >
                            <v-icon>visibility</v-icon>
                        </v-btn>
                        <span>Visualizar</span>
                    </v-tooltip>
                </td>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        data(){
            return {
                pagination: {
                    rowsPerPage: 10
                },
                headers: [
                    {
                        text: 'Chave de Acesso',
                        value: 'chNFe',
                    },
                    {
                        text: 'Número',
                        value: 'data.NFe.infNFe.ide.nNF',
                    },
                    {
                        text: 'CPF/CNPJ',
                        value: 'data',
                    },
                    {
                        text: 'Destinatario',
                        value: 'destinatario',
                    },
                    {
                        text: 'Ações',
                        value: '',
                    }
                ],
                data: [

                ]
            }
        },
        created(){
            this.notasAction()
        },
        computed: {
            ...mapGetters({
                notasGetter: 'nota/notasGetter',
            })
        },
        methods: {
            ...mapActions({
                notasAction: 'nota/notasAction',
            })
        }
    }
</script>

<style>

</style>