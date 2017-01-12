import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('overview', function() {
    this.route('add');
  });
  this.route('login');
  this.route('mybill');
});

export default Router;
