require('dotenv').load();
var apiKey = process.env.apiKey;
var bptfKey = process.env.bptfKey;
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();

app.get('/steam/fudgethepolice', function(httpRequest, httpResponse) {
  var url = 'http://api.steampowered.com/IEconItems_440/GetPlayerItems/v0001/?key=' + apiKey + '&steamid=76561198025036440';
  request.get(url, function(error, steamHttpResponse, steamHttpBody) {
    httpResponse.setHeader('Content-Type', 'application/json');
    httpResponse.setHeader('Access-Control-Allow-Origin', '*');
    httpResponse.send(steamHttpBody);
  });
});

app.get('/steam/fuckthepolice', function(httpRequest, httpResponse) {
  var url = 'http://backpack.tf/api/IGetUsers/v3/?key=' + bptfKey + '&steamids=76561198025036440';
  request.get(url, function(error, steamHttpResponse, steamHttpBody) {
    httpResponse.setHeader('Content-Type', 'application/json');
    httpResponse.setHeader('Access-Control-Allow-Origin', '*');
    console.log(steamHttpBody);
    httpResponse.send(steamHttpBody);
  });
});

app.get('/steam/civ5achievements', function(httpRequest, httpResponse) {
    // Calculate the Steam API URL we want to use
    var url = 'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/' +
        'v0002/?appid=440&key='+ apiKey +'&steamid=76561198025036440';
    request.get(url, function(error, steamHttpResponse, steamHttpBody) {

        // Once we get the body of the steamHttpResponse, send it to our client
        // as our own httpResponse
        httpResponse.setHeader('Content-Type', 'application/json');
        httpResponse.setHeader('Access-Control-Allow-Origin', '*');
        httpResponse.send(steamHttpBody);
        console.log("Backend Server: \n" + steamHttpBody);
    });
});

app.get('/steam/game/:appid/achievements', function(httpRequest, httpResponse) {
    // Calculate the Steam API URL we want to use
    var url = 'http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/' +
        'v2/?key=' + apiKey + '&appid=' +
        httpRequest.params.appid;
    request.get(url, function(error, steamHttpResponse, steamHttpBody) {
        httpResponse.setHeader('Content-Type', 'application/json');
        httpResponse.setHeader('Access-Control-Allow-Origin', '*');
        httpResponse.send(steamHttpBody);
    });
});

//not sure if we're really going to need this...
app.use('/', express.static('public'));
app.use(bodyParser.text());
app.post('/frank-blog', function(httpRequest, httpResponse) {
    console.log(httpRequest.body);
    // We need to respond to the request so the web browser knows
    // something happened.
    // If you've got nothing better to say, it's considered good practice to
    // return the original POST body.
    httpResponse.status(200).send('Posted today:\n\n' + httpRequest.body);
});

var port = 4000;
var server = app.listen(port);
console.log('Listening on port ' + port);
