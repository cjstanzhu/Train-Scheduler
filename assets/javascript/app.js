$(document).ready(function() {

    var firebaseConfig = {
        apiKey: "AIzaSyBVPfcv14aQulmeOlSDkrrnaHgYc9d0pn0",
        authDomain: "train-scheduler-23e26.firebaseapp.com",
        databaseURL: "https://train-scheduler-23e26.firebaseio.com",
        projectId: "train-scheduler-23e26",
        storageBucket: "",
        messagingSenderId: "554103186468",
        appId: "1:554103186468:web:e0d7face2bbe112c"
    };
    
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    var trainName = "";
    var destination = "";
    var startTime = "";
    var frequency = "";

    $("#add-train").on("click", function(event) {
        event.preventDefault();

        trainName = $("#train-name-input").val().trim();
        destination = $("#destination-input").val().trim();
        startTime = $("#start-time-input").val().trim(); //placeholder
        frequency = $("#frequency-input").val().trim();

        var newTrain = {
            trainName: trainName,
            destination: destination,
            startTime: startTime,
            frequency: frequency
        };

        database.ref().push(newTrain);

        $("#train-name-input").val("");
        $("#destination-input").val("");
        $("#start-time-input").val("");
        $("#frequency-input").val("");
    });

    database.ref().on("child_added", function(snapshot) {
        var newRow = $("<tr>")
        
        newRow.append(
            $("<td>").text(snapshot.val().trainName),
            $("<td>").text(snapshot.val().destination),
            $("<td>").text(snapshot.val().frequency),
            $("<td>").text("placeholder"),
            $("<td>").text("placeholder")
          );
        
        $("#train-table > tbody").append(newRow);

    });

});


