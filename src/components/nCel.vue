<template>
    <v-card
        flat
    >
        <v-card-text  class="px-0 py-0">
            <h5>{{label}}</h5>
            {{value}}
        </v-card-text>
    </v-card>
</template>
<script>
export default {
  name: 'nCel',
  props: {
    label: String,
    value: [String, Number],
  },
};
</script>
