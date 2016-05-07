import Ember from 'ember';

export default Ember.Controller.extend({
	dataService: Ember.inject.service('data-service'),
	libYearDim: Ember.computed.alias('dataService.libYearDim'),
	libDistrictDimension: Ember.computed.alias('dataService.libDistrictDimension'),
	libNameDimension: Ember.computed.alias('dataService.libNameDimension'),
	year: Ember.computed.alias('dataService.libYear'),
	scope: 'Barcelona',
	zoneCode: null,
	showReset: false,
	reseted: false,
	dataMap: Ember.computed(
		'libYearDim', 'libDistrictDimension', 'year',
		function() {
			const yearDim = this.get('libYearDim');
			const districtDim = this.get('libDistrictDimension');
			const year = this.get('year');
			let group, data;
			
			yearDim.filter(year);
			group = districtDim.group(function(d) { return d; });
			data = group.reduceSum( function(d) { 
				return d.attributes.visits;
			});

			return data.all();
	}),

	yearData: Ember.computed(
		'libYearDim', 'zoneCode', 
		function() {
			const yearDim = this.get('libYearDim');
			let data;

			data = yearDim.group().reduceSum( function(d) { 
				return d.attributes.visits;
			});
			return data.all();
	}),
	
	pieData: Ember.computed(
		'year',  'zoneCode',
		function() {
			const year = this.get('year');
			const yearDim = this.get('libYearDim');
			const nameDim = this.get('libNameDimension');
			const zoneCode = this.get('zoneCode');
			let data, group;

			group = nameDim.group().reduceSum( function(d) {
				return d.attributes.visits;
			});
			
			return group.all().filter(function(d) { return d.value > 0; });
	}),
	actions: {
		changeView() {
			this.set('zoneCode', null);
			this.set('scope', 'Barcelona');
			this.set('showReset', this.get('showReset') || false);
		},

		changeZone(code, name) {			
			const districtDim = this.get('libDistrictDimension');
			if (code) {
				districtDim.filter(+code);
			}
			this.set('scope', name);
			this.set('zoneCode', code);
			this.set('showReset', true);
			
		},

		reset() {
			const districtDim = this.get('libDistrictDimension');
			districtDim.filterAll();
			this.set('scope', 'Barcelona');
			this.set('zoneCode', null);
			this.set('showReset', false);
			this.toggleProperty('reseted');
		},

		changeYear(year) {
			this.set('year', year);
		},

	}
});

function getSum(total, num) {
	return total + num;
}