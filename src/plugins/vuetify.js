import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import covid_icon from "@/assets/covid_icon";


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            // change the dark theme to monokai color
            dark: {
                primary: '#161B1E',
                secondary: '#EBEEF1',
                success: '#A3E77C',
                error: '#EF5350',
                info: '#045D56',
                warning: '#FFB16C',
                accent: '#B15DFF',
                background: '#273136',
            },
            light: {
                primary: '#005EFF',
                secondary: '#EBEEF1',
                success: '#009688',
                error: '#FF0F50',
                info: '#37C948',
                warning: '#FF5722',
                accent: '#1BCFF3',
                background: '#F5F5F5',
            },
        },
    },
    icons: {
        values: {
            covid_icon: { // name of our custom icon
            component: covid_icon, // our custom component
          },
        },
      },
});
