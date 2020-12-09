<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="ma-0 pa-0" :height="card_height" :elevation="hover ? 25 : 2">
      <v-system-bar tile class="py-1 px-2 grey darken-3">
        Daily/Cumulative
        <v-spacer></v-spacer>

        <v-menu top offset-x left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn x-small icon class="mx-1" v-bind="attrs" v-on="on">
              <v-icon small> mdi-map </v-icon>
            </v-btn>
          </template>

          <v-list dense>
            <v-list-item-group v-model="loc_index">
              <v-list-item v-for="(item, index) in locations" :key="index">
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>

        <v-btn x-small @click="change_type" icon>
          <v-icon small v-if="!isDaily">
            mdi-chart-bell-curve-cumulative
          </v-icon>
          <v-icon small v-else> mdi-chart-bar </v-icon>
        </v-btn>
      </v-system-bar>

      <v-container class="pt-0">
        <v-row justify="center">
          <v-col class="mx-0 px-0 pt-0 mt-0">
            <div ref="daily_card" id="daily_div"></div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-hover>
</template>
    
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "daily",
  props: ["card_height"],
  components: {},
  mounted() {
    this.init_fig(this.type);
  },
  data: () => ({
    isDaily: true,
    loc_index: 0,
  }),
  computed: {
    ...mapState({
      list_data: "list_data",
      status: "status",
      my_viz: "my_viz",
      date: "date",
    }),
    locations() {
      var loc = this.my_viz.df.map((x) => x.country);
      return ["Worldwide"].concat(loc);
    },
    data_loaded() {
      return this.date.loaded;
    },
    list_data_type() {
      return this.list_data.type;
    },
  },
  watch: {
    data_loaded() {
      this.plot_fig();
    },
    loc_index() {
      this.plot_fig();
    },
    list_data_type() {
      this.plot_fig()
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
    plot_fig() {
      var trace = this.my_viz.gene_daily_data(
        this.locations[this.loc_index],
        this.isDaily,
        this.list_data.type
      );
      var layout = {
        title: this.isDaily
          ? this.locations[this.loc_index] + " - Daily"
          : this.locations[this.loc_index] + " - Cumulative",
      };
      // console.log(layout);
      this.my_viz.plots["daily"].update_layout(layout);
      this.my_viz.plots["daily"].plot_new(trace);
    },
    change_type() {
      this.isDaily = !this.isDaily;
      this.plot_fig();
    },
    resize_map() {
      console.log(this.$refs.daily_card.clientWidth);
      this.my_viz.plots["daily"].update_layout({
        width: this.$refs.daily_card.clientWidth,
      });
    },
    init_fig() {
      var plot = {
        div: "daily_div",
        id: "daily",
        title: this.isDaily
          ? this.locations[this.loc_index] + " - Daily"
          : this.locations[this.loc_index] + " - Cumulative",
        viz_type: "plotly",
        layout: {
          plot_bgcolor: "#212121",
          paper_bgcolor: "#212121",
          title: this.isDaily
            ? this.locations[this.loc_index] + " - Daily"
            : this.locations[this.loc_index] + " - Cumulative",
          showlegend: false,
          width: this.$refs.daily_card.clientWidth,
          height: this.card_height,
          autosize: true,
          margin: { r: 25, t: 50, b: 50, l: 50 },
          font: { color: "white" },
          xaxis: {
            autotick: true,
            type: "date",
          },
          barmode: "stack",
        },
        config: {
          displaylogo: false,
          responsive: true,
          displayModeBar: false,
        },
      };
      this.my_viz.init_plots([plot]);
      this.my_viz.plots["daily"].plot_new([]);
    },
  },
};
</script>
<style scoped>
.v-list {
  overflow-y: auto;
  overflow-x: auto;
  scrollbar-width: none;
  max-height: 500px;
}
.v-list::-webkit-scrollbar {
  display: none;
}
</style>