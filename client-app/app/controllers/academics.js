import Ember from 'ember';

export default Ember.Controller.extend({
	init: function () {
    this._super();
    Ember.run.schedule("afterRender", this, function() {
      $('[data-toggle="tooltip"]').tooltip({
      	html: true,
      	title: "<strong>Estudis primaris</strong>: Certificat d'escolaritat / EGB<br/>" +
      		"<strong>Estudis secundaris</strong>: Batxillerat elemental / graduat escolar / ESO / FP I<br/>" +
      		"<strong>Estudis mitjans</strong>: Batxillerat superior / BUP / COU / FP II / CFGM grau mitjà<br/>" +
      		"<strong>Estudis superiors</strong>: Estudis universitaris / CFGS grau superior"
      });   
    });
  },

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
	filteredMap: false,
	filteredPie: false,
	filteredBars: false,
	showReset: Ember.computed( 'filteredMap', 'filteredPie', 'filteredBars',
		function() {
			const map = this.get('filteredMap'),
						pie = this.get('filteredPie'),
						bars = this.get('filteredBars');

			return (map || pie || bars);
	}),
	reseted: false,
	dataMap: Ember.computed(
		'viewDistricts', 'yearDim', 'districtDimension', 'neighborDimension', 
		'year', 'gender', 'level',
		function() {
			const isDistrict = this.get('viewDistricts');
			const yearDim = this.get('yearDim');
			const districtDim = this.get('districtDimension');
			const neighborDim = this.get('neighborDimension');
			const year = this.get('year');
			const gender = this.get('gender');
			const level = this.get('level');
			let group, data;

			yearDim.filter(year);
			if (isDistrict) {
				group = districtDim.group(function(d) { return d; });
			} else {
				group = neighborDim.group(function(d) { return d; });
			}

			data = group.reduceSum( function(d) {
				let w, m, field;

				if (level === 'Tots') {
					w = d.attributes.women.total;
					m = d.attributes.men.total;
				} else {
					field = getField(level);
					w = d.attributes.women[field];
					m = d.attributes.men[field];
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
		'viewDistricts', 'year', 'yearDim', 'districtDimension', 'neighborDimension', 
		'scope', 'level',
		function() {
			const isDistrict = this.get('viewDistricts');
			const year = this.get('year');
			const yearDim = this.get('yearDim');
			const districtDim = this.get('districtDimension');
			const neighborDim = this.get('neighborDimension');
			const zoneCode = this.get('zoneCode');
			const level = this.get('level');
			let data = Ember.A([]);
			let group, women, men, field;

			yearDim.filter(year);
			
			if (!isDistrict) {
				group = districtDim.group();
			} else {
				group = neighborDim.group();
			}

			women = $.map(group.reduceSum(function(d) { 
					if (level === 'Tots') {
						return d.attributes.women.total; 
					} else {
						field = getField(level);
						return d.attributes.women[field];
					}
				}).all(), 
				function(el) { return el.value; });
			men = $.map(group.reduceSum(function(d) { 
					if (level === 'Tots') {
						return d.attributes.men.total; 
					} else {
						field = getField(level);
						return d.attributes.men[field];
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
		'yearDim', 'neighborDimension', 'gender', 'scope', 'level',
		function() {
			const yearDim = this.get('yearDim');
			const gender = this.get('gender');
			const level = this.get('level');
			let data, w, m, field;

			data = yearDim.group()
							.reduceSum( function(d) { 
								if (level === 'Tots') {
									w = d.attributes.women.total;
									m = d.attributes.men.total;	
								} else {
									field = getField(level);
									w = d.attributes.women[field];
									m = d.attributes.men[field];	
								}
								
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
			this.set('filteredBars', false);
			this.set('filteredPie', false);
			this.toggleProperty('reseted');
			this.set('level', 'Tots');
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

		changeLevel(level) {
			if (level) {
				this.set('level', level);
				this.set('filteredBars', true);
			} else {
				this.set('level', 'Tots');
				this.set('filteredBars', false);
			}
			
		},

	}
});

function getSum(total, num) {
	return total + num;
}

function getField(level) {

	switch (level) {
		case 'Sense estudis': 
			return 'none';
		case 'Estudis primaris':
			return 'primary';
		case 'Estudis secundaris':
			return 'secondary';
		case 'Estudis mitjans':
			return 'average';
		case 'Estudis superiors':
			return 'superior';
	}
}