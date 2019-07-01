<template>
    <v-container>
        <v-card>
            <v-card>
                <v-container fluid>
                    <v-layout
                            row
                            wrap>
                        <v-flex xs6>
                            <h2 class="mr-3 blue--text">Cadastrar Certificado</h2>
                        </v-flex>
                        <v-flex
                                xs5
                                offset-xs1
                                class=" text-xs-right">
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
            <v-container
                    fluid
            >
                <certificado-form></certificado-form>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
    import CertificadoForm from '@/certificado/components/CertificadoForm';

    export default {
        name: 'Certificado',
        components: {
            CertificadoForm,
        },
        data(){
            return {}
        },
    }
</script>
