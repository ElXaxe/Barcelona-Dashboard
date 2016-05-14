import Ember from 'ember';

const { on, isEmpty } = Ember;
const { crossfilter } = window;

export default Ember.Service.extend({

	populationCF: null,
	librariesCF: null,

	__setup: on(
		'init',
		function(){
			this.set('populationCF', crossfilter());
			this.set('librariesCF', crossfilter());
		}
	),

	initPopulation(population) {
		if( isEmpty(this.get('populYearDim')) ) {
			const crossfilter = this.get('populationCF');
			crossfilter.add(population);

			const populYearDim = crossfilter.dimension( (d) => d.attributes.year);
			const years = populYearDim.group().all();

			this.setProperties({
				populYearDim: populYearDim,
				districtDimension: crossfilter.dimension( (d) => d.attributes.district),
				neighborDimension: crossfilter.dimension( (d) => +(d.attributes.neighbor).slice(0, (d.attributes.neighbor).indexOf('.')) ),
				populYear: years[years.length - 1].key,
			});
		} else {
			
		}
	},
	populYearDim: null,
	districtDimension: null,
	neighborDimension: null,
	populYear: null,

	initLibraries(libraries) {
		if( isEmpty(this.get('libYearDim')) ) {
			const crossfilter = this.get('librariesCF');
			crossfilter.add(libraries);

			const libYearDim = crossfilter.dimension( (d) => d.attributes.year);
			const years = libYearDim.group().all();

			this.setProperties({
				libYearDim: libYearDim,
				libDistrictDimension: crossfilter.dimension( (d) => d.attributes.district),
				libNameDimension: crossfilter.dimension( (d) => d.attributes.libraryName),
				libYear: years[years.length - 1].key	
			});
		}
	},
	libYearDim: null,
	libDistrictDimension: null,
	libNameDimension: null,
	libYear: null
});

