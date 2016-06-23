import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return Ember.$.getJSON('http://localhost:4000/steam/game/' + params.appid + '/achievements').then(function(response) {
      console.log(response.game.availableGameStats.achievements);
      return response.game.availableGameStats.achievements;
    });
  }
});
