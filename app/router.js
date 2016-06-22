import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('appid-results', { path: '/appid-results/:appid' });
  this.route('appid-search');
  this.route('userid-search');
  this.route('userid-results', { path: '/userid-results/:userid' });
  this.route('gamename-search');
  this.route('gamename-results');
});

export default Router;
