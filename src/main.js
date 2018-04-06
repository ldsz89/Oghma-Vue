// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import firebaseui from 'firebaseui'

Vue.config.productionTip = false

// Move firebase configuration to a separate configuration file for production
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDSZ2HXEmnfo-0xHvMn4GFL65BQvA0dNHs",
    authDomain: "oghma-61849.firebaseapp.com",
    databaseURL: "https://oghma-61849.firebaseio.com",
    projectId: "oghma-61849",
    storageBucket: "oghma-61849.appspot.com",
    messagingSenderId: "671846068348"
};

// Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created() {
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged((user) => {
          if (user) {
              // console.log(user);
              this.$router.push('/charactercreate');
          }
          else {
              this.$router.push('/auth')
          }
      });
  }
})
