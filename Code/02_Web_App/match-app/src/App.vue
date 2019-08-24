<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark

      v-if="currentUser"
    >
      <v-toolbar-title class="">
      </v-toolbar-title>

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
      'currentUser'
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
</style>
