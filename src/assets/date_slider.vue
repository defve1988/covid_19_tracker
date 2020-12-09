<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="ma-0 pa-0" :height="card_height" :elevation="hover ? 25 : 2">
      <v-system-bar tile class="py-1 px-2 grey darken-3">
        Date
        <v-spacer></v-spacer>
        <v-btn x-small icon @click="play">
          <v-icon small v-if="!isPlay" color="secondary">
            mdi-play-circle
          </v-icon>
          <v-icon small v-else color="secondary"> mdi-stop-circle </v-icon>
        </v-btn>
      </v-system-bar>
      <v-container>
        <v-row justify="center">
          <v-col
            cols="9"
            class="display-1 font-weight-light px-0 pl-4"
            align-self="center"
            align="center"
          >
            {{ date.curr_date }}
          </v-col>
          <v-col cols="3" align-self="center" align="right">
            <v-btn icon large @click="play">
              <v-icon v-if="!isPlay" color="secondary">
                mdi-play-circle
              </v-icon>
              <v-icon v-else color="secondary"> mdi-stop-circle </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="my-0 py-0" align-self="center">
            <v-slider
              color="error"
              :max="date.date_range.length - 1"
              min="0"
              v-model="slider"
              thumb-color="error"
              @change="change_values"
            >
              <template v-slot:prepend>
                <v-icon @click="slider_miuns"> mdi-minus </v-icon>
              </template>

              <template v-slot:append>
                <v-icon @click="slider_plus"> mdi-plus </v-icon>
              </template>
            </v-slider>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-hover>
</template>
    
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "date_slider",
  props: ["card_height"],
  mounted() {},
  data: () => ({
    slider: 0,
    isPlay: false,
    //
  }),
  computed: {
    ...mapState({
      date: "date",
      list_data: "list_data",
      my_viz: "my_viz",
    }),
    data_loaded() {
      return this.date.loaded;
    },
    curr_date() {
      return this.date.date_range[this.slider];
    },
  },
  watch: {
    curr_date() {
      this.CHANGE_CURR_DATE(this.slider);
      var date_index = this.date.date_range[this.date.curr_index];
      var type = this.list_data.type;
      this.my_viz.plot_map(date_index, type);
      //   console.log(1);
    },
    data_loaded() {
      this.slider = this.date.date_range.length - 1;
      this.change_values();
    },
  },
  methods: {
    ...mapMutations(["CHANGE_CURR_DATE", "CAL_STATUS", "GENE_LIST"]),
    play() {
      this.isPlay = !this.isPlay;
      if (this.isPlay) {
        var layout = {
          mapbox: {
            style: "dark",
            center: { lat: 30, lon: 100 },
            zoom: 2,
          },
        };
        this.my_viz.plots["g_map"].update_layout(layout);
        var TIME = 50;
        this.Timer = setInterval(this.slider_plus, TIME);
      } else {
        clearInterval(this.Timer);
      }
    },
    change_values() {
      this.CAL_STATUS();
      this.GENE_LIST();
    },
    slider_plus() {
      if (this.slider + 1 == this.date.date_range.length) this.slider = 0;
      else this.slider++;
      this.change_values();
    },
    slider_miuns() {
      if (this.slider == 0) this.slider = this.date.date_range.length - 1;
      else this.slider--;
      this.change_values();
    },
    // change_date() {
    //     console.log(this.slider)
    //   this.CHANGE_CURR_DATE(this.slider);
    // },
  },
};
</script>
    