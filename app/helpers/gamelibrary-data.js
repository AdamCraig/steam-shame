import Ember from 'ember';

export function gamelibraryData(params) {
  var allGamesList = params[0];

  var allGamesCount = allGamesList.length;
  var unplayedGamesCount = 0;
  var totalGameTime = 0;
  var top10Total = 0;
  var top3Total = 0;
  var top1Total = 0;

  for (var i = 0; i < allGamesList.length; i++) {
    if (i < 10) {
      if (i < 3) {
        if (i < 1) {
          top1Total += allGamesList[i].playtime_forever;
        }
        top3Total += allGamesList[i].playtime_forever;
      }
      top10Total += allGamesList[i].playtime_forever;
    }
    if (allGamesList[i].playtime_forever === 0) {
      unplayedGamesCount++;
    } else {
      totalGameTime += allGamesList[i].playtime_forever;
    }
  }
  return Ember.String.htmlSafe('<p>you have ' + unplayedGamesCount +' unplayed games out of ' + allGamesCount + ". That's " + (100*unplayedGamesCount/allGamesCount).toFixed(2) + '% of your games.</p>' +
  "<p>You have spend a total of " + (totalGameTime/60).toFixed(2) + " hours on steam (" + (totalGameTime/1440).toFixed(2) +  " days)</p>" +
  '<p>fuck' + '</p>');
}

export default Ember.Helper.helper(gamelibraryData);
