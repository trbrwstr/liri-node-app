require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var inqurier = require("inquirer");
var twitter = require("twitter");
var Spotify = require("node-spotify-api");
var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];