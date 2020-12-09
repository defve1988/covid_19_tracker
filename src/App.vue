<template>
  <v-app>
    <v-app-bar dense dark>
      <v-icon> $covid_icon </v-icon>
      <v-toolbar-title class="mx-4 title font-weight-light"
        >COVID-19 Global Situation Tracker</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn
        icon
        color="error"
        class="mx-2"
        @click="show_infor_dialog.show = !show_infor_dialog.show"
      >
        <v-icon> mdi-information-outline </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="mt-0 pt-1 mb-0 pb-1 px-6" fluid>
        <v-row justify="center">
          <v-col cols="2" class="pa-0">
            <v-row>
              <v-col>
                <StatusCard :card_height="655" />
              </v-col>
            </v-row>

            <v-row>
              <v-col class="py-0">
                <DateSlider :card_height="150" />
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="6" class="pa-3">
            <MapCard :card_height="820" />
          </v-col>

          <v-col cols="4" class="pa-0">
            <v-row>
              <v-col>
                <BarRace :card_height="455" />
              </v-col>
            </v-row>
            <v-row>
              <v-col class="py-0">
                <Daily :card_height="355" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <Footer />
    <InforDialog />
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "App",

  components: {
    DateSlider: () => import("@/assets/date_slider"),
    StatusCard: () => import("@/assets/status_card"),
    MapCard: () => import("@/assets/map_card"),
    Daily: () => import("@/assets/daily_plot"),
    BarRace: () => import("@/assets/bar_race"),
    InforDialog: () => import("@/assets/infor_dialog"),
    Footer: () => import("@/assets/footer"),
  },
  computed: {
    ...mapState({
      show_infor_dialog: "show_infor_dialog",
    }),
  },
  data: () => ({
    picker: new Date().toISOString().substr(0, 10),
    //
  }),
  async mounted() {
    this.LOAD_FILE();
  },
  methods: {
    ...mapMutations(["LOAD_FILE"]),
  },
};
</script>
<style>
/* div {
  outline: 1px dashed red;
} */
</style>