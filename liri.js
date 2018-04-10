require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var inqurier = require("inquirer");

var Twitter = require("twitter");
var Spotify = require("node-spotify-api");

// Keys
var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);

//Enables you to search either twitter or spotify
var command = process.argv[2];

//Twitter
if (command === "tweets") {
    var params = {screen_name: "trbrwstr"};
    client.get("statuses/user_timeline", params, function(error, tweets, response) {
        if (!error) {
            for (var k = 0; k < tweets.length; k++);

            console.log("Tweet: "+ tweets[k].text);
        }
            console.log("Number of Tweets: "+tweets.length);
    });
}


//Spotify

//if (command === "spotify-this") {
//    inquirer.prompt([
//        {
//            type: "input",
//            message: "What song would you like search for?",
//            name: "song"
//       }
//    ]).then(function (inquirerResponse) {
//        var songToSearch = "";
//        if (inquirerResponse.song === "") {
//            songToSearch = "";
//        }
//        else {
//            songToSearch = inquirerResponse.song;
//        }
//    })
    //Artists

//    for (var j = 0; j < 5; j++) {
//        var artistsArr = [];
//        for (var i = 0; 
//};

