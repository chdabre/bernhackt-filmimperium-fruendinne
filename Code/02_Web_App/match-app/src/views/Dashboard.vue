<template>
  <v-container>
    Dashboard
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
  },
  computed: {
    ...mapState(['userProfile'])
  },
  watch: {
    userProfile () {
      if (this.userProfile.onboarding) this.$router.push('/onboarding')
    }
  }
}
</script>
