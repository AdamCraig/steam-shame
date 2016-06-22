import Ember from 'ember';

export function pricing(params) {
  console.log(params[0].metal);
  console.log(params[0].metalprice);
  return (params[0].metal * params[0].metalprice).toFixed(2);
}

export default Ember.Helper.helper(pricing);
