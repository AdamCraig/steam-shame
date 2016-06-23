import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var url = 'http://localhost:4000/steam/' + params.userid + '/friends';

    return Ember.$.getJSON(url).then(function(responseJSON) {
      var idString = 'http://localhost:4000/steam/user/';
      for (var i = 0; i < responseJSON.friendslist.friends.length; i++) {
        idString = idString + responseJSON.friendslist.friends[i].steamid + ',';
      }
      idString = idString.substring(0, idString.length - 1) + '/profile';
      return Ember.$.getJSON(idString).then(function(APIresponse) {
        console.log(APIresponse.response.players);
        return APIresponse.response.players;
      });

    });
  }
});
