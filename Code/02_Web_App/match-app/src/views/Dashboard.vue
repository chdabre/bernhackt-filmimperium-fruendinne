<template>
  <v-container>
    <h2>wir glauben, dass dir diese filme gefallen könnten</h2>

    <v-bottom-sheet>
      <template v-slot:activator="{ on }">
        <v-btn
          fab fixed right bottom color="primary"
          v-on="on"
        >
          <v-icon>mdi-auto-fix</v-icon>
        </v-btn>
      </template>
      <v-sheet class="text-center" height="90vh">
        <ContextWizard />
      </v-sheet>
    </v-bottom-sheet>

    <v-row>
      <v-col
        cols="4"
        v-for="(movie, index) in movieData"
        :key="index"
      >
        <v-card
          ripple
          :to="{ name: 'detail', params: { id: index}}"
        >
          <v-img
            :src="imgSource + movie.poster_path"
            :lazy-src='thumbSource + movie.poster_path'>
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import ContextWizard from './ContextWizard'

const imgSource = 'https://image.tmdb.org/t/p/w500/'
const thumbSource = 'https://image.tmdb.org/t/p/w92/'

export default {
  components: {
    ContextWizard
  },
  data () {
    return {
      imgSource,
      thumbSource
    }
  },
  methods: {
  },
  computed: {
    ...mapState(['movieData'])
  }
}
</script>
