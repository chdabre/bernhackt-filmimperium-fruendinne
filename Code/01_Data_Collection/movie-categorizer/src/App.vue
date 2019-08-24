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
      <div class="category-form__field">
        <div class="category-form__field--label">wokeness</div>
        <input
          class="category-form__field--input"
          type="range" min="0" max="100" step="5"
          v-model="currentRating.wokeness"
        >
        <div class="category-form__field--number">{{ currentRating.wokeness }}</div>
      </div>
      <div class="category-form__field">
        <div class="category-form__field--label">romanticness</div>
        <input
          class="category-form__field--input"
          type="range" min="0" max="100" step="5"
          v-model="currentRating.romanticness"
        >
        <div class="category-form__field--number">{{ currentRating.romanticness }}</div>
      </div>
      <div class="category-form__field">
        <div class="category-form__field--label">realism</div>
        <input
          class="category-form__field--input"
          type="range" min="0" max="100" step="5"
          v-model="currentRating.realism"
        >
        <div class="category-form__field--number">{{ currentRating.realism }}</div>
      </div>
      <div class="category-form__field">
        <div class="category-form__field--label">darkness</div>
        <input
          class="category-form__field--input"
          type="range" min="0" max="100" step="5"
          v-model="currentRating.darkness"
        >
        <div class="category-form__field--number">{{ currentRating.darkness }}</div>
      </div>
      <div class="category-form__field">
        <div class="category-form__field--label">complexity</div>
        <input
          class="category-form__field--input"
          type="range" min="0" max="100" step="5"
          v-model="currentRating.complexity"
        >
        <div class="category-form__field--number">{{ currentRating.complexity }}</div>
      </div>
      <div class="category-form__field">
        <div class="category-form__field--label">abstractness</div>
        <input
          class="category-form__field--input"
          type="range" min="0" max="100" step="5"
          v-model="currentRating.abstractness"
        >
        <div class="category-form__field--number">{{ currentRating.abstractness }}</div>
      </div>
      <div class="category-form__field">
        <div class="category-form__field--label">cinematography</div>
        <input
          class="category-form__field--input"
          type="range" min="0" max="100" step="5"
          v-model="currentRating.cinematography"
        >
        <div class="category-form__field--number">{{ currentRating.cinematography }}</div>
      </div>
      <div class="category-form__field">
        <div class="category-form__field--label">suspense</div>
        <input
          class="category-form__field--input"
          type="range" min="0" max="100" step="5"
          v-model="currentRating.suspense"
        >
        <div class="category-form__field--number">{{ currentRating.suspense }}</div>
      </div>
      <div class="category-form__field">
        <div class="category-form__field--label">humor</div>
        <input
          class="category-form__field--input"
          type="range" min="0" max="100" step="5"
          v-model="currentRating.humor"
        >
        <div class="category-form__field--number">{{ currentRating.humor }}</div>
      </div>
    </div>
    <button @click="nextMovie(false)">Next</button>
    <button @click="nextMovie(true)">Skip</button>
    <br/><br/>
    <span>Go to Page <input type="number" v-model="goToForm" @keydown.enter="goTo"> <button @click="goTo">></button></span>
    <br/>
    <a :href="dataHref" download="data.json">download JSON</a>
    <br/>
    <textarea :value="ratedJSON"/>
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
      goToForm: 0,
      currentMovieIndex: 0,
      currentRating: {
        wokeness: 0,
        romanticness: 0,
        realism: 0,
        darkness: 0,
        complexity: 0,
        abstractness: 0,
        cinematography: 0,
        suspense: 0,
        humor: 0
      },
      rated: []
    }
  },
  computed: {
    currentMovie () {
      return this.movies[this.currentMovieIndex]
    },
    ratedJSON () {
      return JSON.stringify(this.rated)
    },
    dataHref () {
      let data = 'text/json;charset=utf-8,' + encodeURIComponent(this.ratedJSON)
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
    goTo () {
      if (this.goToForm > 0) {
        this.page = this.goToForm
        this.currentMovieIndex = 0
        this.loadMovies(this.page)
      }
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
          characteristics: Object.assign({}, this.currentRating)
        })
      }

      // reset form
      Object.keys(this.currentRating).forEach((key, index) => {
        this.currentRating[key] = 0
      })

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
      width: 200px;
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
