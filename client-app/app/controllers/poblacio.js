import Ember from 'ember';

export default Ember.Controller.extend({
	dataService: Ember.inject.service('data-service'),
	populYearDim: Ember.computed.alias('dataService.populYearDim'),
	districtDimension: Ember.computed.alias('dataService.districtDimension'),
	neighborDimension: Ember.computed.alias('dataService.neighborDimension'),
	viewDistricts: true,
	paths: Ember.computed('viewDistricts', function(d) {
		if(this.get('viewDistricts')) {
			return this.get('model.district');
		}
		return this.get('model.neighbor');
	}),
	year: 2015,
	scope: 'Barcelona',
	minAge: 0,
	maxAge: 95,
	gender: 'Tots',
	isMax: Ember.computed('maxAge', function() {
		return this.get('maxAge') === 95;
	}),
	resetMap: false,
	selectedZone: false,
	dataMap: Ember.computed(
		'viewDistricts', 'populYearDim', 'districtDimension', 'neighborDimension', 'year', 'gender',
		function() {
			const isDistrict = this.get('viewDistricts');
			const yearDim = this.get('populYearDim');
			const districtDim = this.get('districtDimension');
			const neighborDim = this.get('neighborDimension');
			const year = this.get('year');
			const gender = this.get('gender');
			let group, data;

			yearDim.filter(year);
			if (isDistrict) {
				group = districtDim.group(function(d) { return d; });
			} else {
				group = neighborDim.group(function(d) { return d; });
			}
			data = group.reduceSum( function(d) {
				if (gender === 'Dones'){
					return d.attributes.womenTotal;
				} else if (gender === 'Homes') {
					return d.attributes.menTotal;
				}
				return d.attributes.womenTotal + d.attributes.menTotal;
			});
			
			return data.all();
	}),

	genderData: Ember.computed(
		'viewDistricts', 'year', 'populYearDim', 'districtDimension', 'neighborDimension',
		function() {
			const isDistrict = this.get('viewDistricts');
			const year = this.get('year');
			const yearDim = this.get('populYearDim');
			const districtDim = this.get('districtDimension');
			const neighborDim = this.get('neighborDimension');
			let data = Ember.A([]);
			let group, women, men;

			yearDim.filter(year);

			group = districtDim.group(function(d) { return d; });

			women = $.map(group.reduceSum(function(d) { return d.attributes.womenTotal; }).all(), 
				function(el) { return el.value; });
			men = $.map(group.reduceSum(function(d) { return d.attributes.menTotal; }).all(), 
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
		'populYearDim', 'neighborDimension', 'gender',
		function() {
			const yearDim = this.get('populYearDim');
			const gender = this.get('gender');
			let data;

			data = yearDim.group()
							.reduceSum( function(d) { 
								const w = d.attributes.womenYears.reduce(getSum);
								const m = d.attributes.menYears.reduce(getSum);
								
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
		'populYearDim', 'year', 'scope', 'minAge', 'maxAge', 'gender',
		function() {
			const year = this.get('year');
			const yearDim = this.get('populYearDim');
			const minAge = this.get('minAge');
			const maxAge = this.get('maxAge');
			const gender = this.get('gender');
			let data = Ember.A([]);
			let aux, old;
			
			yearDim.filter(year);
			aux = yearDim.top(Infinity);

			aux.forEach( (d, i) => {
				for( var j = minAge; j < maxAge + 1;  j++) {
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

			if (this.get('viewDistricts')) {
				this.set('viewDistricts', false);
			} else {
				this.set('viewDistricts', true);
			}
		},

		changeZone(zone) {
			debugger;
			this.set('selectedZone', true);
		},

		reset() {
			this.toggleProperty('resetMap');
			this.set('scope', 'Barcelona');
			this.set('selectedZone', false);
		},

		changeGender(gender) {
			if(gender) {
				this.set('gender', gender);
			} else {
				this.set('gender', 'Tots');
			}
		},

	}
});

function getSum(total, num) {
	return total + num;
}