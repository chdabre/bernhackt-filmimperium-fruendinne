<template>
  <div class="flex-grow-1 d-flex flex-column">
    <h2>lachen, bis der bauch weh tut oder ernste miene?</h2>

    <div class="lineDiv">`
      <img src="../../assets/lineHappy.png" v-if="humor>=75">
      <img src="../../assets/lineIndifferent.png" v-if="humor<75 && humor >25">
      <img src="../../assets/lineSad.png" v-if="humor<=25">
    </div>

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
    humor () {
      this.$store.commit('setHumor', this.humor)
    }
  }
}
</script>

<style lang="scss">
  .lineDiv {
    height: 100px;
    margin-top: 50px;
  }
  
 
</style>
