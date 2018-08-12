import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBMXch0_3R0C0NMp2K8zNdkKHdGTrFTOUE',
  authDomain: 'vue-template-project.firebaseapp.com',
  databaseURL: 'https://vue-template-project.firebaseio.com',
  projectId: 'vue-template-project',
  storageBucket: 'vue-template-project.appspot.com',
  messagingSenderId: '1034392480238'
}

firebase.initializeApp(config)

export default firebase
