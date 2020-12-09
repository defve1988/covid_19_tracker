<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="ma-0 pa-0" :height="card_height" :elevation="hover ? 25 : 2">
      <v-system-bar tile class="py-1 px-2 grey darken-3">
        Situation List
        <v-spacer></v-spacer>
        <v-btn x-small @click="goto_top" icon>
          <v-icon small> mdi-format-vertical-align-top </v-icon>
        </v-btn>
      </v-system-bar>

      <v-container>
        <v-row justify="center">
          <v-col class="py-0">
            <span class="title font-weight-light">Total Case: </span>
            <span
              class="title font-weight-bold pink--text text--darken-1 mx-3"
              style="float: right"
              >{{ numberWithCommas(status.total_case) }}
            </span>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col class="py-0">
            <span class="title font-weight-light">Total Recover: </span>
            <span
              class="title font-weight-bold green--text mx-3"
              style="float: right"
              >{{ numberWithCommas(status.total_recover) }}
            </span>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col class="py-0">
            <span class="title font-weight-light">Active Case: </span>
            <span
              class="title font-weight-bold amber--text text--darken-3 mx-3"
              style="float: right"
              >{{ numberWithCommas(status.total_activate) }}
            </span>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col class="py-0">
            <span class="title font-weight-light">Total Death: </span>
            <span
              class="title font-weight-bold error--text mx-3"
              style="float: right"
              >{{ numberWithCommas(status.total_death) }}
            </span>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col class="py-0">
            <span class="title font-weight-light">Increased Case: </span>
            <span
              class="title font-weight-bold amber--text text--darken-4 mx-3"
              style="float: right"
              >{{ numberWithCommas(status.increased_case) }}
            </span>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col class="py-0">
            <span class="title font-weight-light">Increased Death: </span>
            <span
              class="title font-weight-bold error--text text--darken-1 mx-3"
              style="float: right"
              >{{ numberWithCommas(status.increased_death) }}
            </span>
          </v-col>
        </v-row>

        <v-row class="mt-3">
          <AutoList :list_height="410" />
        </v-row>
      </v-container>
    </v-card>
  </v-hover>
</template>
    
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "status_card",
  props: ["card_height"],
  components: {
    AutoList: () => import("@/assets/auto_list"),
  },
  mounted() {},
  data: () => ({}),
  computed: {
    ...mapState({
      status: "status",
    }),
  },
  watch: {},
  methods: {
    ...mapMutations(["GENE_LIST"]),
    goto_top() {
      var scrollUpBox = document.getElementById("auto_list");
      scrollUpBox.scrollTop = 0;
    },
    numberWithCommas(x) {
      if (x == null) return "";
      else return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>
    