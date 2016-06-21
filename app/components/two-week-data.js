import Ember from 'ember';

export default Ember.Component.extend({

  twoWeekTotalHours: Ember.computed('recentGames', function() {
    var totalTime = 0;
    var allGames = this.get('recentGames');
    allGames.forEach(function(game) {
      totalTime += game.playtime_2weeks;
      console.log(totalTime);
    });
    var twoWeekTotalHours = (totalTime / 60);

    return twoWeekTotalHours.toFixed(2);
  }),

  gameOnePercentage: Ember.computed('recentGames', function() {
    var gameOne = this.get('recentGames')[0];
    var gameOneDecimal = (gameOne.playtime_2weeks / 60) / this.get('twoWeekTotalHours');
    var gameOnePercentage = gameOneDecimal * 100;

    return gameOnePercentage.toFixed(2);
  }),

  gameTwoPercentage: Ember.computed('recentGames', function() {
    var gameTwo = this.get('recentGames')[1];
    var gameTwoDecimal = (gameTwo.playtime_2weeks / 60) / this.get('twoWeekTotalHours');
    var gameTwoPercentage = gameTwoDecimal * 100;

    return gameTwoPercentage.toFixed(2);
  }),

  gameThreePercentage: Ember.computed('recentGames', function() {
    var gameThree = this.get('recentGames')[2];
    var gameThreeDecimal = (gameThree.playtime_2weeks / 60) / this.get('twoWeekTotalHours');
    var gameThreePercentage = gameThreeDecimal * 100;

    return gameThreePercentage.toFixed(2);
  }),
});
