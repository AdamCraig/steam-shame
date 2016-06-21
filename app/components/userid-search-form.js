import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    userIdSearch() {
      var params = {
        userid: this.get('userId'),
      };
      this.sendAction('userIdSearch', params);
    },
  }
});
