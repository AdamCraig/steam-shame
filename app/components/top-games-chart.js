import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['playtime_forever:desc'],
  sortedGames: Ember.computed.sort('recentGames', 'sortBy'),
  topTenGames: Ember.computed(function() {
    var topTenArray = [];
    for(var index = 0; index < 10; index++) {
      topTenArray.push(this.get('sortedGames')[index]);
    }
    console.log("topTenArray:");
    console.log(topTenArray);
    return topTenArray;
  }),

  gameOneHours: Ember.computed('topTenGames', function() {
    var gameOne = this.get('topTenGames')[0];
    var gameOneHours = (gameOne.playtime_forever / 60).toFixed(2);
    return gameOneHours;
  }),

  gameTwoHours: Ember.computed('topTenGames', function() {
    var gameTwo = this.get('topTenGames')[1];
    var gameTwoHours = (gameTwo.playtime_forever / 60).toFixed(2);
    return gameTwoHours;
  }),

  gameThreeHours: Ember.computed('topTenGames', function() {
    var gameThree = this.get('topTenGames')[2];
    var gameThreeHours = (gameThree.playtime_forever / 60).toFixed(2);
    return gameThreeHours;
  }),

  topGamesData: Ember.computed('this.gameOneHours', 'this.gameTwoHours', 'this.gameThreeHours', 'topTenGames', function() {
    return [
      {
          label: this.get('topTenGames')[0].name + " hours",
          value: this.get('gameOneHours'),
          color:"#878BB6"
      },
      {
          label: this.get('topTenGames')[1].name + " hours",
          value : this.get('gameTwoHours'),
          color : "#4ACAB4"
      },
      {
          label: this.get('topTenGames')[2].name + " hours",
          value : this.get('gameThreeHours'),
          color : "#FF8153"
      },
    ];
  })
});
