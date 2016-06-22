import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var url = 'http://localhost:4000/steam/' + params.userid + '/friends';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log("all friends: ");
      console.log(responseJSON.friendslist.friends);
      return responseJSON.friendslist.friends;
    });
  }
});
