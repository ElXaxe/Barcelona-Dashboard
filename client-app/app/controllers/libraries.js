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
			let group;

			yearDim.filter(year);
			group = districtDim.group(function(d) { return d; });
			
			return group.all();
	}),

	yearData: Ember.computed(
		'libYearDim', 'zoneCode', 
		function() {
			const yearDim = this.get('libYearDim');

			return yearDim.group().all();
	}),
	
	libraries: Ember.computed('zoneCode', 'year', function() {
		const nameDim = this.get('libNameDimension');
		const districtDim = this.get('libDistrictDimension');
		const zoneCode = this.get('zoneCode');
		let data = null;

		if (zoneCode) {
			data = nameDim.group().all().filter( function(d) { return d.value === 1;});
		}
		return data;
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


