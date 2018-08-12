import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAZwhdf8WwvhGBq9dcpLHlmMXnqde4iHQY',
  authDomain: 'saldo-positivo.firebaseapp.com',
  databaseURL: 'https://saldo-positivo.firebaseio.com',
  projectId: 'saldo-positivo',
  storageBucket: 'saldo-positivo.appspot.com',
  messagingSenderId: '6047805400'
}

firebase.initializeApp(config)

export default firebase
