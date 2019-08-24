<template>
  <div class="flex-grow-1 d-flex flex-column">
    <h2 class="title-darkness">wie realistisch darfs sein?</h2>

    <v-container>
      <v-row>
        <v-slider
          class="mt-12"
          min="0"
          max="100"
          v-model="realism"
          thumb-label
        >
          <v-icon slot="prepend">mdi-auto-fix</v-icon>
          <v-icon slot="append">mdi-account</v-icon>
        </v-slider>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      realism: 0
    }
  },
  watch: {
    darkness () {
      this.$store.commit('setRealism', this.realism)
    }
  }
}
</script>

<style lang="scss">
</style>
