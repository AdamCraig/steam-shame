import config from '../config/environment'
var key = process.env.apiKey;
var express = require('express');
var app = express();

app.get('/', function(httpRequest, httpResponse) {
    httpResponse.send('Hello, World!');
});

app.get('/hello-frank', function(httpRequest, httpResponse) {
    httpResponse.send('Hello, Frank.');
});

app.post('/hello-frank', function(httpRequest, httpResponse) {
    httpResponse.send("No, Frank. You're not allowed to post.");
});

app.get('/hello/:name', function(httpRequest, httpResponse) {
    var name = httpRequest.params.name;
    httpResponse.send('Hello, ' + name + '!');
});

var request = require('request');

app.get('/test9', function(httpRequest, httpResponse) {
    // Calculate the Steam API URL we want to use
    var url = 'http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=373420&key=' + key + '&steamid=' + '76561198147125546';
    request.get(url, function(error, steamHttpResponse, steamHttpBody) {
        // Once we get the body of the steamHttpResponse, send it to our client
        // as our own httpResponse
        httpResponse.setHeader('Content-Type', 'application/json');
        httpResponse.setHeader('Access-Control-Allow-Origin', '*');
        httpResponse.send(steamHttpBody);
    });
});

app.get('/steam/game/:appid/achievements', function(httpRequest, httpResponse) {
    // Calculate the Steam API URL we want to use
    var url = 'http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/' +
        'v2/?key=' + key + '&appid=' +
        httpRequest.params.appid;
    request.get(url, function(error, steamHttpResponse, steamHttpBody) {
        httpResponse.setHeader('Content-Type', 'application/json');
        httpResponse.setHeader('Access-Control-Allow-Origin', '*');
        httpResponse.send(steamHttpBody);
    });
});

app.get('steam/game/:appid', function(httpRequest, httpResponse) {
  var url = 'http://api.steampowered.com/ISteamApps/GetAppList/v0001/'
})

app.use('/', express.static('public'));

var bodyParser = require('body-parser');

app.use(bodyParser.text());

var port = 4000;
var server = app.listen(port);
console.log('Listening on port ' + port);
