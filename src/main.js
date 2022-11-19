import firebase from "firebase/compat/app";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import * as Vue from "vue";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdi',
  }
});



// Vue.use(rtdbPlugin);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhMiyCFMdCcRgDcFvXINYtEZb_3X1yUZo",
  authDomain: "classiot-3ae5a.firebaseapp.com",
  databaseURL: "https://classiot-3ae5a-default-rtdb.firebaseio.com",
  projectId: "classiot-3ae5a",
  storageBucket: "classiot-3ae5a.appspot.com",
  messagingSenderId: "10161755117",
  appId: "1:10161755117:web:1e7593b3cc3300c6e10de4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = Vue.createApp(App);
app.use(store).use(router).mount("#app");
app.use(vuetify);