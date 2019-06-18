<template>
  <v-container>
  <v-data-table
      :headers="headers"
      :items="notasGetter"
      class="elevation-1"
  >
      <template v-slot:items="props">
          <td class="">{{ props.item.id }}</td>
          <td class="">{{ props.item.data }}</td>
          <td class="">{{ props.item.destinatario }}</td>
      </template>
  </v-data-table>
  </v-container>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      headers: [
        {
          text: 'ID',
          value: 'id',
        },
        {
          text: 'Data',
          value: 'data',
        },
        {
          text: 'Destinatario',
          value: 'destinatario',
        },
      ],
      data: [

      ],
    };
  },
  created() {
    this.notasAction();
  },
  computed: {
    ...mapGetters({
      notasGetter: 'nota/notasGetter',
    }),
  },
  methods: {
    ...mapActions({
      notasAction: 'nota/notasAction',
    }),
  },
};
</script>

<style>

</style>
