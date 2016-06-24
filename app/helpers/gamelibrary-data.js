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
  return Ember.String.htmlSafe(
  "<b class='glyphicon glyphicon-signal'></b>" +
  "<p>You own " + allGamesCount + " games.</p>" +
  "<p><b class='glyphicon glyphicon-time'></b> You have spent a total of " + (totalGameTime/60).toFixed(2) + " hours on Steam (" + (totalGameTime/1440).toFixed(2) +  " days).</p>" +
  "<p><b class='glyphicon glyphicon-heart'></b> Your top game has occupied " + (top1Total/totalGameTime*100).toFixed(2) + "% of your total Steam time.</p>" +
  "<p><b class='glyphicon glyphicon-heart-empty'></b> Your top 3 games have occupied " + (top3Total/totalGameTime*100).toFixed(2) + "% of your total Steam time.</p>" +
  "<p><b class='glyphicon glyphicon-refresh'></b> Your top 10 games have occupied " + (top10Total/totalGameTime*100).toFixed(2) + "% of your total Steam time.</p>" +
  "<p><b class='glyphicon glyphicon-ban-circle'></b> " + unplayedGamesCount + " of  your games have never been played. That's " + (100*unplayedGamesCount/allGamesCount).toFixed(2) + "% of your library.</p>" +
  "<p><p><b class='glyphicon glyphicon-hourglass'></b> Each game that you have played has an average of " + ((totalGameTime/60) /(allGamesCount-unplayedGamesCount)).toFixed(2) + " hours logged.</p>"
  );
}

export default Ember.Helper.helper(gamelibraryData);
