import Ember from 'ember';

export default Ember.Component.extend({

  twoWeekTotalHours: Ember.computed('recentGames', function() {
    var totalTime = 0;
    var allGames = this.get('recentGames');
    if (allGames) {
      allGames.forEach(function(game) {
        totalTime += game.playtime_2weeks;
      });
    }
    var twoWeekTotalHours = (totalTime / 60);

    return twoWeekTotalHours.toFixed(2);
  }),

  gameOnePercentage: Ember.computed('recentGames', function() {
    if (this.get('recentGames').length > 0) {
      var gameOne = this.get('recentGames')[0];
      var gameOneDecimal = (gameOne.playtime_2weeks / 60) / this.get('twoWeekTotalHours');
      var gameOnePercentage = gameOneDecimal * 100;

      return gameOnePercentage.toFixed(2);
    }
    return 0;
  }),

  gameTwoPercentage: Ember.computed('recentGames', function() {
    if (this.get('recentGames').length > 1) {
      var gameTwo = this.get('recentGames')[1];
      var gameTwoDecimal = (gameTwo.playtime_2weeks / 60) / this.get('twoWeekTotalHours');
      var gameTwoPercentage = gameTwoDecimal * 100;

      return gameTwoPercentage.toFixed(2);
    }
    return 0;
  }),

  gameThreePercentage: Ember.computed('recentGames', function() {
    if (this.get('recentGames').length > 2) {
      var gameThree = this.get('recentGames')[2];
      var gameThreeDecimal = (gameThree.playtime_2weeks / 60) / this.get('twoWeekTotalHours');
      var gameThreePercentage = gameThreeDecimal * 100;

      return gameThreePercentage.toFixed(2);
    }
    return 0;
  }),

});
