// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'
// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'

import credentials from '../../credentials.json'

// firebase init goes here
const config = credentials.firebase
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const functions = firebase.functions()
functions.useFunctionsEmulator('http://localhost:5001')
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
  functions,
  currentUser,
  usersCollection
}
