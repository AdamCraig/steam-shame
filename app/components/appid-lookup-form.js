import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    appIdSearch() {
      var params = {
        appid: this.get('appId'),
      };
      this.sendAction('appIdSearch', params);
    }
  }
});
