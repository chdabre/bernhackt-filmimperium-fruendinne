<template>
  <div class="flex-grow-1 d-flex flex-column">
    <h2>wie abstrakt darf es sein?</h2>

    <v-container>
      <v-row>
        <v-slider
          class="mt-12"
          min="0"
          max="100"
          v-model="abstractness"
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
      abstractness: 0
    }
  },
  watch: {
    abstractness () {
      this.$store.commit('setAbstractness', this.abstractness)
    }
  }
}
</script>

<style lang="scss">
</style>
