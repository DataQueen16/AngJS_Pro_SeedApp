angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function ($firebaseRefProvider) {
  var config = {
    apiKey: "AIzaSyCfsPgS0Om56NmLuhSqahuD1284blTLvhY",
    authDomain: "contacts-manager-86066.firebaseapp.com",
    databaseURL: "https://contacts-manager-86066.firebaseio.com",
    projectId: "contacts-manager-86066",
    storageBucket: "contacts-manager-86066.appspot.com",
    messagingSenderId: "741436178153"
  };
  $firebaseRefProvider
    .registerUrl({
      default: config.databaseURL,
      contacts: config.databaseURL + '/contacts'
    });
    
  firebase.initializeApp(config);
  })
