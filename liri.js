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
            console.log(tweets[0].text);
        }
    });
}


//Spotify

if (command === "spotify-this") {
    
}