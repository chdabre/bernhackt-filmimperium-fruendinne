<template>
  <div class="flex-grow-1 d-flex flex-column">
    <h2>magst du es lieber hell oder dunkel?</h2>

    <v-container>
      <v-row>
        <v-slider
          min="0"
          max="100"
          v-model="darkness"
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
      darkness: 0
    }
  },
  watch: {
    wokeness () {
      this.$store.commit('setDarkness', this.darkness)
    }
  }
}
</script>

<style lang="scss">
</style>
