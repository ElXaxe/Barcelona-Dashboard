import Ember from 'ember';

const { on, isEmpty } = Ember;
const { crossfilter } = window;

export default Ember.Service.extend({

	crossfilter: null,

	__setup: on(
		'init',
		function(){
			this.set('crossfilter', crossfilter());
		}
	),

	initPopulation(population){
		if(isEmpty(this.get('populYearDim'))){
			const crossfilter = this.get('crossfilter');

			crossfilter.add(population);

			this.setProperties({
				populYearDim: crossfilter.dimension( (d) => d.attributes.year),
				districtDimension: crossfilter.dimension( (d) => d.attributes.district),
				neighborDimension: crossfilter.dimension( (d) => +(d.attributes.neighbor).slice(0, (d.attributes.neighbor).indexOf('.')) ),
			});
		}
	},

	populYearDim: null,
	districtDimension: null,
	neighborDimension: null,


	
});

