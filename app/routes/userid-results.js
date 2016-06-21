import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var url = 'http://localhost:4000/steam/user/' + params.userid + '/profile';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.response.players[0]);
      return responseJSON.response.players[0];
    });
  },
  
});
