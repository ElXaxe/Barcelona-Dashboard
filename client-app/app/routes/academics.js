import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
	dataService: Ember.inject.service('data-service'),

	model() {
		return Ember.RSVP.hash({
			academic: ajax({
				url: '/api/v1/academic',
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
		this.get('dataService').initAcademics(model.academic.data);
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
