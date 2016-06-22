import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['playtime_forever:desc'],
  sortedGames: Ember.computed.sort('model.games', 'sortBy'),
  totalGameTime: Ember.computed('model.games', function() {
    var totalTime = 0;
    this.get('model.games').forEach(function(game) {
      if (game.playtime_forever > 0) {
        totalTime += game.playtime_forever;
      }
    });
  }),
});
