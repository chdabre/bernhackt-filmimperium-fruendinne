<template>
  <div class="flex-grow-1">
    <h2>welche farben treffen auf deine aktuelle stimmung zu?</h2>

    <v-row class="color-btns mt-12">
      <v-col
        cols="4"
        v-for="(key, index) in Object.keys(colors)"
        :key="index"
      >
        <v-btn
          fab
          large
          :class="[key, !colors[key] ? 'elevation-0':'']"
          @click="colors[key] = !colors[key]"
        >
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const colorScores = {
  yellow: 50,
  red: 100,
  turquoise: 60,
  green: 20,
  gray: 5,
  pink: 80,
  black: 0,
  orange: 80,
  purple: 90
}

export default {
  data () {
    return {
      colors: {
        yellow: false,
        red: false,
        turquoise: false,
        green: false,
        gray: false,
        pink: false,
        black: false,
        orange: false,
        purple: false
      }
    }
  },
  computed: {
    colorScore () {
      let colorScore = 0
      let colorCount = 0
      Object.keys(this.colors).forEach(key => {
        if (this.colors[key]) {
          colorScore += colorScores[key]
          colorCount++
        }
      })

      return colorScore / colorCount || 0
    }
  },
  watch: {
    colorScore () {
      this.$store.commit('setRomanticness', this.colorScore)
    }
  }
}
</script>

<style lang="scss">
.color-btns {
  .yellow {
    background-color: #F3D10A!important;
  }
  .red {
    background-color: #F34849!important;
  }
  .turquoise {
    background-color: #61D9D3!important;
  }
  .green {
    background-color: #6CD67D!important;
  }
  .gray {
    background-color: #C5C5C5!important;
  }
  .pink {
    background-color: #F35CB7!important;
  }
  .black {
    background-color: #000000!important;
  }
  .orange {
    background-color: #F6AD00!important;
  }
  .purple {
    background-color: #A461D9!important;
  }
  .active {
    opacity: .5;
  }
}
</style>
