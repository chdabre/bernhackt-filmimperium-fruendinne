const rp = require('request-promise')

const tmdbKey = '4798eed7b83d0de78685239ce36d8689'
const tmdbApiRoot = 'https://api.themoviedb.org/3'

const tmdbRequest = function (path) {
  let url = new URL(tmdbApiRoot + path)
  url.searchParams.append('api_key', tmdbKey)
  console.log(`url: ${url}`)

  return rp(url.toString())
}

// Generates a movie list, in which a person either appears in the cast-list or crew-list.
// Returns an array with the ids of the movies, sorted by popularity
// eslint-disable-next-line no-unused-vars
function generateMovieListByPeople (personID) {
  let movies = []
  console.log(`Searching for movies for person ${personID}`)

  return new Promise((resolve, reject) => {
    tmdbRequest(`/person/${personID}/movie_credits`).then(response => {
      let data = JSON.parse(response)
      let cast = data.cast
      let crew = data.crew

      // merging two arrays together (and filter out duplicates):
      let both = cast.concat(crew.filter(function (item) { return cast.indexOf(item) < 0 }))
      // console.log(`both (cast and crew): ${JSON.stringify(both)}`)

      // reverse sorting by popularity:
      both.sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity))

      // print out the three top popular movies:
      // console.log(`best: ${both[0].original_title}: ${both[0].popularity}`)
      // console.log(`second: ${both[1].original_title}: ${both[1].popularity}`)
      // console.log(`third: ${both[2].original_title}: ${both[2].popularity}`)

      movies.push(...both.map(both => both.id))
      // console.log(movies)

      resolve(movies)
    }).catch(err => {
      reject(err)
    })
  })
}

// For testing the above method:
// let bratPittID = 287
// generateMovieListByPeople(bratPittID).then(response => {
//   console.log(response)
// }).catch(_ => { console.log(`Person ${bratPittID} doesn't exist (or another error occurred).`) })
