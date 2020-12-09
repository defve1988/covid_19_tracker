<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="ma-0 pa-0" :height="card_height" :elevation="hover ? 25 : 2">
      <v-system-bar tile class="py-1 px-2 grey darken-3">
        Regional Situation ({{ list_data.type.toUpperCase() }})
        <v-spacer></v-spacer>
        <v-btn x-small icon @click="play" class="mx-1">
          <v-icon small v-if="!isPlay" color="secondary">
            mdi-play-circle
          </v-icon>
          <v-icon small v-else color="secondary"> mdi-stop-circle </v-icon>
        </v-btn>
        <v-btn x-small icon @click="run_bar_race">
          <v-icon small> mdi-restart </v-icon>
        </v-btn>
      </v-system-bar>

      <v-container class="pa-1">
        <v-row justify="center">
          <v-col class="mx-0 px-0 pa-0 mt-0">
            <div ref="bar_race" id="bar_race"></div>
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
    this.init_fig();
  },
  data: () => ({
    isPlay: true,
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
    list_data_type() {
      return this.list_data.type;
    },
  },
  watch: {
    data_loaded() {
      this.run_bar_race();
    },
    list_data_type() {
      this.run_bar_race();
    },
  },
  created() {
    window.addEventListener("resize", this.resize_fig);
  },
  destroyed() {
    window.removeEventListener("resize", this.resize_fig);
  },
  methods: {
    ...mapMutations(["GENE_LIST", "LOAD_FILE"]),
    play() {
      this.isPlay = !this.isPlay;
      //   console.log(this.isPlay);
      if (!this.isPlay) {
        this.my_viz.plots["bar_race"].plot_obj.stop_race();
      } else {
        this.my_viz.plots["bar_race"].plot_obj.restart_race();
      }
    },
    run_bar_race() {
      var col = this.list_data.type == "all" ? "case" : this.list_data.type;
      this.my_viz.plots["bar_race"].plot_obj.init_race(
        this.my_viz.df,
        this.date.date_range,
        col
      );
    },
    resize_fig() {
      console.log(this.$refs.bar_race.clientWidth);
      this.my_viz.plots["bar_race"].update_layout({
        width: this.$refs.bar_race.clientWidth,
      });
    },
    init_fig() {
      var plot = {
        div: "#bar_race",
        id: "bar_race",
        title: "Top 20 Region",
        viz_type: "bar_race",
        layout: {
          top_n: 20,
          height: 400,
          width: 650,
          tickDuration: 500,
          margin: {
            top: 35,
            right: 25,
            bottom: 0,
            left: 100,
          },
        },
      };
      this.my_viz.init_plots([plot]);
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