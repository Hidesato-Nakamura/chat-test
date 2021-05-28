import firebase from 'firebase/app'
import 'firebase/database'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDOabJj-fWEuU_nDBtUvrN0GKaHeQQAeCM',
    authDomain: 'coral-loop-296005.firebaseapp.com',
    databaseURL: 'https://coral-loop-296005-default-rtdb.firebaseio.com/',
    projectId: 'coral-loop-296005',
    storageBucket: 'coral-loop-296005.appspot.com',
    messagingSenderId: '526400495340',
    appId: '1:526400495340:web:b97496d02e99c5e6d08fc9',
    measurementId: '526400495340',
  })
}

export default firebase
