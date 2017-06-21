var config = {
    apiKey: "AIzaSyAa9MV3QqwpoWbMs--FdNBImtNlhgYcVrw",
    authDomain: "chatapp-910bc.firebaseapp.com",
    databaseURL: "https://chatapp-910bc.firebaseio.com",
    storageBucket: "chatapp-910bc.appspot.com",
    messagingSenderId: "220911885684"
  };
  firebase.initializeApp(config);
angular.module('chatApp', ['firebase'])
