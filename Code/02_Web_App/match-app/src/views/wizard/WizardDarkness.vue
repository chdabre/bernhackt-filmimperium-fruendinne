<template>
  <div class="flex-grow-1 d-flex flex-column">
    <h2 class="title-darkness" :class="{'white--text': 646 * darkness * .01 > 600}">lieber hell oder dunkel?</h2>

    <v-container>
      <v-row>
        <v-slider
          class="title-darkness mt-12"
          min="0"
          max="100"
          v-model="darkness"
          thumb-label
        >
        </v-slider>
      </v-row>
    </v-container>

    <div class="overlay" :style="`height: ${646 * darkness * .01}px;`"></div>
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
    darkness () {
      this.$store.commit('setDarkness', this.darkness)
    }
  }
}
</script>

<style lang="scss">
.title-darkness {
  z-index: 1;
}
.overlay {
  background-color: rgba(0,0,0,0.7);
  border-radius: 4px;
  position: fixed;
  bottom: 16px;
  left: 0;
  right: 0
}
</style>
