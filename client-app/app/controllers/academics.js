import Ember from 'ember';

export default Ember.Controller.extend({
	dataService: Ember.inject.service('data-service'),
	yearDim: Ember.computed.alias('dataService.acadYearDim'),
	districtDimension: Ember.computed.alias('dataService.acadDistrictDimension'),
	neighborDimension: Ember.computed.alias('dataService.acadNeighborDimension'),
	viewDistricts: true,
	paths: Ember.computed('viewDistricts', function() {
		if(this.get('viewDistricts')) {
			return this.get('model.district');
		}
		return this.get('model.neighbor');
	}),
	year:  Ember.computed.alias('dataService.acadYear'),
	scope: 'Barcelona',
	zoneCode: null,
	level: 'Tots',
	gender: 'Tots',
	showReset: false,
	reseted: false,
	dataMap: Ember.computed(
		'viewDistricts', 'yearDim', 'districtDimension', 'neighborDimension', 
		'year', 'gender', //'minAge', 'maxAge',
		function() {
			const isDistrict = this.get('viewDistricts');
			const yearDim = this.get('yearDim');
			const districtDim = this.get('districtDimension');
			const neighborDim = this.get('neighborDimension');
			const year = this.get('year');
			const gender = this.get('gender');
			//const minAge = this.get('minAge'), maxAge = this.get('maxAge');
			let group, data;

			yearDim.filter(year);
			if (isDistrict) {
				group = districtDim.group(function(d) { return d; });
			} else {
				group = neighborDim.group(function(d) { return d; });
			}

			data = group.reduceSum( function(d) {
				let w, m;

				// if (minAge === 0 && maxAge === 95) {
					w = d.attributes.women.total;
					m = d.attributes.men.total;
				// } else {
				// 	w = d.attributes.womenYears.slice(minAge, maxAge + 1).reduce(getSum);
				// 	m = d.attributes.menYears.slice(minAge, maxAge + 1).reduce(getSum);
				// }

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
		'viewDistricts', 'year', 'yearDim', 'districtDimension', 'neighborDimension', 'scope',
		// 'minAge', 'maxAge',
		function() {
			const isDistrict = this.get('viewDistricts');
			const year = this.get('year');
			const yearDim = this.get('yearDim');
			const districtDim = this.get('districtDimension');
			const neighborDim = this.get('neighborDimension');
			const zoneCode = this.get('zoneCode');
			// const minAge = this.get('minAge'), maxAge = this.get('maxAge');
			let data = Ember.A([]);
			let group, women, men;

			yearDim.filter(year);
			
			if (!isDistrict) {
				group = districtDim.group();
			} else {
				group = neighborDim.group();
			}

			women = $.map(group.reduceSum(function(d) { 
					// if ( minAge === 0 && maxAge === 95) {
						return d.attributes.women.total; 
					// } else {
					// 	return d.attributes.womenYears.slice(minAge, maxAge + 1).reduce(getSum);
					// }
				}).all(), 
				function(el) { return el.value; });
			men = $.map(group.reduceSum(function(d) { 
					// if ( minAge === 0 && maxAge === 95) {
						return d.attributes.men.total; 
					// } else {
					// 	return d.attributes.menYears.slice(minAge, maxAge + 1).reduce(getSum);
					// }
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
		'yearDim', 'neighborDimension', 'gender', 'scope', //'minAge', 'maxAge',
		function() {
			const yearDim = this.get('yearDim');
			const gender = this.get('gender');
			//const minAge = this.get('minAge');
			//const maxAge = this.get('maxAge');
			let data;

			data = yearDim.group()
							.reduceSum( function(d) { 
								// const women = d.attributes.womenYears.slice(minAge, maxAge + 1);
								// const men = d.attributes.menYears.slice(minAge, maxAge + 1);
								const w = d.attributes.women.total;
								const m = d.attributes.men.total;

								if (gender === 'Dones') {
									return w;
								} else if (gender === 'Homes') {
									return m;
								}
								return w + m;
							});

			return data.all();
	}),
	
	barData: Ember.computed(
		'yearDim', 'year', 'scope', 'gender', 
		function() {
			const year = this.get('year');
			const yearDim = this.get('yearDim');
			const gender = this.get('gender');
			let data = Ember.A([]);
			let none = 0, 
					primary = 0, 
					secondary = 0, 
					average = 0, 
					superior = 0;
			let aux;
			
			yearDim.filter(year);
			aux = yearDim.top(Infinity);
			aux.forEach( (d, i) => {
				if (gender === 'Dones') {
					none += d.attributes.women.none;
					primary += d.attributes.women.primary;
					secondary +=  d.attributes.women.secondary;
					average += d.attributes.women.average;
					superior += d.attributes.women.superior;
				} else if (gender === 'Homes') {
					none += d.attributes.men.none;
					primary += d.attributes.men.primary;
					secondary += d.attributes.men.secondary;
					average += d.attributes.men.average;
					superior += d.attributes.men.superior;
				} else {
					none += d.attributes.women.none + d.attributes.men.none;
					primary += d.attributes.women.primary + d.attributes.men.primary;
					secondary += d.attributes.women.secondary + d.attributes.men.secondary;
					average += d.attributes.women.average + d.attributes.men.average;
					superior += d.attributes.women.superior + d.attributes.men.superior;
				}
				
			});

			data.pushObject({key:	'Sense estudis', value: none});
			data.pushObject({key: 'Estudis primaris', value: primary});
			data.pushObject({key:	'Estudis secundaris', value: secondary});
			data.pushObject({key:	'Estudis mitjans', value: average});
			data.pushObject({key:	'Estudis superiors', value: superior});
			
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
			this.set('showReset', this.get('showReset') || false);
		},

		changeZone(code, name) {
			const isDistrict = this.get('viewDistricts');
			const districtDim = this.get('districtDimension');
			const neighborDim = this.get('neighborDimension');
			this.set('scope', name);
			this.set('zoneCode', code);
			this.set('showReset', true);
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
			this.set('showReset', false);
			this.toggleProperty('reseted');
			this.set('level', 'Tots');
		},

		changeGender(gender) {
			if(gender) {
				this.set('gender', gender);
				this.set('showReset', true);
			} else {
				this.set('gender', 'Tots');
				this.set('showReset', this.get('showReset') || false);
			}
			
		},

		changeYear(year) {
			this.set('year', year);
		},

		changeLevel(level) {
			this.set('level', level);
			this.set('showReset', true);
		},

	}
});

function getSum(total, num) {
	return total + num;
}