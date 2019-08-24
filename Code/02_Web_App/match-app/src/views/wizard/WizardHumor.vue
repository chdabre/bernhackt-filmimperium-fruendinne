<template>
  <div class="flex-grow-1 d-flex flex-column">
    <h2>lachen, bis der bauch weh tut oder ernste miene?</h2>

    <v-container>
      <v-row>
        <v-slider
          min="0"
          max="100"
          v-model="humor"
          thumb-label
        ></v-slider>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      humor: 0
    }
  },
  watch: {
    wokeness () {
      this.$store.commit('setHumor', this.humor)
    }
  }
}
</script>

<style lang="scss">
</style>
