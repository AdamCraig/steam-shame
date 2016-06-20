import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('appid-results', { path: '/appid-results/:appid'});
});

export default Router;
