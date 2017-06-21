var config = {
    apiKey: "AIzaSyAFvHfZ0j5GE_IylgK-MgxUCWx5V9ILArM",
    authDomain: "fir-f30ba.firebaseapp.com",
    databaseURL: "https://fir-f30ba.firebaseio.com",
    projectId: "fir-f30ba",
    storageBucket: "fir-f30ba.appspot.com",
    messagingSenderId: "67694317702"
  };
  firebase.initializeApp(config);
angular.module('chatApp', ['firebase'])
