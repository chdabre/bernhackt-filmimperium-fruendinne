import Vue from 'vue'
import Vuex from 'vuex'
import fb from './firebaseConfig'
import movieData from '../assets/moviedata'

Vue.use(Vuex)

// Handle page reload
fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('setCurrentUser', user)
    store.dispatch('fetchUserProfile')
  }
})

const store = new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: {},
    movieData,
    queryForm: {
      wokeness: 0,
      romanticness: 0,
      realism: 0,
      darkness: 0,
      complexity: 0,
      abstractness: 0,
      cinematography: 0,
      suspense: 0,
      humor: 0
    }
  },
  mutations: {
    setCurrentUser (state, val) {
      state.currentUser = val
    },
    setUserProfile (state, val) {
      state.userProfile = val
    },
    setRomanticness (state, val) {
      state.queryForm.romanticness = val
    },
    setWokeness (state, val) {
      state.queryForm.wokeness = val
    },
    setDarkness (state, val) {
      state.queryForm.darkness = val
    },
    setRealism (state, val) {
      state.queryForm.realism = val
    },
    setHumor (state, val) {
      state.queryForm.humor = val
    },
    setCinematography (state, val) {
      state.queryForm.cinematography = val
    },
    setSuspense (state, val) {
      state.queryForm.suspense = val
    }
  },
  actions: {
    fetchUserProfile ({ commit, state }) {
      fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
        commit('setUserProfile', res.data())
      }).catch(err => {
        console.log(err)
      })
    }
  }
})

export default store
