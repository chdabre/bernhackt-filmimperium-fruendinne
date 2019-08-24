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
        primary: '#F6AD00',
        secondary: '#61D9D3',
        accent: '#F56B4A',
        error: '#b0323f',
        info: '#606289',
        success: '#b853bf',
        warning: '#F0C248'
      }
    }
  }
})
