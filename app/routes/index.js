import Ember from 'ember';

export default Ember.Route.extend({
 actions: {
   appIdSearch(params) {
     this.transitionTo('appid-results', params.appid);
   }

   appNameSearch(params) {
     this.transitionTo('appName-results', params.name);
   }
 }

});
