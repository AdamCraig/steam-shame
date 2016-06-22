import Ember from 'ember';

export default Ember.Route.extend({
  // model(params) {
  //   var allGamesURL = 'http://localhost:4000/steam/games';
  //
  //   return Ember.$.getJSON(allGamesURL).then(function(response) {
  //     var list = response.applist.apps.app;
  //     var foundGameID;
  //
  //     var getGameInfo = function(title){
  //       list.forEach(function(item) {
  //         if (item.name === title) {
  //           foundGameID = item.appid;
  //         }
  //       });
  //       return Ember.$.getJSON('http://localhost:4000/steam/game/' + foundGameID + '/achievements').then(function(response) {
  //         console.log(response.game.availableGameStats.achievements);
  //         return response.game.availableGameStats.achievements;
  //       });
  //     };
  //     return getGameInfo(params.game);
  //   });
  // },

});
