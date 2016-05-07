import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
	dataService: Ember.inject.service('data-service'),

	model() {
		return Ember.RSVP.hash({
			libraries: ajax({
				url: '/api/v1/libraries',
				type: 'get'
			}),

			district: new Promise((res, rej) => {
			  d3.json('assets/districtes.json', function(err, data) {
			    err ? rej(err) : res(data);
			  });
			}),

		});
	},

	afterModel: function(model, transition) {
		this.get('dataService').initLibraries(model.libraries.data);
	},

	setupController: function(controller, model) {
		this._super(controller, model);
	},

	actions: {
		willTransition(transition) {
			this.controller.send('reset');
		}
	}
	
});
