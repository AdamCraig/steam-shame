import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    userIdSearch(params) {
      if (params.userid) {
        this.transitionTo('userid-results', params.userid);
      } else {
        alert("Please enter a valid Steam ID.");
      }

    },
  }
});
