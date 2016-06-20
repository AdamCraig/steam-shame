import Ember from 'ember';

export default Ember.Route.extend({
 actions: {
   appIdSearch(params) {
     this.transitionTo('appid-results', params.appid);
   }
 }

});
