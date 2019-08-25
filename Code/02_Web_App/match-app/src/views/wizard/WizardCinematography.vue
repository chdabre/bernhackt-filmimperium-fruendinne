<template>
  <div class="flex-grow-1 d-flex flex-column">
    <h2>wie wichtig ist dir gute cinematographie?</h2>

    <v-container>
      <v-row>
        <v-slider
          class="mt-12"
          min="0"
          max="100"
          v-model="cinematography"
          thumb-label
        >
          <v-icon slot="prepend">mdi-carrot</v-icon>
          <v-icon slot="append">mdi-camera</v-icon>
        </v-slider>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cinematography: 0
    }
  },
  watch: {
    cinematography () {
      this.$store.commit('setCinematography', this.cinematography)
    }
  }
}
</script>

<style lang="scss">
</style>
