<template>
    <v-form
            enctype="multipart/form-data"
            ref="form"
            files="true"
            v-model="valid"
            lazy-validation
    >
        <v-container>
            <v-layout>
                <v-flex
                        xs12
                        md6
                >
                    <v-text-field
                            v-model="certificado1.razaosocial"
                            :rules="racaoRules"
                            :counter="50"
                            label="Razão Social"
                            required
                    ></v-text-field>
                </v-flex>

                <v-flex
                        xs12
                        md6
                >
                    <v-text-field
                            v-model="certificado1.cnpj"
                            :rules="cnpjRules"
                            :mask="maskCnpj"
                            :counter="14"
                            label="CNPJ"
                            required
                    ></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex
                        xs12
                        md6
                >
                    <v-select
                            v-model="certificado1.tpAmb"
                            :items="items"
                            label="Tipo de ambiente"
                            item-text="label"
                            item-value="id"
                            chips
                            deletable-chips
                            :rules="tipoRules"
                            required
                            clearable
                            clear-icon="clear"
                    >
                        <template
                                slot="selection"
                                slot-scope="data"
                        >
                            <v-chip
                                    :selected="data.selected"
                                    :disabled="data.disabled"
                                    :key="data.item.id"
                                    class="v-chip--select-multi"
                                    @input="data.parent.selectItem(data.item.id)"
                            >
                                <v-avatar
                                        class="primary white--text"
                                        v-text="data.item.label.slice(0, 2).toUpperCase()"
                                />
                                {{ data.item.label }}
                            </v-chip>
                        </template>
                    </v-select>
                </v-flex>
            </v-layout>

            <v-layout>
                <v-flex xs12 sm6>
                    <v-text-field
                            label="Selecione o Certificado"
                            @click='pickFile'
                            v-model='certificado1.file.name'
                            :rules="certificadoRules"
                            prepend-icon='attach_file'>
                    </v-text-field>
                    <input
                            type="file"
                            style="display: none"
                            ref="files"
                            id="files"
                            @change="onFilePicked"
                    >
                </v-flex>

                <v-snackbar
                        v-model="snackbar"
                        :multi-line="mode === 'multi-line'"
                        right
                        :timeout="timeout"
                        top
                        :color="statusSnackBar"
                        :vertical="mode === 'vertical'"
                >
                    {{ text }}
                    <v-btn
                            dark
                            flat
                            @click="snackbar = false"
                    >
                        <v-icon>clear</v-icon>
                    </v-btn>
                </v-snackbar>


                <v-flex xs12 sm6>
                    <v-text-field
                            v-model='certificado1.pass'
                            :append-icon="show3 ? 'visibility' : 'visibility_off'"
                            :rules="passwordRules"
                            :type="show3 ? 'text' : 'password'"
                            name="input-10-2"
                            label="Password Certificado"
                            class="input-group--focused"
                            @click:append="show3 = !show3"
                    ></v-text-field>
                </v-flex>
            </v-layout>
            <div class="text-xs-right">
                <v-btn
                    v-if="typeForm === 'create'"
                    @click="submitForm" :loading="loading"
                 >
                    Cadastrar
                </v-btn>
                <v-btn
                    v-else
                    @click="atualizarForm"
                    :loading="loading"
                >
                    Atualizar
                </v-btn>
                <v-btn @click="resetValidation"> Limpar </v-btn>
            </div>
        </v-container>
    </v-form>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'CertificadoForm',
        props: {
            typeForm: {
                default: 'create',
                type: String
            },
            item: {
                default: () => {},
                type: Object
            }
        },
        data(){
            return {
                loading: false,
                statusSnackBar: '',
                snackbar: false,
                y: 'top',
                x: null,
                mode: '',
                timeout: 1500,
                text: '',
                items: [
                    { id: '1', label: 'Produção 1' },
                    { id: '2', label: 'Homologação 2' },
                ],
                certificado1: {
                    razaosocial: '',
                    cnpj: '',
                    tpAmb: '',
                    pass: '',
                    path: '',
                    file: {}
                },
                maskCnpj: '##.###.###/####-##',
                valid: true,
                certificado: '',
                cnpj1: '',
                ambiente1: '',
                data : null,
                show3: false,
                password1: 'Password',
                racaoRules: [
                    v => !!v || 'Razão Social is required',
                    v => (v && v.length >= 5) || 'Name must be less than 5 characters'
                ],
                cnpjRules: [
                    v => !!v || 'Razão Social is required',
                    v => (v && v.length >= 14) || 'Name must be less than 14 characters'
                ],
                tipoRules: [
                    v => !!v || 'Tipo de ambiente is required',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                ],
                certificadoRules: [
                    v => !!v || 'Certificado is required',
                ],
            }
        },
        computed: {
            ...mapGetters({
                certificadoGetter: 'certificado/certificadoGetter',
            })
        },
        watch: {
            item(value){
                this.certificado1.razaosocial = value.razaosocial,
                this.certificado1.cnpj = value.cnpj,
                this.certificado1.tpAmb = value.tpAmb,
                this.certificado1.pass = value.pass,
                this.certificado1.file.name = value.path
            }
        },
        methods: {
            ...mapActions({
                certificadoAction: 'certificado/certificadoAction',
                editarCertificadoAction: 'certificado/editarCertificadoAction',
            }),
            submitForm () {
                if (this.$refs.form.validate()) {
                    this.loading = true;
                    this.certificadoAction(this.certificado1).then(() => {
                        this.loading = false;
                    });
                    this.menssageSuccess();
                    this.resetValidation();
                } else {
                    this.menssageError(
                        (this.typeForm === 'create' ? 'Erro ao cadastrar!' : 'Erro ao atualizar!')
                    );
                }

            },
            atualizarForm () {
                if (this.$refs.form.validate()) {
                    this.loading = true;
                    this.editarCertificadoAction(this.certificado1).then(() => {
                        this.loading = false;
                    });
                    this.menssageSuccess();
                    this.resetValidation();
                } else {
                    this.menssageError(
                        (this.typeForm === 'create' ? 'Erro ao cadastrar!' : 'Erro ao atualizar!')
                    );
                }

            },
            resetValidation () {
                this.$refs.form.reset()
            },
            pickFile () {
                this.$refs.files.click ()
            },
            onFilePicked (e) {
                const files = e.target.files;
                if(files[0] !== undefined) {
                    this.certificado1.file = files[0];
                    this.getFileMineType(files[0].type);
                    const fr = new FileReader ();
                    fr.readAsDataURL(files[0]);
                    fr.addEventListener('load', () => {
                        this.imageUrl = fr.result;
                        this.imageFile = files[0] // this is an image file that can be sent to server...
                    })
                } else {
                    this.certificado1.path = '';
                    this.imageFile = '';
                }
            },
            getFileMineType(files) {
                const mimeType = files;
                if (mimeType != 'application/x-pkcs12') {
                    this.menssageError('Aceito somente arquivo .pfx');
                    this.resetValidation();
                }
            },
            menssageSuccess(text = 'Cadastrado com sucesso!'){
                this.statusSnackBar = 'success';
                this.text = text;
                this.snackbar = true;
            },
            menssageError(text){
                this.statusSnackBar = 'error';
                this.text = text;
                this.snackbar = true;
            }
        }
    }
</script>
