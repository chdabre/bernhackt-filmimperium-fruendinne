<template>
  <div class="flex-grow-1 d-flex flex-column">
    <h2>wie realistisch darf es sein?</h2>

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
      <v-row>
      </v-row>
    </v-container>
    <div class="images">
      <img src="../../assets/realism_wizard.png" v-bind:style="{ opacity: opacityWizard, height: sizeWizard + 'px' }">
      <img src="../../assets/realism_boss.png" v-bind:style="{ opacity: opacityBoss, height: sizeBoss + 'px' }">
    </div>
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
    opacityBoss () {
      return this.realism / 100
    },
    opacityWizard () {
      return (100 - this.realism) / 100
    },
    sizeBoss () {
      return 50 + this.realism
    },
    sizeWizard () {
      return 150 - this.realism
    }
  }
}
</script>

<style lang="scss">
  .images {
    margin-top: 50px;
  }
</style>
