import Ember from 'ember';

export default Ember.Component.extend({
	//SVG config
	tagName: 'svg',
	margin: {top: 20, right: 30, bottom: 30, left: 40},
  color: 'steelblue',
  data: null,
 
  didInsertElement: function() {
  	
  	const margin = this.get('margin');
		const w = (this.$().css('width')).slice(0, (this.$().css('width')).indexOf('p'));
		const h = (this.$().css('height')).slice(0, (this.$().css('height')).indexOf('p'));
		const width = w - margin.left - margin.right;
  	const height = h - margin.top - margin.bottom;
		const lineColor = this.get('color'),
					lineData = this.get('data');

		let x = d3.scale.linear()
							.domain([0, 95] )
    					.range([0, width]);

    let	y = d3.scale.linear()
    					.domain(d3.extent(lineData))
    					.range([height, 0]);

    let xAxis = d3.svg.axis()
    					.scale(x)
    					.orient('bottom')
    					.outerTickSize(1)
    					.ticks(20);

    let yAxis = d3.svg.axis()
		    					.scale(y)
		    					.orient("left")
						      .tickSize(1)
						      .tickPadding(10)
						      .tickValues([
						      	y.domain()[0],
						      	y.domain()[1] * 0.25,
						      	y.domain()[1] * 0.5,
						      	y.domain()[1] * 0.75,
						      	y.domain()[1]
						      ])
						      .tickFormat(function(d,i) {
						      	return d3.round(d, 0).toLocaleString();
						      });

		let brush = d3.svg.brush()
			.x(x)
			.extent(d3.extent(lineData))
			.on('brushend', brushended);

    let area = d3.svg.area()
    	.interpolate('monotone')
    	.x(function(d, i) { return x(i); })
    	.y0(height)
    	.y1(function(d) { return y(d); });

    let svg = d3.select('#'+this.get('elementId'));
		svg.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom);

		let container = svg.append('g')
			.attr('class', 'areaChart')
			.attr('transform', 'translate(' + margin.left + ',' + margin.top +')');

		container.append('path')
			.datum(lineData)
			.attr('class', 'area')
			.attr('d', area)
			.attr('fill', lineColor);

		container.append('clippath')
			.attr('class', 'clip')
			.append('rect')
			.attr('width', width)
			.attr('height', height);

		container.append('g')
			.attr('class', 'x axis')
			.attr('transform', 'translate(0,' + height + ')')
			.call(xAxis);

		let gy = container.append('g')
			.attr('class', 'y axis')
			.style('font-size', '0.75em')
			.call(yAxis)
			.selectAll('line')
			.attr('x2', width);

		let gBrush = container.append('g')
			.attr('class', 'brush')
			.style('fill-opacity', 0.125)
			.style('stroke', 'black')
			.style('shape-rendering', 'crispEdges')
			.call(brush);

		gBrush.selectAll('rect').attr('height', height);

		function brushended() {
		  if (!d3.event.sourceEvent) { return; }// only transition after input
		  var extent0 = brush.extent(),
		      extent1 = extent0.map(d3.round);

		  // if empty when rounded, use floor & ceil instead
		  if (extent1[0] >= extent1[1]) {
		    extent1[0] = d3.floor(extent0[0]);
		    extent1[1] = d3.ceil(extent0[1]);
		  }

		  d3.select(this).transition()
		      .call(brush.extent(extent1))
		      .call(brush.event);
		}

  },

  changeChart: Ember.observer('data', function() {
  	const margin = this.get('margin');
		const w = (this.$().css('width')).slice(0, (this.$().css('width')).indexOf('p'));
		const h = (this.$().css('height')).slice(0, (this.$().css('height')).indexOf('p'));
		const width = w - margin.left - margin.right;
  	const height = h - margin.top - margin.bottom;
		const lineColor = this.get('color'),
					lineData = this.get('data');

		let x = d3.scale.linear()
							.domain([0, 95] )
    					.range([0, width]);

		let	y = d3.scale.linear()
    					.domain(d3.extent(lineData))
    					.range([height, 0]);

    let yAxis = d3.svg.axis()
		    					.scale(y)
		    					.orient("left")
						      .tickSize(1)
						      .tickPadding(10)
						      .tickValues([
						      	y.domain()[0],
						      	y.domain()[1] * 0.25,
						      	y.domain()[1] * 0.5,
						      	y.domain()[1] * 0.75,
						      	y.domain()[1]
						      ])
						      .tickFormat(function(d,i) {
						      	return d3.round(d, 0).toLocaleString();
						      });

		let area = d3.svg.area()
    	.interpolate('monotone')
    	.x(function(d, i) { return x(i); })
    	.y0(height)
    	.y1(function(d) { return y(d); });

    let svg = d3.select('#'+this.get('elementId'));

    svg.select('.area')
			.datum(lineData)
			.transition()
			.duration(1000)
			.attr('d', area);

		svg.select('.y.axis')
			.transition()
			.duration(750)
		  .call(yAxis)
			.selectAll('line')
			.attr('x2', width);
  }),

});
