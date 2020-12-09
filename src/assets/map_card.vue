<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="ma-0 pa-0" :height="card_height" :elevation="hover ? 25 : 2">
      <v-system-bar tile class="py-1 px-2 grey darken-3">
        Global Situation Map
        <v-spacer></v-spacer>
        <v-btn x-small @click="change_theme" icon>
          <v-icon small> mdi-invert-colors </v-icon>
        </v-btn>
      </v-system-bar>

      <v-container class="pt-0">
        <v-row justify="center">
          <v-col class="mx-0 px-0 pt-0 mt-0">
            <div ref="map_card" id="map_div"></div>
          </v-col>
        </v-row>
        <v-row justify="center" class="py-0 my-0">
          <v-col cols="8" class="mx-3 px-0 py-0 my-0">
            <v-tabs
              v-model="tab_index"
              background-color="grey darken-3"
              color="error darken-1"
              class="mx-0 px-0 mt-0"
              dark
              dense
              fixed-tabs
              height="24"
              center-active
              @change="change_values"
            >
              <v-tab class="caption">All</v-tab>
              <v-tab class="caption">Total</v-tab>
              <v-tab class="caption">Active</v-tab>
              <v-tab class="caption">Recover</v-tab>
              <v-tab class="caption">Death</v-tab>
            </v-tabs>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="mx-3 px-0 py-0 my-0">
            <v-btn small class="mx-0 mt-0" @click="load_US" color="grey darken-3">
              <span v-if="!withUS"> Show US Detail </span>
              <span v-else> Hide US Detail </span>
            </v-btn>
          </v-col>
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
  components: {},
  mounted() {
    this.init_map();
  },
  data: () => ({
    tab_index: 0,
    tab_type: ["all", "case", "active", "recover", "death"],
    map_height: 750,
    withUS: false,
    isDark: true,
  }),
  computed: {
    ...mapState({
      list_data: "list_data",
      status: "status",
      my_viz: "my_viz",
      date: "date",
    }),
    data_loaded() {
      return this.date.loaded;
    },
  },
  watch: {
    data_loaded() {
      var date_index = this.date.date_range[this.date.curr_index];
      var type = this.list_data.type;
      this.my_viz.plot_map(date_index, type);
    },
  },
  created() {
    window.addEventListener("resize", this.resize_map);
  },
  destroyed() {
    window.removeEventListener("resize", this.resize_map);
  },
  methods: {
    ...mapMutations(["GENE_LIST", "LOAD_FILE"]),
    change_theme() {
      this.isDark = !this.isDark;
      var layout = {
        mapbox: {
          style: "dark",
        },
      };
      if (!this.isDark) {
        layout.mapbox.style = "light";
      }
      this.my_viz.plots["g_map"].update_layout(layout);
    },
    async load_US() {
      this.withUS = !this.withUS;
      this.LOAD_FILE(this.withUS);
    },
    change_values() {
      this.list_data.type = this.tab_type[this.tab_index];
      this.GENE_LIST();
      var date_index = this.date.date_range[this.date.curr_index];
      var type = this.list_data.type;
      this.my_viz.plot_map(date_index, type);
      //   this.plot_map();
    },
    resize_map() {
      //   console.log(this.$refs.map_card.clientWidth);
      this.my_viz.plots["g_map"].update_layout({
        width: this.$refs.map_card.clientWidth,
      });
    },
    init_map() {
      var plot = {
        div: "map_div",
        id: "g_map",
        title: "global map",
        viz_type: "plotly",
        layout: {
          mapbox: {
            style: "dark",
            center: { lat: 25, lon: -90 },
            zoom: 2,
          },
          dragmode: "zoom",
          showlegend: false,
          width: this.$refs.map_card.clientWidth,
          height: this.map_height,
          autosize: true,
          margin: { r: 0, t: 0, b: 0, l: 0 },
        },
        config: {
          mapboxAccessToken:
            "pk.eyJ1IjoiZGVmdmUxOTg4IiwiYSI6ImNrNzNzZmN3dzBmMnMzZ3FvMzJ0MDRpa2QifQ.xLG4lim5AonGbkDtgP9-5A",
          displaylogo: false,
          responsive: true,
          displayModeBar: false,
        },
      };
      this.my_viz.init_plots([plot]);
      this.my_viz.plots["g_map"].plot_new([{ type: "scattermapbox" }]);
    },
  },
};
</script>
    