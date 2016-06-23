import Ember from 'ember';

export default Ember.Component.extend({

  gameOneHours: Ember.computed('recentGames', function() {
    var gameOne = this.get('recentGames')[0];
    var gameOneHours = (gameOne.playtime_2weeks / 60).toFixed(2);

    return gameOneHours;
  }),

  gameTwoHours: Ember.computed('recentGames', function() {
    var gameTwo = this.get('recentGames')[1];
    var gameTwoHours = (gameTwo.playtime_2weeks / 60).toFixed(2);

    return gameTwoHours;
  }),

  gameThreeHours: Ember.computed('recentGames', function() {
    var gameThree = this.get('recentGames')[2];
    var gameThreeHours = (gameThree.playtime_2weeks / 60).toFixed(2);

    return gameThreeHours;
  }),

  pieData: Ember.computed('this.gameOneHours', 'this.gameTwoHours', 'this.gameThreeHours', 'recentGames', function() {
    if (this.get('recentGames') !== undefined) {
      if (this.get('recentGames')[0] && this.get('recentGames')[1] && this.get('recentGames')[2]) {
        return [
          {
              label: this.get('recentGames')[0].name + " hours",
              value: this.get('gameOneHours'),
              color:"#878BB6"
          },
          {
              label: this.get('recentGames')[1].name + " hours",
              value : this.get('gameTwoHours'),
              color : "#4ACAB4"
          },
          {
              label: this.get('recentGames')[2].name + " hours",
              value : this.get('gameThreeHours'),
              color : "#FF8153"
          },
        ]
      } else if (this.get('recentGames')[0] && this.get('recentGames')[1]) {
        return [
          {
              label: this.get('recentGames')[0].name + " hours",
              value: this.get('gameOneHours'),
              color:"#878BB6"
          },
          {
              label: this.get('recentGames')[1].name + " hours",
              value : this.get('gameTwoHours'),
              color : "#4ACAB4"
          },
        ]
      } else if (this.get('recentGames')[0]) {
        return [
          {
              label: this.get('recentGames')[0].name + " hours",
              value: this.get('gameOneHours'),
              color:"#878BB6"
          },
        ]
      }

    } else {
      return [
        {
            label: "N/A",
            value: 1,
            color:"grey"
        },
        {
            label: "N/A",
            value: 1,
            color : "grey"
        },
        {
            label: "N/A",
            value: 1,
            color : "grey"
        },
      ]
    }

  }),

});
