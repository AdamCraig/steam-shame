import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  timeCreated: Ember.computed('user.timecreated', function() {
    var dateProfileCreated = this.get('user.timecreated');
    return moment.unix(dateProfileCreated).format('LL');
  }),
});
