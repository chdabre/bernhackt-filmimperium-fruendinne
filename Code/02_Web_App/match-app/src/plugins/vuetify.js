import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      light: {
        primary: '#161E52',
        secondary: '#606289',
        accent: '#606289',
        error: '#D0021B',
        info: '#606289',
        success: '#4DBF44',
        warning: '#F0C248'
      }
    }
  }
})
