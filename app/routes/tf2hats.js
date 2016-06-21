import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var url = 'http://localhost:4000/steam/'+ params.steamid + '/hats/';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.response.players[params.steamid]);
      return responseJSON.response.players[params.steamid].backpack_value['440'];
    });
  }
});
