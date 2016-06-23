import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    appNameSearch() {
      var params = {
        name: this.get('appName')
      };
      this.sendAction('appNameSearch', params);
    }
  }
});
