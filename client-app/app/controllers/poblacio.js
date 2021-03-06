import Ember from 'ember';

export default Ember.Controller.extend({
	dataService: Ember.inject.service('data-service'),
	populYearDim: Ember.computed.alias('dataService.populYearDim'),
	districtDimension: Ember.computed.alias('dataService.districtDimension'),
	neighborDimension: Ember.computed.alias('dataService.neighborDimension'),
	viewDistricts: true,
	paths: Ember.computed('viewDistricts', function() {
		if(this.get('viewDistricts')) {
			return this.get('model.district');
		}
		return this.get('model.neighbor');
	}),
	year:  Ember.computed.alias('dataService.populYear'),
	scope: 'Barcelona',
	zoneCode: null,
	minAge: 0,
	maxAge: 95,
	gender: 'Tots',
	isMax: Ember.computed('maxAge', function() {
		return this.get('maxAge') === 95;
	}),
	filteredMap: false,
	filteredPie: false,
	filteredRange: false,
	showReset: Ember.computed( 'filteredMap', 'filteredPie', 'filteredRange',
		function() {
			const map = this.get('filteredMap'),
						pie = this.get('filteredPie'),
						range = this.get('filteredRange');

			return (map || pie || range);
	}),
	reseted: false,
	dataMap: Ember.computed(
		'viewDistricts', 'populYearDim', 'districtDimension', 'neighborDimension', 'year', 'gender',
		'minAge', 'maxAge',
		function() {
			const isDistrict = this.get('viewDistricts');
			const yearDim = this.get('populYearDim');
			const districtDim = this.get('districtDimension');
			const neighborDim = this.get('neighborDimension');
			const year = this.get('year');
			const gender = this.get('gender');
			const minAge = this.get('minAge'), maxAge = this.get('maxAge');
			let group, data;

			yearDim.filter(year);
			if (isDistrict) {
				group = districtDim.group(function(d) { return d; });
			} else {
				group = neighborDim.group(function(d) { return d; });
			}

			data = group.reduceSum( function(d) {
				let w, m;

				if (minAge === 0 && maxAge === 95) {
					w = d.attributes.womenTotal;
					m = d.attributes.menTotal;
				} else {
					w = d.attributes.womenYears.slice(minAge, maxAge).reduce(getSum);
					m = d.attributes.menYears.slice(minAge, maxAge).reduce(getSum);
				}

				if (gender === 'Dones'){
					return w;
				} else if (gender === 'Homes') {
					return m;
				}
				return w + m;
			});
			
			return data.all();
	}),

	genderData: Ember.computed(
		'viewDistricts', 'year', 'populYearDim', 'districtDimension', 'neighborDimension', 'scope',
		'minAge', 'maxAge',
		function() {
			const isDistrict = this.get('viewDistricts');
			const year = this.get('year');
			const yearDim = this.get('populYearDim');
			const districtDim = this.get('districtDimension');
			const neighborDim = this.get('neighborDimension');
			const zoneCode = this.get('zoneCode');
			const minAge = this.get('minAge'), maxAge = this.get('maxAge');
			let data = Ember.A([]);
			let group, women, men;

			yearDim.filter(year);
			
			if (!isDistrict) {
				group = districtDim.group();
			} else {
				group = neighborDim.group();
			}

			women = $.map(group.reduceSum(function(d) { 
					if ( minAge === 0 && maxAge === 95) {
						return d.attributes.womenTotal; 
					} else {
						return d.attributes.womenYears.slice(minAge, maxAge).reduce(getSum);
					}
				}).all(), 
				function(el) { return el.value; });
			men = $.map(group.reduceSum(function(d) { 
					if ( minAge === 0 && maxAge === 95) {
						return d.attributes.menTotal; 
					} else {
						return d.attributes.menYears.slice(minAge, maxAge).reduce(getSum);
					}
				}).all(), 
				function(el) { return el.value; });

			data.pushObject({
				key: 'Dones',
				value: women.reduce(getSum)
			});

			data.pushObject({
				key: 'Homes',
				value: men.reduce(getSum)
			});
			
			return data;
	}),

	yearData: Ember.computed(
		'populYearDim', 'neighborDimension', 'gender', 'scope', 'minAge', 'maxAge',
		function() {
			const yearDim = this.get('populYearDim');
			const gender = this.get('gender');
			const minAge = this.get('minAge');
			const maxAge = this.get('maxAge');
			let data;

			data = yearDim.group()
							.reduceSum( function(d) { 
								
								const women = d.attributes.womenYears.slice(minAge, maxAge);
								const men = d.attributes.menYears.slice(minAge, maxAge);
								const w = women.reduce(getSum);
								const m = men.reduce(getSum);

								if (gender === 'Dones') {
									return w;
								} else if (gender === 'Homes') {
									return m;
								}
								return w + m;
							});

			return data.all();
	}),
	
	rangeData: Ember.computed(
		'populYearDim', 'year', 'scope', 'gender',
		function() {
			const year = this.get('year');
			const yearDim = this.get('populYearDim');
			const gender = this.get('gender');
			let data = Ember.A([]);
			let aux, old;
			
			yearDim.filter(year);
			aux = yearDim.top(Infinity);

			aux.forEach( (d, i) => {
				
				for( var j = 0; j < d.attributes.womenYears.length;  j++) {
					old = data[j] ? data[j] : 0;
					if (gender === 'Dones') {
						data[j] = d.attributes.womenYears[j] + old;
					} 
					else if ( gender === 'Homes') {
						data[j] = d.attributes.menYears[j] + old;
					}
					else {
						data[j] = d.attributes.womenYears[j] + d.attributes.menYears[j] + old;
					}
				}
			});
			
			return data;
	}),

	actions: {
		changeView() {
			this.set('zoneCode', null);
			this.set('scope', 'Barcelona');
			if (this.get('viewDistricts')) {
				this.set('viewDistricts', false);
				this.get('districtDimension').filterAll();
			} else {
				this.set('viewDistricts', true);
				this.get('neighborDimension').filterAll();
			}
			this.set('filteredMap', false);
		},

		changeZone(code, name) {
			const isDistrict = this.get('viewDistricts');
			const districtDim = this.get('districtDimension');
			const neighborDim = this.get('neighborDimension');
			this.set('scope', name);
			this.set('zoneCode', code);
			this.set('filteredMap', true);
			if (code) {
				if (isDistrict) {
					neighborDim.filterAll();
					districtDim.filter(+code);
				} else {
					districtDim.filterAll();
					neighborDim.filter(+code);
				}
			} else {
				districtDim.filterAll();
				neighborDim.filterAll();
			}
		},

		reset() {
			this.set('scope', 'Barcelona');
			this.set('zoneCode', null);
			if (this.get('viewDistricts')) {
				this.get('districtDimension').filterAll();
			} else {
				this.get('neighborDimension').filterAll();
			}
			this.set('filteredMap', false);
			this.set('filteredRange', false);
			this.set('filteredPie', false);
			this.toggleProperty('reseted');
			this.set('minAge', 0);
			this.set('maxAge', 95);
		},

		changeGender(gender) {
			if(gender) {
				this.set('gender', gender);
				this.set('filteredPie', true);
			} else {
				this.set('gender', 'Tots');
				this.set('filteredPie', false);
			}
			
		},

		changeYear(year) {
			this.set('year', year);
		},

		changeAges(minAge, maxAge) {
			this.set('minAge', d3.round(minAge, 0));
			this.set('maxAge', d3.round(maxAge, 0));
			this.set('filteredRange', true);
		},

	}
});

function getSum(total, num) {
	return total + num;
}