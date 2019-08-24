<template>
  <div class="flex-grow-1 d-flex flex-column">
    <h2>möchtest du deinen horizont erweitern?</h2>

    <div class="flex-grow-1"></div>

    <v-row class="mt-12 d-flex justify-center anim-container">`
      <v-icon class="cloud1" :style="`transform: translate(${-110 + wokeness}vw);`">mdi-cloud-outline</v-icon>
      <div class="sun" :style="`transform:scale(${1.5 - wokeness * 0.01}); bottom:${90 - wokeness * 0.6}px;`"></div>
      <div class="sea" :style="`height:${100 - (wokeness *.2)}px;`"></div>
    </v-row>

    <v-container>
      <v-row>
        <v-slider
          min="0"
          max="100"
          v-model="wokeness"
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
      wokeness: 0
    }
  },
  watch: {
    wokeness () {
      this.$store.commit('setWokeness', this.wokeness)
    }
  }
}
</script>

<style lang="scss">
.anim-container {
  position: relative;

  .sea {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: #39A0FF;
  }

  .sun {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #FFCE20;
    z-index: 1;
    opacity: .9;
  }

  .cloud1 {
    position: absolute;
    bottom: 150px;
    font-size: 4rem;
  }
}
</style>
