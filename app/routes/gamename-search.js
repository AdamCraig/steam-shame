import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    appNameSearch(params) {
      this.transitionTo('gamename-results', params.name);
    }
  }
});
