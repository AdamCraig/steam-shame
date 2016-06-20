import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
   var url = 'http://localhost:4000/steam/game/' + params.appid + '/achievements';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON.game.availableGameStats.achievements);
     return responseJSON.game.availableGameStats.achievements;
   });
 },
});
