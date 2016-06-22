import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    gameSearch() {
      var params = {
        game: this.get('game'),
      };
      this.sendAction('gameSearch', params);
    }
  }
});
