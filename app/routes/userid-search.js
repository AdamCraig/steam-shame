import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    userIdSearch(params) {
      this.transitionTo('userid-results', params.userid);
    },
  }
});
