import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#f83e70',
        success: '#3cd1c2',
        info: '#ffc0cb',
        error: '#dc3545'
      }
    }
  }
});
