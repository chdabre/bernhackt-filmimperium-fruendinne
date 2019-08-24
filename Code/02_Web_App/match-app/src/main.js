import Vue from 'vue'
import App from './App.vue'

import router from './plugins/router'
import store from './plugins/store'
import i18n from './plugins/i18n'
import vuetify from './plugins/vuetify'
import fb from './plugins/firebaseConfig'

Vue.config.productionTip = false

let app
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      i18n,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
