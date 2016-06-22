import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {

    var urlMetal = 'http://localhost:4000/steam/'+ params.steamid + '/hats/';
    var urlPrice = 'http://localhost:4000/currencyprice'; //do this tomorrow

    return Ember.RSVP.hash({
      metal: Ember.$.getJSON(urlMetal).then(function(responseJSON) {
        console.log(responseJSON.response.players[params.steamid]);
        return responseJSON.response.players[params.steamid].backpack_value['440'];
      }),
      metalprice: Ember.$.getJSON(urlPrice).then(function(responseJSON) {
        console.log(responseJSON.response.currencies.metal.price.value_high);
        return responseJSON.response.currencies.metal.price.value_high;
      })
    });
  }
});
