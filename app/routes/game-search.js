import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    gameSearch(params) {
      var self = this;
      var allGamesURL = 'http://localhost:4000/steam/games';
      var appID = Ember.$.getJSON(allGamesURL).then(function(response) {
        var list = response.applist.apps.app;
        var foundGameID = "No Match";

        var getGameID = function(title){
          list.forEach(function(item) {
            if (item.name === title) {
              foundGameID = item.appid;
            }
          });
          if (foundGameID === "No Match") {
            alert("No match found. Try again!");
          } else {
            self.transitionTo('appid-results', foundGameID);
          }
        };
        return getGameID(params.game);
      });

    },

  }
});
