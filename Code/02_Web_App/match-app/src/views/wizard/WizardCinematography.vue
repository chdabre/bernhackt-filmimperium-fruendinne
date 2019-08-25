<template>
  <div class="flex-grow-1 d-flex flex-column">
    <h2>wie wichtig ist dir gute cinematographie?</h2>

    <div class="images">
      <img src="../../assets/cinematograhpy_potato.png" v-bind:style="{ opacity: opacity1, height: size1 + 'px' }">
      <img src="../../assets/cinematograhpy_fried_potatoes.png" v-bind:style="{ opacity: opacity2, height: size2 + 'px' }">
      <img src="../../assets/cinematograhpy_photo_camera.png" v-bind:style="{ opacity: opacity3, height: size3 + 'px' }">
    </div>

    <v-container>
      <v-row>
        <v-slider
          class="mt-12"
          min="0"
          max="100"
          v-model="cinematography"
          thumb-label
        >
<!--          <v-icon slot="prepend">mdi-carrot</v-icon>-->
<!--          <v-icon slot="append">mdi-camera</v-icon>-->
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
  },
  computed: {
    opacity1 () {
      let opa1 = 33 - this.cinematography
      if (opa1 > 0) {
        return opa1 / 33
      } else {
        return 0
      }
    },
    opacity2 () {
      if (this.cinematography > 33 && this.cinematography < 66) {
        return 33 - (this.cinematography * 2)
      } else {
        return 0
      }
    },
    opacity3 () {
      return this.cinematography / 100
    },
    size1 () {
      return 150 - this.cinematography
    },
    size2 () {
      return 50 + this.cinematography
    },
    size3 () {
      return 50 + this.cinematography
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
