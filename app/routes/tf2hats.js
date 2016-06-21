import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
   var url = 'http://localhost:4000/steam/fuckthepolice/';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON.response.players);
     return responseJSON.response.players;
   });
 }
});
