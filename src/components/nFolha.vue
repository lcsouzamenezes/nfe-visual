<template>
        <v-sheet
            color="grey lighten-3"
        >
            <v-container grid-list-md text-xs-center>
                <template v-for="d in data">
                    <v-subheader v-if="d.title">{{d.title}}</v-subheader>
                    <v-layout  row wrap>
                        <v-flex v-bind="field.flex" v-for="field in d.data" >
                            <nCel :label="field.label" :value="field.value" ></nCel>
                        </v-flex>
                    </v-layout>
                </template >
            </v-container>
        </v-sheet>
</template>
<script>
import nCel from '@/components/nCel';

export default {
  name: 'nFolha',
  props: {
    data: Array,
  },
  components: {
    nCel,
  },
};
</script>
