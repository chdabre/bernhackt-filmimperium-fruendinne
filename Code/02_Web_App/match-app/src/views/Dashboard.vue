<template>
  <div>
    <v-btn @click="generateUserRecommendations">Generate</v-btn>
  </div>
</template>

<script>
import fb from '../plugins/firebaseConfig'

export default {
  methods: {
    generateUserRecommendations () {
      const generateUserRecommendations = fb.functions.httpsCallable('generateUserRecommendations')
      generateUserRecommendations().then(result => {
        console.log(result)
      })
    }
  }
}
</script>
