// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: 'AIzaSyDfRpzz9hXfnyh-hClUU-MvpOir7WIdUJI',
  authDomain: 'match-app-bernhackt.firebaseapp.com',
  databaseURL: 'https://match-app-bernhackt.firebaseio.com',
  projectId: 'match-app-bernhackt',
  storageBucket: '',
  messagingSenderId: '29234653327',
  appId: '1:29234653327:web:1184001cb8dbaadd'
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// Additional settings for Firestore
const settings = {
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')

export default {
  db,
  auth,
  currentUser,
  usersCollection
}
