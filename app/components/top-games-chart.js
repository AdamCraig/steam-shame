import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['playtime_forever:desc'],
  sortedGames: Ember.computed.sort('allGames.games', 'sortBy'),
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

  gameFourHours: Ember.computed('topTenGames', function() {
    var gameFour = this.get('topTenGames')[3];
    var gameFourHours = (gameFour.playtime_forever / 60).toFixed(2);
    return gameFourHours;
  }),

  gameFiveHours: Ember.computed('topTenGames', function() {
    var gameFive = this.get('topTenGames')[4];
    var gameFiveHours = (gameFive.playtime_forever / 60).toFixed(2);
    return gameFiveHours;
  }),

  gameSixHours: Ember.computed('topTenGames', function() {
    var gameSix = this.get('topTenGames')[5];
    var gameSixHours = (gameSix.playtime_forever / 60).toFixed(2);
    return gameSixHours;
  }),

  gameSevenHours: Ember.computed('topTenGames', function() {
    var gameSeven = this.get('topTenGames')[6];
    var gameSevenHours = (gameSeven.playtime_forever / 60).toFixed(2);
    return gameSevenHours;
  }),

  gameEightHours: Ember.computed('topTenGames', function() {
    var gameEight = this.get('topTenGames')[7];
    var gameEightHours = (gameEight.playtime_forever / 60).toFixed(2);
    return gameEightHours;
  }),

  gameNineHours: Ember.computed('topTenGames', function() {
    var gameNine = this.get('topTenGames')[8];
    var gameNineHours = (gameNine.playtime_forever / 60).toFixed(2);
    return gameNineHours;
  }),

  gameTenHours: Ember.computed('topTenGames', function() {
    var gameTen = this.get('topTenGames')[9];
    var gameTenHours = (gameTen.playtime_forever / 60).toFixed(2);
    return gameTenHours;
  }),

  topGamesData: Ember.computed(function() {
    if (this.get('topTenGames') !== undefined) {
      if (this.get('topTenGames')[0] && this.get('topTenGames')[1] && this.get('topTenGames')[2] && this.get('topTenGames')[3] && this.get('topTenGames')[4] && this.get('topTenGames')[5] && this.get('topTenGames')[6] && this.get('topTenGames')[7] && this.get('topTenGames')[8] && this.get('topTenGames')[9]) {
        return [
          {
              label: this.get('topTenGames')[0].name + " hours",
              value: this.get('gameOneHours'),
              color: "#673AB7"
          },
          {
              label: this.get('topTenGames')[1].name + " hours",
              value : this.get('gameTwoHours'),
              color : "#4ACAB4"
          },
          {
              label: this.get('topTenGames')[2].name + " hours",
              value : this.get('gameThreeHours'),
              color : "#4CAF50"
          },
          {
              label: this.get('topTenGames')[3].name + " hours",
              value : this.get('gameFourHours'),
              color : "#FF5252"
          },
          {
              label: this.get('topTenGames')[4].name + " hours",
              value : this.get('gameFiveHours'),
              color : "#FF9800"
          },
          {
              label: this.get('topTenGames')[5].name + " hours",
              value : this.get('gameSixHours'),
              color : "#00BCD4"
          },
          {
              label: this.get('topTenGames')[6].name + " hours",
              value : this.get('gameSevenHours'),
              color : "#CDDC39"
          },
          {
              label: this.get('topTenGames')[7].name + " hours",
              value : this.get('gameEightHours'),
              color : "#C2185B"
          },
          {
              label: this.get('topTenGames')[8].name + " hours",
              value : this.get('gameNineHours'),
              color : "#FFC107"
          },
          {
              label: this.get('topTenGames')[9].name + " hours",
              value : this.get('gameTenHours'),
              color : "#536DFE"
          }
        ];
      } else if (this.get('topTenGames')[0] && this.get('topTenGames')[1] && this.get('topTenGames')[2] && this.get('topTenGames')[3] && this.get('topTenGames')[4] && this.get('topTenGames')[5] && this.get('topTenGames')[6] && this.get('topTenGames')[7] && this.get('topTenGames')[8]) {
        return [
          {
              label: this.get('topTenGames')[0].name + " hours",
              value: this.get('gameOneHours'),
              color:"#673AB7"
          },
          {
              label: this.get('topTenGames')[1].name + " hours",
              value : this.get('gameTwoHours'),
              color : "#4ACAB4"
          },
          {
              label: this.get('topTenGames')[2].name + " hours",
              value : this.get('gameThreeHours'),
              color : "#4CAF50"
          },
          {
              label: this.get('topTenGames')[3].name + " hours",
              value : this.get('gameFourHours'),
              color : "#FF5252"
          },
          {
              label: this.get('topTenGames')[4].name + " hours",
              value : this.get('gameFiveHours'),
              color : "#FF9800"
          },
          {
              label: this.get('topTenGames')[5].name + " hours",
              value : this.get('gameSixHours'),
              color : "#00BCD4"
          },
          {
              label: this.get('topTenGames')[6].name + " hours",
              value : this.get('gameSevenHours'),
              color : "#CDDC39"
          },
          {
              label: this.get('topTenGames')[7].name + " hours",
              value : this.get('gameEightHours'),
              color : "#C2185B"
          },
          {
              label: this.get('topTenGames')[8].name + " hours",
              value : this.get('gameNineHours'),
              color : "#FFC107"
          },
        ];
      } else if (this.get('topTenGames')[0] && this.get('topTenGames')[1] && this.get('topTenGames')[2] && this.get('topTenGames')[3] && this.get('topTenGames')[4] && this.get('topTenGames')[5] && this.get('topTenGames')[6] && this.get('topTenGames')[7]) {
        return [
          {
              label: this.get('topTenGames')[0].name + " hours",
              value: this.get('gameOneHours'),
              color:"#673AB7"
          },
          {
              label: this.get('topTenGames')[1].name + " hours",
              value : this.get('gameTwoHours'),
              color : "#4ACAB4"
          },
          {
              label: this.get('topTenGames')[2].name + " hours",
              value : this.get('gameThreeHours'),
              color : "#4CAF50"
          },
          {
              label: this.get('topTenGames')[3].name + " hours",
              value : this.get('gameFourHours'),
              color : "#FF5252"
          },
          {
              label: this.get('topTenGames')[4].name + " hours",
              value : this.get('gameFiveHours'),
              color : "#FF9800"
          },
          {
              label: this.get('topTenGames')[5].name + " hours",
              value : this.get('gameSixHours'),
              color : "#00BCD4"
          },
          {
              label: this.get('topTenGames')[6].name + " hours",
              value : this.get('gameSevenHours'),
              color : "#CDDC39"
          },
          {
              label: this.get('topTenGames')[7].name + " hours",
              value : this.get('gameEightHours'),
              color : "#C2185B"
          },
        ];
      } else if (this.get('topTenGames')[0] && this.get('topTenGames')[1] && this.get('topTenGames')[2] && this.get('topTenGames')[3] && this.get('topTenGames')[4] && this.get('topTenGames')[5] && this.get('topTenGames')[6]) {
        return [
          {
              label: this.get('topTenGames')[0].name + " hours",
              value: this.get('gameOneHours'),
              color:"#673AB7"
          },
          {
              label: this.get('topTenGames')[1].name + " hours",
              value : this.get('gameTwoHours'),
              color : "#4ACAB4"
          },
          {
              label: this.get('topTenGames')[2].name + " hours",
              value : this.get('gameThreeHours'),
              color : "#4CAF50"
          },
          {
              label: this.get('topTenGames')[3].name + " hours",
              value : this.get('gameFourHours'),
              color : "#FF5252"
          },
          {
              label: this.get('topTenGames')[4].name + " hours",
              value : this.get('gameFiveHours'),
              color : "#FF9800"
          },
          {
              label: this.get('topTenGames')[5].name + " hours",
              value : this.get('gameSixHours'),
              color : "#00BCD4"
          },
          {
              label: this.get('topTenGames')[6].name + " hours",
              value : this.get('gameSevenHours'),
              color : "#CDDC39"
          },
        ];
      } else if (this.get('topTenGames')[0] && this.get('topTenGames')[1] && this.get('topTenGames')[2] && this.get('topTenGames')[3] && this.get('topTenGames')[4] && this.get('topTenGames')[5]) {
        return [
          {
              label: this.get('topTenGames')[0].name + " hours",
              value: this.get('gameOneHours'),
              color:"#673AB7"
          },
          {
              label: this.get('topTenGames')[1].name + " hours",
              value : this.get('gameTwoHours'),
              color : "#4ACAB4"
          },
          {
              label: this.get('topTenGames')[2].name + " hours",
              value : this.get('gameThreeHours'),
              color : "#4CAF50"
          },
          {
              label: this.get('topTenGames')[3].name + " hours",
              value : this.get('gameFourHours'),
              color : "#FF5252"
          },
          {
              label: this.get('topTenGames')[4].name + " hours",
              value : this.get('gameFiveHours'),
              color : "#FF9800"
          },
          {
              label: this.get('topTenGames')[5].name + " hours",
              value : this.get('gameSixHours'),
              color : "#00BCD4"
          },
        ];
      } else if (this.get('topTenGames')[0] && this.get('topTenGames')[1] && this.get('topTenGames')[2] && this.get('topTenGames')[3] && this.get('topTenGames')[4]) {
        return [
          {
              label: this.get('topTenGames')[0].name + " hours",
              value: this.get('gameOneHours'),
              color:"#673AB7"
          },
          {
              label: this.get('topTenGames')[1].name + " hours",
              value : this.get('gameTwoHours'),
              color : "#4ACAB4"
          },
          {
              label: this.get('topTenGames')[2].name + " hours",
              value : this.get('gameThreeHours'),
              color : "#4CAF50"
          },
          {
              label: this.get('topTenGames')[3].name + " hours",
              value : this.get('gameFourHours'),
              color : "#FF5252"
          },
          {
              label: this.get('topTenGames')[4].name + " hours",
              value : this.get('gameFiveHours'),
              color : "#FF9800"
          },
        ];
      } else if (this.get('topTenGames')[0] && this.get('topTenGames')[1] && this.get('topTenGames')[2] && this.get('topTenGames')[3]) {
        return [
          {
              label: this.get('topTenGames')[0].name + " hours",
              value: this.get('gameOneHours'),
              color:"#673AB7"
          },
          {
              label: this.get('topTenGames')[1].name + " hours",
              value : this.get('gameTwoHours'),
              color : "#4ACAB4"
          },
          {
              label: this.get('topTenGames')[2].name + " hours",
              value : this.get('gameThreeHours'),
              color : "#4CAF50"
          },
          {
              label: this.get('topTenGames')[3].name + " hours",
              value : this.get('gameFourHours'),
              color : "#FF5252"
          },
        ];
      } else if (this.get('topTenGames')[0] && this.get('topTenGames')[1] && this.get('topTenGames')[2]) {
        return [
          {
              label: this.get('topTenGames')[0].name + " hours",
              value: this.get('gameOneHours'),
              color:"#673AB7"
          },
          {
              label: this.get('topTenGames')[1].name + " hours",
              value : this.get('gameTwoHours'),
              color : "#4ACAB4"
          },
          {
              label: this.get('topTenGames')[2].name + " hours",
              value : this.get('gameThreeHours'),
              color : "#4CAF50"
          },
        ];
      } else if (this.get('topTenGames')[0] && this.get('topTenGames')[1]) {
        return [
          {
              label: this.get('topTenGames')[0].name + " hours",
              value: this.get('gameOneHours'),
              color:"#673AB7"
          },
          {
              label: this.get('topTenGames')[1].name + " hours",
              value : this.get('gameTwoHours'),
              color : "#4ACAB4"
          },
        ];
      } else if (this.get('topTenGames')[0]) {
        return [
          {
              label: this.get('topTenGames')[0].name + " hours",
              value: this.get('gameOneHours'),
              color:"#673AB7"
          },
        ];
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
  })
});
