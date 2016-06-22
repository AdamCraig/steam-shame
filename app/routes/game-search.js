import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    gameSearch(params) {
      var allGamesURL = 'http://localhost:4000/steam/games';
      var appID = Ember.$.getJSON(allGamesURL).then(function(response) {
        var list = response.applist.apps.app;
        var foundGameID;

        var getGameID = function(title){
          list.forEach(function(item) {
            if (item.name === title) {
              foundGameID = item.appid;
            }
          });
          return foundGameID;
        };
        return getGameID(params.game);
      });

      this.transitionTo('game-results', appID);
    },

  }
});
