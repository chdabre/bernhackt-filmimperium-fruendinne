<template>
  <div class="flex-grow-1 d-flex flex-column">
    <h2>wie abstrakt darf es sein?</h2>
    <div class="images">
      <img src="../../assets/banana.png" v-bind:style="{ opacity: opacityWizard, height: sizeWizard + 'px' }">
      <img src="../../assets/banana_abstract.png" v-bind:style="{ opacity: opacityBoss, height: sizeBoss + 'px' }">
    </div>
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
  },
  computed: {
    opacityBoss () {
      return this.abstractness / 100
    },
    opacityWizard () {
      return (100 - this.abstractness) / 100
    },
    sizeBoss () {
      return 50 + this.abstractness
    },
    sizeWizard () {
      return 150 - this.abstractness
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
