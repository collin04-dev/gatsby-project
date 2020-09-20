import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCKLW3nNZyylkF_QPl5494_2kCAMUingZk",
    authDomain: "website-comments-5106b.firebaseapp.com",
    databaseURL: "https://website-comments-5106b.firebaseio.com",
    projectId: "website-comments-5106b",
    storageBucket: "website-comments-5106b.appspot.com",
    messagingSenderId: "1076001995151",
    appId: "1:1076001995151:web:3b7b8597d0df63f22d73fa"
  };

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase