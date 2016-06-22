import Ember from 'ember';

export function minutesConversion(params) {
  var total = params[0];
  var minutes  = total % 60;
  total -= minutes;
  var hours = total / 60;
  return hours + " hrs, " + minutes + " min.";
}

export default Ember.Helper.helper(minutesConversion);
