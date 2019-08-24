<template>
  <div id="app">
    <h4>Page {{ page }}</h4>
    <div class="movie" v-if="ready">
      <img
        class="movie__poster"
        :src="'https://image.tmdb.org/t/p/w200/' + currentMovie.poster_path"
      />

      <div class="movie__details">
        <h2 class="movie__details--title">{{ currentMovie.title }}</h2>
        <p class="movie__details--overview">{{ currentMovie.overview }}</p>
      </div>
    </div>
    <div class="category-form">
      <div
        v-for="(key, index) in Object.keys(currentRating)"
        :key="index"
        class="category-form__field"
      >
        <div class="category-form__field--label">{{ key }}</div>
        <input
          class="category-form__field--input"
          type="range" min="0" max="100"
          v-model="currentRating[key]"
        >
        <div class="category-form__field--number">{{ currentRating[key] }}</div>
      </div>
    </div>
    <button @click="nextMovie(false)">Next</button>
    <button @click="nextMovie(true)">Skip</button>
    <br/><br/>
    <a :href="dataHref" download="data.json">download JSON</a>
  </div>
</template>

<script>
const apiKey = '4798eed7b83d0de78685239ce36d8689'

export default {
  name: 'app',
  data () {
    return {
      apiRoot: 'https://api.themoviedb.org/3',
      apiKey,
      ready: false,
      movies: [],
      page: 1,
      currentMovieIndex: 0,
      currentRating: {
        wokeness: 0,
        romanticness: 0,
        realism: 0,
        darkness: 0,
        complexity: 0,
        abstractness: 0,
        cinematography: 0,
        suspense: 0
      },
      rated: []
    }
  },
  computed: {
    currentMovie () {
      return this.movies[this.currentMovieIndex]
    },
    dataHref () {
      let data = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.rated))
      return 'data:' + data
    }
  },
  created () {
    this.loadMovies(this.page)
  },
  methods: {
    loadMovies (page) {
      this.$http.get(`${this.apiRoot}/discover/movie?sort_by=popularity.desc&page=${page}&api_key=${apiKey}`).then(response => {
        this.ready = true
        let data = response.body
        this.movies = data.results
      })
    },
    nextMovie (skip) {
      if (!skip) {
        // Parse string values for rating numbers
        Object.keys(this.currentRating).forEach((key, index) => {
          this.currentRating[key] = parseInt(this.currentRating[key])
        })

        // Add to rated list
        this.rated.push({
          ...this.currentMovie,
          characteristics: this.currentRating
        })
      }

      // reset form
      this.currentRating = {
        wokeness: 0,
        romanticness: 0,
        realism: 0,
        darkness: 0,
        complexity: 0,
        abstractness: 0,
        cinematography: 0,
        suspense: 0
      }

      if (this.currentMovieIndex < 19) {
        this.currentMovieIndex++
      } else {
        // Load next page
        this.ready = false
        this.page++
        this.loadMovies(this.page)
        this.currentMovieIndex = 0
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.movie {
  display: flex;

  &__poster {
    height: 250px;
  }

  &__details {
    margin-left: 1rem;
  }
}

.category-form {
  &__field {
    &--input {
      display: inline-block;
    }
    &--label {
      display: inline-block;
      min-width: 150px;
    }
    &--number {
      display: inline-block;
    }
  }
}
</style>
