import Ember from 'ember';

export default Ember.Component.extend({
	// SVG Config
	tagName: 'svg',
	svg: null,
	margin: {top: 40, right: 20, bottom: 40, left: 40},
	reseted: false,

	// Barcelona Lat and Lng
	latitude: '41.39506389999999',
	longitude: '2.1534034999999494',

	// Map config
	districtView: true,
	mapPaths: null,
	mapData: null,
	zoneCode: null,
	iniColor: '#C1D1FF',
	endColor: '#000050',
	units: 'u.',
	colorScale: Ember.computed('iniColor', 'endColor', function(){
		const first = this.get('iniColor'),
					last = this.get('endColor');

		const color = d3.scale.linear()
										.range([first, last]);

		return color;
	}),
	tip: d3.select('body').append('div').attr('class', 'map-tooltip').style('opacity', 0),

	didInsertElement: function() {
		const _this = this;
		const w = (this.$().css('width')).slice(0, (this.$().css('width')).indexOf('p'));
		const h = (this.$().css('height')).slice(0, (this.$().css('height')).indexOf('p'));
		const margin = this.get('margin');
		const width = w - margin.left - margin.right;
  	const height = h - margin.top - margin.bottom;
		
		const minSize = Math.min(width, height);
		const lat = this.get('latitude');
		const lng = this.get('longitude');
		const districtView = this.get('districtView');
		
		const mapData = this.get('mapData');
		const customMap = this.get('mapPaths');
		const colorScale = this.get('colorScale');
		const tooltip = this.get('tip');
		const units = this.get('units');
		let svg = d3.select('#'+this.get('elementId'));
		
		svg.attr('width', width).attr('height', height);
		
		let projection = d3.geo.mercator()
							.center([lng, lat])
							.scale(minSize * 290)
							.translate([width / 1.75, height / 2]);
		
		let path = d3.geo.path().projection(projection);
		let objects;
			
		if (districtView) {
			objects = customMap.objects.districtes_geo;						
		} else {
			objects = customMap.objects.barris_geo;
		}

		colorScale.domain(d3.extent($.map(mapData, function(el) { return el.value; })));
		
		svg.selectAll('.zone')
			.data(topojson.feature(customMap, objects).features)
			.enter()
			.append('path')
			.attr('d', path)
			.style('cursor', 'pointer')
			.attr('stroke-width', 1)
			.attr('stroke', 'black')
			.attr('fill', function(d) { 
				return colorScale(mapData[d.properties.codi - 1	].value); 
			})
			.on('click', function(d ,i) {
				let zoneName;
				if (districtView) {
					zoneName = d.properties.districte;
				} else {
					zoneName = d.properties.barri;
				}

				_this.sendAction('changeZone', d.properties.codi, zoneName);
			})					
			.on('mouseover', function(d) {
				var property = districtView ? 'districte' : 'barri' ;
			
				d3.select(this)
        	.transition()
        	.attr("fill", 'orange'); 

				tooltip.transition()
					 .duration(350)
					 .style('opacity', 0.9);

				tooltip.html('<h5>' + d.properties[property] + '</h5><p>' +
					 	mapData[d.properties.codi - 1].value.toLocaleString() + ' ' + units + '</p>')
					 .style("left", (d3.event.pageX) + "px")
           .style("top", (d3.event.pageY - 50) + "px");  
			})
			.on('mouseout', function(d) {
				d3.select(this)
        	.transition()
        	.attr("fill", function(d) { 
						return colorScale(mapData[d.properties.codi - 1	].value);
					});

				tooltip.transition()
					.duration(500)
					.style('opacity', 0);
			});
			
			// Map color scale
			let colorDomain = [
				colorScale.domain()[0],
				colorScale.domain()[1] * 0.25,
				colorScale.domain()[1] * 0.5,
				colorScale.domain()[1] * 0.75,
				colorScale.domain()[1]
			];

			let legend = svg.selectAll('g.legend')
					.data(colorDomain)
					.enter()
					.append('g')
					.attr('class', 'legend');

			legend.append('rect')
					.attr('x', function(d, i) {
						return (5 + (i * 20) + 40);
					})
					.attr('y', height)
					.attr('width', 20)
					.attr('height', 20)
					.style('fill', function(d) { return colorScale(d); });

			legend.append('text')
				.attr('class', function(d,i) {
					if (i === 0) { return 'min';}
					if (i === colorDomain.length -1) { return 'max'; }
				})
				.attr('x', function(d, i) {
						return (5 + (i * 20) + 40);
				})
				.attr('y', height - 11)
				.text( function(d, i) {
					if (i === 0 || i === colorDomain.length - 1) {
						return d;
					}
				})
				.style('font-size', '10px')
				.style('text-align', function(d, i) {
					if (i === 0) {
						return 'left';
					}
					if (i === colorDomain.length - 1) {
						return 'right';
					}
				});
	},

	changeMap: Ember.observer('districtView', 'mapData', function() {
		const _this = this;
		const w = (this.$().css('width')).slice(0, (this.$().css('width')).indexOf('p'));
		const h = (this.$().css('height')).slice(0, (this.$().css('height')).indexOf('p'));
		const width = w - this.get('margin.left') - this.get('margin.right');
  	const height = h - this.get('margin.top') - this.get('margin.bottom');
		const zoneCode = this.get('zoneCode');
		const minSize = Math.min(width, height);
		const lat = this.get('latitude');
		const lng = this.get('longitude');
		const districtView = this.get('districtView');
		const mapData = this.get('mapData');
		const customMap = this.get('mapPaths');
		const colorScale = this.get('colorScale');
		const tooltip = this.get('tip');
		let svg = d3.select('#'+this.get('elementId'));
		
		svg.selectAll('path').remove();
		
		let projection = d3.geo.mercator()
							.center([lng, lat])
							.scale(minSize * 290)
							.translate([width / 1.75, height / 2]);
		
		let path = d3.geo.path().projection(projection);
		let objects;
			
		if (districtView) {
			objects = customMap.objects.districtes_geo;						
		} else {
			objects = customMap.objects.barris_geo;
		}
		
		colorScale.domain( d3.extent($.map( mapData, function(el) { return el.value; }) ) );

		svg.selectAll('.zone')
			.data(topojson.feature(customMap, objects).features)
			.enter()
			.append('path')
			.attr('d', path)
			.attr('stroke-width', 1)
			.attr('stroke', 'black')
			.attr('fill', function(d) { 
				return colorScale(mapData[d.properties.codi - 1].value); 
			})
			.classed('_selected_', function(d) {
				return d.properties.codi === zoneCode;
			})
			.style('cursor', 'pointer')
			.on('click', function(d ,i) {
				let index = i;
				let zoneName;
				if (districtView) {
					zoneName = d.properties.districte;
				} else {
					zoneName = d.properties.barri;
				}

				_this.sendAction('changeZone', d.properties.codi, zoneName);
			})					
			.on('mouseover', function(d) {
				var property = districtView ? 'districte' : 'barri' ;
			
				d3.select(this)
        	.transition()
        	.attr("fill", 'orange'); 

				tooltip.transition()
					 .duration(350)
					 .style('opacity', 0.9);

				tooltip.html('<h5>' + d.properties[property] + '</h5><p>' + mapData[d.properties.codi - 1].value.toLocaleString() +'</p>')
					 .style("left", (d3.event.pageX) + "px")
           .style("top", (d3.event.pageY - 50) + "px");  
			})
			.on('mouseout', function(d) {
				d3.select(this)
        	.transition()
        	.attr("fill", function(d) {
						return colorScale(mapData[d.properties.codi - 1	].value);
					});

				tooltip.transition()
					.duration(500)
					.style('opacity', 0);
			})
			;

			let colorDomain = [
				colorScale.domain()[0],
				colorScale.domain()[1] * 0.25,
				colorScale.domain()[1] * 0.5,
				colorScale.domain()[1] * 0.75,
				colorScale.domain()[1]
			];
			
			let legend = svg.selectAll('g.legend').data(colorDomain);

			legend.select('text.min')
				.transition()
				.text( colorDomain[0]);
			
			legend.select('text.max')
				.transition()
				.text( colorDomain[4]);

			svg.transition().attr('width', width).attr('height', height);

	}),

	// resetMap: Ember.observer('reseted', function() {
	// 	let svg = d3.select('#'+this.get('elementId'));
	// 	const colorScale = this.get('colorScale');

	// 	svg.selectAll('path')
	// 		.attr('fill', function(d) { 
	// 			return colorScale(mapData[d.properties.codi - 1	].value); 
	// 		});
	// }),

	selectZone: Ember.observer('zoneCode', function() {
		const svg = d3.select('#'+this.get('elementId'));
		const colorScale = this.get('colorScale');
		const zoneCode = this.get('zoneCode');
		const mapData = this.get('mapData');

		svg.selectAll('path')
			.attr('class', function(d) { 
				if ( d.properties.codi === zoneCode) {
					return '_selected_';
				}
			});
	}),


});

