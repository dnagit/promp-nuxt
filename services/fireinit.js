import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

var config = {
    apiKey: "AIzaSyAcuRid40eaVEx5TKKn5yibuDTFNDyQxAU",
    authDomain: "promp-d2fc3.firebaseapp.com",
    databaseURL: "https://promp-d2fc3.firebaseio.com",
    projectId: "promp-d2fc3",
    storageBucket: "promp-d2fc3.appspot.com",
    messagingSenderId: "660976897097",
    appId: "1:660976897097:web:3e99bf294512e6f1cd4398"
}

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase