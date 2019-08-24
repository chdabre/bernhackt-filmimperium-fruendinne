<template>
  <div
    class="flex-grow-1"
  >
    <h2>welche genres magst du?</h2>
    <h4>2x klicken was du nicht magst.</h4>

    <div class="bubbles">
      <v-chip
        class="bubble"
        v-for="(genre, index) in genres"
        :key="index"
        :class="{'taller': genre.selected}"
        :color="genre.selected && !genre.hate ? colors[index % colors.length] : ''"
        :disabled="genre.hate"
        @click="toggleGenre(genre)"
      >
        {{ genre.name }}
      </v-chip>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      colors: [
        'secondary',
        'accent',
        'warning',
        'error',
        'success'
      ],
      genres: [
        { selected: false, hate: false, 'id': 28, 'name': 'Action' },
        { selected: false, hate: false, 'id': 12, 'name': 'Adventure' },
        { selected: false, hate: false, 'id': 35, 'name': 'Comedy' },
        { selected: false, hate: false, 'id': 18, 'name': 'Drama' },
        { selected: false, hate: false, 'id': 14, 'name': 'Fantasy' },
        { selected: false, hate: false, 'id': 27, 'name': 'Horror' },
        { selected: false, hate: false, 'id': 9648, 'name': 'Mystery' },
        { selected: false, hate: false, 'id': 10749, 'name': 'Romance' },
        { selected: false, hate: false, 'id': 878, 'name': 'Science Fiction' },
        { selected: false, hate: false, 'id': 53, 'name': 'Thriller' },
        { selected: false, hate: false, 'id': 10752, 'name': 'War' },
        { selected: false, hate: false, 'id': 37, 'name': 'Western' }
      ],
      selectedGenres: []
    }
  },
  methods: {
    toggleGenre (genre) {
      if (!genre.selected || genre.hate) {
        genre.selected = true
        genre.hate = false
      } else if (genre.selected && !genre.hate) {
        genre.selected = false
        genre.hate = true
      } else {
        genre.selected = false
        genre.hate = false
      }

      this.updateGenres()
    },
    updateGenres () {
      let genresChoice = {
        love: [],
        hate: []
      }
      this.genres.forEach(genre => {
        if (genre.selected) genresChoice.love.push(genre)
        else if (genre.hate) genresChoice.hate.push(genre)
      })
      this.$store.dispatch('setGenresChoice', genresChoice)
    }
  }
}
</script>

<style lang="scss">
.bubbles {
  margin-top: 1rem;

  .bubble {
    display: inline-block;
    margin: .5rem;
    border-radius: 50%;
    width: 104px;
    height: 104px;
    text-align: center;
  }

  .taller {
    width: 120px;
    height: 120px;
    margin: 0rem;
  }
}
</style>
