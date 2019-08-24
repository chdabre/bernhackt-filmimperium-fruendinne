<template>
  <v-container>
    <h2>filmdetail - {{ movie.original_title }}</h2>
    <p class="mt-2">
      {{ movie.overview }}
    </p>
    <v-row justify="center">
      <v-col cols="8">
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

const imgSource = 'https://image.tmdb.org/t/p/w500/'
const thumbSource = 'https://image.tmdb.org/t/p/w92/'

export default {
  props: ['id'],
  data () {
    return {
      imgSource,
      thumbSource
    }
  },
  methods: {
  },
  computed: {
    ...mapState(['movieData']),
    movie () {
      return this.movieData[this.id]
    }
  }
}
</script>
