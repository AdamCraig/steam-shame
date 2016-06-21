import Ember from 'ember';

export default Ember.Component.extend({
  onlineStatus: Ember.computed('user.personastate', function() {
    var statusNumber = this.get('user.personastate');

    if (statusNumber === 0) {
      return "Offline";
    } else if (statusNumber === 1) {
      return "Online";
    } else if (statusNumber === 2) {
      return "Busy";
    } else if (statusNumber === 3) {
      return "Away";
    } else if (statusNumber === 4) {
      return "Snooze";
    } else if (statusNumber === 5) {
      return "Looking To Trade";
    } else if (statusNumber === 6) {
      return "Looking To Play";
    } else {
      return "Online Status Unavailable";
    }

  }),
});
