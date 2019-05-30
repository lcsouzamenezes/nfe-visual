export const formatPTBR = {
    methods: {
      cnpj (value) {
          return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
      },
      cep (value) {
          return value.replace(/^(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');
      }
    }
}


