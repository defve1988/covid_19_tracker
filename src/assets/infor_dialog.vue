<template>
  <v-dialog width="400" v-model="show_infor_dialog.show">
    <v-card height="500">
      <v-system-bar class="my-1 subtitle-2 font-weight-light error darken-3">
        About COVID-19 Tracker
        <v-spacer></v-spacer>
        <v-btn
          class="px-0"
          icon
          @click="show_infor_dialog.show = !show_infor_dialog.show"
          small
        >
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </v-system-bar>
      <v-card-text class="py-5">
        <p>
          The aim of this project is to provide some insights of this pandemic
          through data visulizations. The data source is from
          <a
            style="color: grey"
            href="https://github.com/CSSEGISandData/COVID-19"
            target="_blank"
          >
            Johns Hopkins University Center for Systems Science and Engineering
            (JHU CSSE) </a
          >. The very first version were developed in early April, 2020 This
          project mainly use
          <a style="color: grey" href="https://d3js.org/" target="_blank">
            D3.js
          </a>
          and
          <a
            style="color: grey"
            href="https://plotly.com/javascript/"
            target="_blank"
          >
            Plotly.js
          </a>
          for visualizations. You can find GitHub repository for this project
          <a
            style="color: grey"
            href="https://github.com/defve1988/covid_19_tracker"
            target="_blank"
          >
            here</a
          >.
        </p>

        <p>
          I'm an environmental scientist who also enthuse in data science. If
          you have any questions or suggestions, please contact
          <a style="color: grey" href="mailto: zhouchuanlong1988@gmail.com"
            >Chuanlong Zhou</a
          >
          . More information about me, please check
          <a
            style="color: grey"
            href="https://defve1988.github.io/"
            target="_blank"
            >here</a
          >
          .
        </p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "infor",
  computed: {
    ...mapState({
      show_infor_dialog: "show_infor_dialog",
    }),
  },
};
</script>
