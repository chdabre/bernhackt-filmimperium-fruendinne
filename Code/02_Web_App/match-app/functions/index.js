const functions = require('firebase-functions')
const admin = require('firebase-admin')

const rp = require('request-promise')

admin.initializeApp(functions.config().firebase)
let db = admin.firestore()

const tmdbKey = '4798eed7b83d0de78685239ce36d8689'
const tmdbApiRoot = 'https://api.themoviedb.org/3'

const tmdbRequest = function (path) {
  let url = new URL(tmdbApiRoot + path)
  url.searchParams.append('api_key', tmdbKey)

  return rp(url.toString())
}

const generateSimilar = function (userPreferences) {
  let movieId = userPreferences.loves[0]
  console.log(`Generate similar for Movie ID ${movieId}`)

  return new Promise((resolve, reject) => {
    tmdbRequest(`/movie/${movieId}/similar`).then(response => {
      console.log(`Got ${response}`)
      let similarIds = []
      JSON.parse(response).results.forEach(result => similarIds.push(result.id))

      resolve(similarIds)
    }).catch(err => {
      console.log(err)

      reject(err)
    })
  })
}

const generators = [
  generateSimilar
]

exports.generateUserRecommendations = functions.https.onCall((data, context) => {
  return {
    test: 0
  }
  // return db.collection('users').doc(context.auth.uid).get().then(res => {
  //   // This is temporary
  //   let userPreferences = {
  //     loves: ['458156', '299537', '603'], // John wick ch.3 , Captain Marvel, Matrix
  //     likes: ['24428', '335983', '124905'], // Avengers, Venom, Godzilla
  //     hates: ['244786', '605', '284052']// Whiplash, Matrix Evolutions, Dr Strange
  //   }
  //
  //   return {
  //     res
  //   }
  // })
})
