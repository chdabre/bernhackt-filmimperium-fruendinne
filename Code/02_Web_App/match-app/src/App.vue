<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      elevate-on-scroll

      v-if="currentUser != null"
    >
      <v-btn icon v-if="$route.name !== 'dashboard'" @click="$router.push('/dashboard')">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn icon @click="logout">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import fb from './plugins/firebaseConfig'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'currentUser',
      'userProfile'
    ])
  },
  methods: {
    logout () {
      fb.auth.signOut()
      this.$router.go('/login')
    }
  }
}
</script>

<style lang="scss">
@import "./style/app";
.v-application {
  background-color: white !important;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
}
</style>
