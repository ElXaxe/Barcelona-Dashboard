import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
	dataService: Ember.inject.service('data-service'),

	model() {
		return Ember.RSVP.hash({
			population: ajax({
				url: '/api/v1/population',
				type: 'get'
			}),

			district: new Promise((res, rej) => {
			  d3.json('assets/districtes.json', function(err, data) {
			    err ? rej(err) : res(data);
			  });
			}),

			neighbor: new Promise((res, rej) => {
			  d3.json('assets/barris.json', function(err, data) {
			    err ? rej(err) : res(data);
			  });
			})
		});
	},

	afterModel: function(model, transition) {
		this.get('dataService').initPopulation(model.population.data);
	},

	setupController: function(controller, model) {
		this._super(controller, model);
	},

});
