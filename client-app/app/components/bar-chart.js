import Ember from 'ember';

export default Ember.Component.extend({
	//SVG config
	tagName: 'svg',
	margin: {top: 20, right: 30, bottom: 30, left: 40},
  color: 'lightgrey',
  currentSelection: null, 
  data: null,
  tip: d3.select('body').append('div').attr('class', 'map-tooltip').style('opacity', 0),
  units: 'u.',
  reset: false,

  didInsertElement: function() {
  	const margin = this.get('margin');
		const w = (this.$().css('width')).slice(0, (this.$().css('width')).indexOf('p'));
		const h = (this.$().css('height')).slice(0, (this.$().css('height')).indexOf('p'));
		const width = w - margin.left - margin.right;
  	const height = h - margin.top - margin.bottom;
  	const selection = this.get('currentSelection');
    const tooltip = this.get('tip');
    const units = this.get('units');
		const color = this.get('color'),
					data = this.get('data');

		let x = d3.scale.ordinal()
              .domain( data.map(function(d) {return d.key;}) )
              .rangeRoundBands([0, width], 0.1);

    let y = d3.scale.linear()
              .domain([0, d3.max(data, function(d) { return d.value; })])
              .range([height, 0]);

    let xAxis = d3.svg.axis()
    							.scale(x)
    							.orient("bottom")
    							.outerTickSize(1);

    let yd = y.domain();
    let yAxis = d3.svg.axis()
		    					.scale(y)
		    					.orient("left")
		    					.ticks(5)
		    					.outerTickSize(1);    

		let svg = d3.select('#'+this.get('elementId'));
		svg.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom);

		let container = svg.append("g")
											.classed("bar-group", true)
											.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
											;
    
    let barWidth = x.rangeBand();
                      
    container.append("g")
    	.selectAll('.bar')
    	.data(data)
    	.enter()
    	.append('rect')
    	.attr('class', 'bar _selected_')
    	.attr('x', function(d) { return x(d.key); })
    	.attr('y', function(d) { return y(d.value); })
    	.attr('width', barWidth)
    	.attr('height', function(d) { return height - y(d.value); })
    	.attr('fill', color)
    	.style('cursor', 'pointer')
      .on('click', (d,i) => {
        let index = i;
        svg.selectAll('.bar')
          .classed('_selected_', function(d, i) {
            return i === index;
          });
        this.sendAction('setLevel', d.key);
      })
      .on('mouseover', function(d) {

        tooltip.transition()
           .duration(350)
           .style('opacity', 0.9);

        tooltip.html('<h5>' + d.value.toLocaleString() + ' <small>' + units + '</small></h5>')
           .style("left", (d3.event.pageX) + "px")
           .style("top", (d3.event.pageY - 50) + "px");  
      })
      .on('mouseout', function(d) {

        tooltip.transition()
          .duration(500)
          .style('opacity', 0);
      });

    container.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .attr('stroke-width', '1')
      .call(xAxis);

    container.append('g')
    	.attr('class', 'y axis')
      .style('font-size', '0.75em')
    	.call(yAxis);

  },

  changeChart: Ember.observer('data', function() {
    
    const margin = this.get('margin');
    const w = (this.$().css('width')).slice(0, (this.$().css('width')).indexOf('p'));
    const h = (this.$().css('height')).slice(0, (this.$().css('height')).indexOf('p'));
    const width = w - margin.left - margin.right;
    const height = h - margin.top - margin.bottom;
    const selection = this.get('currentSelection');
    const	data = this.get('data');

    let x = d3.scale.ordinal()
              .domain( data.map(function(d) {return d.key;}) )
              .rangeRoundBands([0, width], 0.1);

    let y = d3.scale.linear()
              .domain([0, d3.max(data, function(d) { return d.value; })])
              .range([height, 0]);

    let yd = y.domain();
    let yAxis = d3.svg.axis()
                  .scale(y)
                  .orient("left")
                  .ticks(5)
                  .outerTickSize(1);

    let svg = d3.select('#'+this.get('elementId'));

    svg.selectAll('.bar')
        .data(data)
        .transition()
        .ease('bounce')
        .duration(1100)
        .attr('y', function(d) { return y(d.value); })
        .attr('height', function(d) { return height - y(d.value); });

    svg.select('.y.axis')
       .transition()
       .duration(750)
       .call(yAxis);

  }),

  resetPie: Ember.observer('reset', function(){
		const svg = d3.select('#'+this.get('elementId'));

		svg.selectAll('.bar').classed('_selected_', true);
		this.sendAction('setLevel', null);

	}),

});
