import {initializeApp} from "firebase/app"
import {getFirestore,collection} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const config = {
    apiKey: "AIzaSyBitE7sLGG_46fV9dbp-rr8tYILcqHlOiU",
    authDomain: "project-test-3bb76.firebaseapp.com",
    databaseURL: "https://project-test-3bb76.firebaseio.com",
    projectId: "project-test-3bb76",
    storageBucket: "project-test-3bb76.appspot.com",
    messagingSenderId: "971538913788",
    appId: "1:971538913788:web:1f5c43d43362cd9a293a79",
    measurementId: "G-BPZ1RBELGN"
}

const app = initializeApp(config)
const auth = getAuth()
const db = getFirestore()
const dbGroups = collection(db,"groups")
const dbUsers = collection(db,"users")

export {app,db,dbGroups,auth,dbUsers}