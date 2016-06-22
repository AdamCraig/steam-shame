import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['playtime_forever:desc'],
  sortedGames: Ember.computed.sort('model.games', 'sortBy'),
  unplayedGames: Ember.computed('mode.games', function() {
    var total = this.get('model.games').length
    var unplayed = 0;
    this.get('model.games').forEach(function(game) {
      if (game.playtime_forever === 0) {
        unplayed++;
      }
    });
    return 'you have ' + unplayed  + ' unplayed games out of ' + total + ".  That's " + (100*unplayed/total).toFixed(2) + "% of your games. For shame!";
  }),
});
