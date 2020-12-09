import Vue from 'vue'
import Vuex from 'vuex'
import my_viz from "@/my_viz"
import dateFormat from "dateformat";
import {
  sum
} from 'mathjs'

Vue.use(Vuex)

function create_object(df, col, res_df = [], country_list = [], date_list = []) {
  var key_cols = ["Country/Region", "Lat", "Long", "Province/State",
    "UID", "iso2", "iso3", "code3", "FIPS", "Admin2", "Province_State", "Country_Region",
    "Lat", "Long_", "Combined_Key", "Population"
  ]

  df.forEach(row => {
    var data = {}
    for (const [key, value] of Object.entries(row)) {
      if (!key_cols.includes(key)) {
        data[key] = Number(value)
        if (!date_list.includes(key)) date_list.push(key)
      }
    }
    if (!country_list.includes(row["Country/Region"])) {
      country_list.push(row["Country/Region"])
      let location = row["Province/State"] == "" ? "tot" : row["Province/State"]
      var temp = {
        country: row["Country/Region"],
        location: [{
          name: location,
          lat: row["Lat"],
          lon: row["Long"],
        }],
        data: {}
      }
      temp.data[location] = {}
      temp.data[location][col] = data
      res_df.push(temp)
    } else {
      var index = res_df.map(x => x.country).indexOf(row["Country/Region"])
      let location = row["Province/State"] == "" ? "tot" : row["Province/State"]
      // add new location if not existed
      var loc_index = res_df[index].location.map(x => x.name).indexOf(location)
      if (loc_index == -1) {
        res_df[index].location.push({
          name: location,
          lat: row["Lat"],
          lon: row["Long"],
        })
      }
      if (res_df[index].data[location] == undefined) res_df[index].data[location] = {}
      res_df[index].data[location][col] = data
    }
  })
  // add tot to these countries
  var key_country = [{
      country: "Australia",
      lat: -25.19128230324078,
      lon: 134.73664513062488
    },
    {
      country: "Canada",
      lat: 56.1304,
      lon: -106.3468
    },
    {
      country: "China",
      lat: 33.61781734587152,
      lon: 103.56916987244851
    },
  ]

  key_country.forEach(c => {
    let index = res_df.map(x => x.country).indexOf(c.country)
    let loc_index = res_df[index].location.map(x => x.name).indexOf("tot")
    if (loc_index == -1) {
      res_df[index].location.push({
        name: "tot",
        lat: c.lat,
        lon: c.lon,
      })
    }
    if (res_df[index].data["tot"] == undefined) res_df[index].data["tot"] = {}
    res_df[index].data["tot"][col] = {}
    date_list.forEach(d => {
      var sum_val = 0
      res_df[index].location.forEach(l => {
        if (col in res_df[index].data[l["name"]]) {
          let val = res_df[index].data[l["name"]][col][d]
          if (val != undefined) sum_val += val
        }
      })
      res_df[index].data["tot"][col][d] = sum_val
    })
  })
  return {
    res_df: res_df,
    date_list: date_list,
    country_list: country_list
  }
}

function cal_active(df, date_list) {
  df.forEach((row, index) => {
    for (const [key, value] of Object.entries(row.data)) {
      row.data[key]["active"] = {}
      // console.log(key, value)
      date_list.forEach(d => {
        if ("recover" in value) {
          row.data[key]["active"][d] = value["case"][d] - value["death"][d] - value["recover"][d]
        } else row.data[key]["active"][d] = null
      })
    }
    df[index] = row
  });
  return df
}

export default new Vuex.Store({
  state: {
    show_infor_dialog: {
      show: false
    },
    case_file: "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",
    death_file: "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv",
    recover_file: "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv",
    case_file_us: "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv",
    death_file_us: "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_US.csv",
    my_viz: new my_viz(),
    date: {
      date_range: [],
      curr_date: null,
      loaded: 0,
      curr_index: null
    },
    status: {
      total_case: null,
      total_death: null,
      total_activate: null,
      total_recover: null,
      increased_case: null,
      increased_death: null,
    },
    list_data: {
      type: "all",
      data: [],
      loaded: false
    },
  },

  mutations: {
    async LOAD_FILE(state, load_us = false) {
      // var t = new Date()
      // var key_cols = ["Country/Region", "Lat", "Long", "Province/State"]
      var case_df = await state.my_viz.fetch_csv(state.case_file, false)
      var res = create_object(case_df, "case")

      var death_df = await state.my_viz.fetch_csv(state.death_file, false)
      res = create_object(death_df, "death", res.res_df, res.country_list, res.date_list)

      var recover_df = await state.my_viz.fetch_csv(state.recover_file, false)
      res = create_object(recover_df, "recover", res.res_df, res.country_list, res.date_list)
      // console.log(res.res_df)
      if (load_us) {
        var us_case_df = await state.my_viz.fetch_csv(state.case_file_us, false)
        us_case_df = us_case_df.map(x => {
          x["Country/Region"] = x["Country_Region"]
          x["Province/State"] = x["Combined_Key"]
          x["Long"] = x["Long_"]
          return x
        })
        res = create_object(us_case_df, "case", res.res_df, res.country_list, res.date_list)

        var us_death_df = await state.my_viz.fetch_csv(state.death_file_us, false)
        us_death_df = us_death_df.map(x => {
          x["Country/Region"] = x["Country_Region"]
          x["Province/State"] = x["Combined_Key"]
          x["Long"] = x["Long_"]
          return x
        })
        res = create_object(us_death_df, "death", res.res_df, res.country_list, res.date_list)
      }

      var date_list = res.date_list
      var res_df = cal_active(res.res_df, date_list)
      console.log(res_df)
      // console.log(date_list)

      state.my_viz.df = res_df
      state.date.date_range = date_list
      // console.log(state.date.date_range)
      state.date.curr_index = state.date.date_range.length - 1
      var last_day = state.date.date_range[state.date.curr_index]
      state.date.curr_date = dateFormat(new Date(last_day), "yyyy-mm-dd")
      state.date.loaded+=1
      // console.log(new Date-t)
    },
    CHANGE_CURR_DATE(state, index) {
      state.date.curr_index = index
      state.date.curr_date = dateFormat(new Date(state.date.date_range[index]), "yyyy - mm - dd")
    },
    CAL_STATUS(state) {
      state.status.increased_case = 0
      state.status.increased_death = 0
      var temp
      temp = state.my_viz.df.map(x => x.data["tot"]["case"][state.date.date_range[state.date.curr_index]])
      state.status.total_case = sum(temp)

      temp = state.my_viz.df.map(x => x.data["tot"]["death"][state.date.date_range[state.date.curr_index]])
      state.status.total_death = sum(temp)

      temp = state.my_viz.df.map(x => x.data["tot"]["active"][state.date.date_range[state.date.curr_index]])
      state.status.total_activate = sum(temp)

      temp = state.my_viz.df.map(x => x.data["tot"]["recover"][state.date.date_range[state.date.curr_index]])
      state.status.total_recover = sum(temp)

      if (state.date.curr_index > 0) {
        temp = state.my_viz.df.map(x => x.data["tot"]["case"][state.date.date_range[state.date.curr_index - 1]])
        state.status.increased_case = state.status.total_case - sum(temp)

        temp = state.my_viz.df.map(x => x.data["tot"]["death"][state.date.date_range[state.date.curr_index - 1]])
        state.status.increased_death = state.status.total_death - sum(temp)

      }
    },
    async GENE_LIST(state) {
      // var t = new Date()
      // console.log(state.list_data.type)
      var list_type = state.list_data.type == "all" ? "case" : state.list_data.type
      state.list_data.data = []
      var date = state.date.date_range[state.date.curr_index]
      state.my_viz.df.forEach(row => {
        row.location.forEach(l => {
          var region
          if (row.country == "US") region = l.name == "tot" ? row.country : l.name
          else region = l.name == "tot" ? row.country : l.name + ', ' + row.country
          // some region have no recovery data, and therefore no active data
          if (list_type in row.data[l.name]) {
            var num = row.data[l.name][list_type][date]
            if (!isNaN(num) && num != null) {
              state.list_data.data.push({
                region: region,
                num: num
              })
            }
          }
        })
      })
      state.list_data.data = state.list_data.data.sort((a, b) => (a.num > b.num) ? -1 : 1)
      state.list_data.loaded = true
      // console.log(new Date() - t)
    }
  },
  actions: {},
  modules: {}
})