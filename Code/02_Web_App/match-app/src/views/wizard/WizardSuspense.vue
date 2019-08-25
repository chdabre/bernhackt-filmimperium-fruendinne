<template>
  <div class="flex-grow-1 d-flex flex-column">
    <h2>elektrisierende spannung oder eher haferbrei?</h2>

    <div class="flex-grow-1"></div>
    <v-sparkline
      :value="value"
      smooth
      fill
      :gradient="['#F6AD00']"
    ></v-sparkline>

    <v-container>
      <v-row>
        <v-slider
          class="mt-12"
          min="0"
          max="100"
          v-model="suspense"
          thumb-label
        >
        </v-slider>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const values = [0, 2, 5, 9, 5, 10, 3, 5, -4, -10, 1, 8, 2, 9, 0]
export default {
  data () {
    return {
      suspense: 0,
      value: values
    }
  },
  watch: {
    suspense () {
      this.value = []
      for (let i = 0; i < 1 + Math.round(this.suspense / (100 / (values.length - 1))); i++) {
        this.value.push(values[i])
      }

      this.$store.commit('setSuspense', this.suspense)
    }
  }
}
</script>

<style lang="scss">
</style>
