import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            // change the dark theme to monokai color
            dark: {
                primary: '#161B1E',
                secondary: '#1D2528',
                success: '#A3E77C',
                error: '#E06470',
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
});
