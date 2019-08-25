<template>
  <div class="flex-grow-1 d-flex flex-column">
    <h2>wie realistisch darf es sein?</h2>

    <div class="images">
      <img src="../../assets/realism_wizard.png" v-bind:style="{ opacity: opacity1, height: size1 + 'px' }">
      <img src="../../assets/realism_boss.png" v-bind:style="{ opacity: opacity2, height: size2 + 'px' }">
    </div>

    <v-container>
      <v-row>
        <v-slider
          class="mt-12"
          min="0"
          max="100"
          v-model="realism"
          thumb-label
        >
<!--          <v-icon slot="prepend">mdi-auto-fix</v-icon>-->
<!--          <v-icon slot="append">mdi-account</v-icon>-->
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
  },
  computed: {
    opacity1 () {
      return (100 - this.realism) / 100
    },
    opacity2 () {
      return this.realism / 100
    },
    size1 () {
      return 150 - this.realism
    },
    size2 () {
      return 50 + this.realism
    }
  }
}
</script>

<style lang="scss">
  .images {
    margin-top: 50px;
    height: 150px;
  }
</style>
