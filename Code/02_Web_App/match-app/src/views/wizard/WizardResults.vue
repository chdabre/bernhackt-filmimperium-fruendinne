<template>
  <div class="flex-grow-1 d-flex flex-column">
    <h2>drei vorschläge von denen wir glauben, dass sie zu deiner stimmung passen</h2>

    <v-container class="mt-12">
      <v-row>
        <v-col v-for="(result, index) in results" :key="index" cols="4">
          <v-card
            ripple
            :to="{ name: 'detail', params: { id: result.index}}"
          >
            <v-img
              :src="imgSource + result.movie.poster_path"
              :lazy-src='thumbSource + result.movie.poster_path'>
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
import distance from 'euclidean-distance'

const imgSource = 'https://image.tmdb.org/t/p/w500/'
const thumbSource = 'https://image.tmdb.org/t/p/w92/'

export default {
  data () {
    return {
      imgSource,
      thumbSource,
      results: []
    }
  },
  computed: {
    ...mapState(['queryForm', 'movieData'])
  },
  created () {
    this.results = getContextMatches(this.queryForm, this.movieData)
  }
}

function getContextMatches (chosenValues, data) {
  let distances = []

  data.forEach((e, index) => {
    let obj = {}
    obj['movie'] = e
    obj['index'] = index
    obj['distance'] = distance(Object.values(chosenValues), Object.values(e.characteristics))
    distances.push(obj)
  })

  let distancesSorted = distances.sort(function (a, b) {
    return a.distance - b.distance
  })

  return [distancesSorted[0], distancesSorted[1], distancesSorted[2]]
}
</script>
