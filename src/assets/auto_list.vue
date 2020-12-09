<template>
  <v-list :height="list_height" id="auto_list">
    <v-row
      v-for="(item, index) of list_data.data"
      :key="index"
      :id="'row_' + index"
    >
      <v-col class="px-5 my-0 py-0">
        <span :class="text_class()">
          {{ numberWithCommas(item.num) }}
        </span>
        | <span class="font-weight-light"> {{ item.region }} </span>
      </v-col>
    </v-row>
  </v-list>
</template>
    
<script>
import { mapState } from "vuex";
export default {
  name: "auto_list",
  props: ["list_height"],
  mounted() {},
  data: () => ({}),
  computed: {
    ...mapState({
      list_data: "list_data",
    }),
    data_loaded() {
      return this.list_data.loaded;
    },
  },
  watch: {
    data_loaded() {
      this.auto_scroll();
    },
  },
  methods: {
    text_class() {
      switch (this.list_data.type) {
        case "all":
          return "font-weight-bold pink--text text--darken-1";
        case "case":
          return "font-weight-bold pink--text text--darken-1";
        case "active":
          return "font-weight-bold amber--text text--darken-3";
        case "recover":
          return "font-weight-bold green--text";
        case "death":
          return "font-weight-bold error--text";
      }
    },
    numberWithCommas(x) {
      if (x == null) return "";
      else return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    auto_scroll() {
      var scrollUpBox = document.getElementById("auto_list");
      var prev_top;
      function scrollUp() {
        scrollUpBox.scrollTop++;
        if (prev_top == scrollUpBox.scrollTop) scrollUpBox.scrollTop = 0;
        else prev_top = scrollUpBox.scrollTop;
      }
      var TIME = 50;
      var timer = setInterval(scrollUp, TIME);
      scrollUpBox.onmouseover = function () {
        clearInterval(timer);
      };
      scrollUpBox.onmouseout = function () {
        timer = setInterval(scrollUp, TIME);
      };
    },
  },
};
</script>

<style>
/* div {
  outline: 1px dashed red;
} */
#auto_list {
  overflow-y: auto;
  overflow-x: auto;
  scrollbar-width: none;
}
#auto_list::-webkit-scrollbar {
  display: none;
}
</style>