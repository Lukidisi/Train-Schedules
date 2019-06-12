// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyBk7d6_KJE7wK3kbLB2rqhjr1SG2Ygbcb0",
    authDomain: "trainscheduleproject-38509.firebaseapp.com",
    databaseURL: "https://trainscheduleproject-38509.firebaseio.com",
    storageBucket: "trainscheduleproject-38509.appspot.com"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();

// 2. Button for adding trains

$("addTrainBtn").on("click", function(event){
event.preventDefault();

var trainName = ""
var destinationName = ""
var firstTrainTime
var frequency
});

// 3. Create Firebase event for adding trains to the database and a row in the html when a user adds an entry