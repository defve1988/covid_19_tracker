<template>
  <v-app>
    <v-file-input
      v-model="file"
      accept=".csv,.json"
      prepend-icon="mdi-paperclip"
    ></v-file-input>

    <v-btn @click="upload_data"> upload </v-btn>
    <v-main> </v-main>
  </v-app>
</template>

<script>
// import { mapState } from "vuex";
import my_df from "@/my_df";
export default {
  name: "App",

  components: {},
  computed: {
    // ...mapState(),
  },
  data: () => ({
    file: "",
    //
  }),
  async mounted() {
    this.df = new my_df();
    var file =
      "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv";
    file =
      "https://raw.githubusercontent.com/defve1988/glfmsp/master/src/assets/data.json";
    // x.df = await x.loader.fetch_csv(file)
    await this.df.fetch_json(file);
    console.log(this.df.df);
    
    this.df.filter_col("Year",["2004"])

    console.log(this.df.filter_col("Year",["2004"]));
  },
  methods: {
    async upload_data() {
      console.log(this.file)

      // this.df.df = await this.df.file_loader.load_csv(this.file);
      this.df.df = await this.df.loader.load_json(this.file);

      console.log(this.df.df[0]);
    },
  },
};
</script>
