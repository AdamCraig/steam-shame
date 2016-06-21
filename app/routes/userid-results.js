import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var userURL = 'http://localhost:4000/steam/user/' + params.userid + '/profile';
    var recentGamesURL = 'http://localhost:4000/steam/user/' + params.userid + '/profile/two-weeks-data';

    return Ember.RSVP.hash({
      user: Ember.$.getJSON(userURL).then(function(responseJSON) {
        return responseJSON.response.players[0];
      }),
      recentGames: Ember.$.getJSON(recentGamesURL).then(function(responseJSON) {
        console.log(responseJSON);
        return responseJSON.response.games;
      }),
    });
  }

  content: [
	{
		"label": "Equity",
		"value": 12935781.176999997
	},
	{
		"label": "Real Assets",
		"value": 10475849.276172025
	},
	{
		"label": "Fixed Income",
		"value": 8231078.16438347
	},
	{
		"label": "Cash & Cash Equivalent",
		"value": 5403418.115000006
	},
	{
		"label": "Hedge Fund",
		"value": 1621341.246006786
	},
	{
		"label": "Private Equity",
		"value": 1574677.59
	}
  ],
});
