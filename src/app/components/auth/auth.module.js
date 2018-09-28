angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function ($firebaseRefProvider) {
  var config = {
    apiKey: "",
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
  .run(function ($transitions, $state, AuthService) {
    $transitions.onStart({
      to: function (state) {
        return !!(state.data && state.data.requiredAuth)
      }
    }, function () {
      return AuthService
        .requireAuthentication()
        .catch(function () {
          return $state.target('auth.login');
        });
    });

    $transitions.onStart({
      to: 'auth.*'
    }, function () {
      if (AuthService.isAuthenticated()) {
        return $state.target('app');
      }
    });
  });
