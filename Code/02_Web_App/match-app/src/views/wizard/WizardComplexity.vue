<template>
  <div class="flex-grow-1 d-flex flex-column">
    <h2>leichte kost oder lieber viel nachdenken?</h2>

    <v-container>
      <v-row class="mt-12 d-flex justify-center anim-container">
      <div class="images" >
        <img src="../../assets/complexity_3.png" v-if="complexity>=75">
        <img src="../../assets/complexity_2.png" v-if="complexity<75 && complexity >25">
        <img src="../../assets/complexity_1.png" v-if="complexity<=25">    
      </div>
      </v-row>
      
      <v-row>
          <v-slider
            class="mt-12"
            id="sliderComplexity"
            min="0"
            max="100"
            v-model="complexity"
            thumb-label
          >          
          </v-slider>
        </v-row>
      
    </v-container>
   
  </div>
</template>

<script>
export default {
  data () {
    return {
      complexity: 0
    }
  },
  watch: {
    complexity () {
      this.$store.commit('setComplexity', this.complexity)
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
    margin-top: 5px;
  }

  #sliderComplexity {
    margin-top: 10px;
  }

  .anim-container {
    height: 300px;
  }
 

</style>
