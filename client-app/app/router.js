import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/' });
  this.route('not-found');
  this.route('not-found', { path: '/*path' });
  this.route('poblacio');
  this.route('informacio');
  this.route('libraries');
  this.route('libraries-visits');
  this.route('libraries-loans');
  this.route('academics');
  this.route('visitsVsLoans');
  this.route('populationVsLibraries');
  this.route('populationVsVisits');
});

export default Router;
