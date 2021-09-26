import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

import './styles/general.css'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi1IDxaOdWDGoJ1O916jJbfHAipA0ph3U",
  authDomain: "gamor-82184.firebaseapp.com",
  projectId: "gamor-82184",
  storageBucket: "gamor-82184.appspot.com",
  messagingSenderId: "992396306559",
  appId: "1:992396306559:web:5dacc1d7a2291fe389b74a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
