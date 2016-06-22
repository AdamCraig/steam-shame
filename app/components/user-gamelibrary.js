import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['playtime_forever:desc'],
  sortedGames: Ember.computed.sort('model.games', 'sortBy'),
  // unplayedGames: Ember.computed('model.games', function() {
  //   var total = this.get('model.games').length
  //   var unplayed = 0;
  //   this.get('model.games').forEach(function(game) {
  //     if (game.playtime_forever === 0) {
  //       unplayed++;
  //     }
  //   });
  //   return 'you have ' + unplayed  + ' unplayed games out of ' + total + ".  That's " + (100*unplayed/total).toFixed(2) + "% of your games. For shame!  You have spend a total of " + (totalTime/1440).toFixed(2) + " days on Steam";
  // }),
  totalGameTime: Ember.computed('model.games', function() {
    var totalTime = 0;
    this.get('model.games').forEach(function(game) {
      if (game.playtime_forever > 0) {
        totalTime += game.playtime_forever;
      }
    });
  }),
});
