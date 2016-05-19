import Ember from 'ember';

export default Ember.Controller.extend({
	dataService: Ember.inject.service('data-service'),
	populYearDim: Ember.computed.alias('dataService.populYearDim'),
	districtDimension: Ember.computed.alias('dataService.districtDimension'),
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
			const libYearDim = this.get('libYearDim'),
						populYearDim = this.get('populYearDim');
			const libDistrictDim = this.get('libDistrictDimension'),
						populDistrictDim = this.get('districtDimension');
			const year = this.get('year');
			let libGroup, populGroup, libData, populData;
			let data = Ember.A([]);

			libYearDim.filter(year);
			populYearDim.filter(year);

			libGroup = libDistrictDim.group(function(d) { return d; });
			populGroup = populDistrictDim.group(function(d) { return d; });

			populData = populGroup.reduceSum( function(d) {
				return d.attributes.womenTotal + d.attributes.menTotal;
			});
			
			libData = libGroup.reduceSum( function(d) { 
				return d.attributes.visits;
			});

			libData.all().forEach ( function (d, i) {
				data.pushObject({
					key: d.key,
					value: d3.round( d.value / populData.all()[i].value, 1)
				});
			});

			return data;
	}),

	yearData: Ember.computed(
		'libYearDim', 'zoneCode', 
		function() {
			const data = Ember.A([]);
			const libYearDim = this.get('libYearDim');
			const populYearDim = this.get('populYearDim');
			const populData = populYearDim.group()
							.reduceSum( function(d) { 
								return d.attributes.womenTotal + d.attributes.menTotal;
							});
			const libraries = libYearDim.group().reduceSum( function(d) {
				return d.attributes.visits;
			});

			libraries.all().forEach( (library) => {
				let population = populData.all().find( (popul, index) => {
					return popul.key === library.key;
				});
				
				data.pushObject({
					key: library.key,
					value: d3.round( library.value / population.value, 1)
				});	
			});

			return data;
	}),
	
	libraries: Ember.computed('zoneCode', 'year', function() {
		const districtDim = this.get('libDistrictDimension');
		const zoneCode = this.get('zoneCode');
		const nameDim = this.get('libNameDimension');
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
			const libDistrictDim = this.get('libDistrictDimension');
			const populDistrictDim = this.get('districtDimension');

			if (code) {
				libDistrictDim.filter(+code);
				populDistrictDim.filter(+code);
			}
			this.set('scope', name);
			this.set('zoneCode', code);
			this.set('showReset', true);
			
		},

		reset() {
			this.get('libDistrictDimension').filterAll();
			this.get('districtDimension').filterAll()
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

