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

  recentGamesData: Ember.computed(function() {
    if (this.get('recentGames') !== undefined) {
      if (this.get('recentGames')[0] && this.get('recentGames')[1] && this.get('recentGames')[2]) {
        return [
          {
              label: this.get('recentGames')[0].name + " hours",
              value: this.get('gameOneHours'),
              color:"#FE767A"
          },
          {
              label: this.get('recentGames')[1].name + " hours",
              value : this.get('gameTwoHours'),
              color : "#FFCE56"
          },
          {
              label: this.get('recentGames')[2].name + " hours",
              value : this.get('gameThreeHours'),
              color : "#36A2EB"
          },
        ];
      } else if (this.get('recentGames')[0] && this.get('recentGames')[1]) {
        return [
          {
              label: this.get('recentGames')[0].name + " hours",
              value: this.get('gameOneHours'),
              color:"#FE767A"
          },
          {
              label: this.get('recentGames')[1].name + " hours",
              value : this.get('gameTwoHours'),
              color : "#FFCE56"
          },
        ];
      } else if (this.get('recentGames')[0]) {
        return [
          {
              label: this.get('recentGames')[0].name + " hours",
              value: this.get('gameOneHours'),
              color:"#FE767A"
          },
        ];
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
      ];
    }

  }),

});
