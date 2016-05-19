import Ember from 'ember';

export default Ember.Component.extend({
	//SVG config
	tagName: 'svg',
	margin: {top: 20, right: 30, bottom: 30, left: 40},
  color: 'steelblue',
  data:null,
  currentYear: null,
  tip: d3.select('body').append('div').attr('class', 'map-tooltip').style('opacity', 0),
  units: 'u.',
  decimals: 0,

  didInsertElement: function() {
  	const margin = this.get('margin');
		const w = (this.$().css('width')).slice(0, (this.$().css('width')).indexOf('p'));
		const h = (this.$().css('height')).slice(0, (this.$().css('height')).indexOf('p'));
		const width = w - margin.left - margin.right;
  	const height = h - margin.top - margin.bottom;
		const currentYear = this.get('currentYear');
    const tooltip = this.get('tip');
    const units = this.get('units');
    const decimals = this.get('decimals');
		const lineColor = this.get('color'),
					lineData = this.get('data');
		
		let years = $.map(lineData, function(el) { return el.key; }),
				values = $.map(lineData, function(el) { return el.value; });

		let x = d3.scale.ordinal()
							.domain( years.map(function(d) { return d; }) )
    					.rangeRoundBands([0, width], 0.1);

    let	y = d3.scale.linear()
    					.domain(d3.extent(values))
    					.range([height, 0]);

    let xAxis = d3.svg.axis()
    							.scale(x)
    							.orient("bottom")
    							.outerTickSize(1);

    let yd = y.domain();
    let yAxis = d3.svg.axis()
		    					.scale(y)
		    					.orient("left")
		    					.ticks(3)
                  .tickPadding(1)
						      .tickSize(1)
						      .tickFormat(function (d) {
                    let prefix = d3.formatPrefix(d, 0);
                    if ( d < 10000 ){ 
                      return d3.round(d, decimals); 
                    }
                    return d3.round(prefix.scale(d), 3) + prefix.symbol;
                  })
                  .tickValues([yd[0], (yd[0] + yd[1]) * 0.5, yd[1]]);
    
    let line = d3.svg.line()
							    .x(function(d, i) { return x(years[i]) ;})
							    .y(function(d) { return y(d); })
							    .interpolate('monotone')
							    ;

		let svg = d3.select('#'+this.get('elementId'));
		svg.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom);

		let container = svg.append("g")
											.classed("line-group", true)
											.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
											;
    
    let barWidth = x.rangeBand();
                      
    container.append("g")
    	.selectAll('.bar')
    	.data(years)
    	.enter()
    	.append('rect')
    	.attr('class', 'bar')
      .classed('_selected_', function (d) {
        return d === currentYear;
      })
    	.attr('x', function(d,i) { return x(years[i]); })
    	.attr('y', 0)
    	.attr('width', barWidth)
    	.attr('height', height)
    	.attr('fill', 'grey')
    	.style('cursor', 'pointer')
      .on('click', (d,i) => {
        let index = i;
        svg.selectAll('.bar')
          .classed('_selected_', function(d, i) {
            return i === index;
          });
        this.sendAction('setYear', years[i]);
      });

    container.append("path")
      .attr("class", "line")
      .attr("d", line(values))
      .attr('transform', 'translate(' + (barWidth / 2) + ',0)')
      .style('stroke-width', '2')
      .style('stroke', lineColor)
      .style('fill', 'none');	
    
    container.append('g')
      .selectAll('.circle')
      .data(values)
      .enter()
      .append('circle')
      .attr('class', 'circle')
      .style('stroke', 'black')
      .style('fill', 'ivory')
      .style('cursor', 'pointer')
      .attr('cx', function(d, i) { return x(years[i]) + (barWidth / 2); })
      .attr('cy', function(d, i) { return y(d); })
      .attr('r', 3)
      .on('mouseover', function(d) {
      
        d3.select(this)
          .transition()
          .attr("fill", 'orange'); 

        tooltip.transition()
           .duration(350)
           .style('opacity', 0.9);

        tooltip.html('<h5>' + d.toLocaleString() + ' <small>' + units + '</small></h5>')
           .style("left", (d3.event.pageX) + "px")
           .style("top", (d3.event.pageY - 50) + "px");  
      })
      .on('mouseout', function(d) {
        d3.select(this)
          .transition()
          .attr("fill", 'ivory');

        tooltip.transition()
          .duration(500)
          .style('opacity', 0);
      })
      .on('click', function (d,i) {
        let index = i;
        svg.selectAll('.bar')
          .classed('_selected_', function(d, i) {
            return i === index;
          });
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
    const currentYear = this.get('currentYear');
    const decimals = this.get('decimals');
    const lineColor = this.get('color'),
          lineData = this.get('data');
    
    let years = $.map(lineData, function(el) { return el.key; }),
        values = $.map(lineData, function(el) { return el.value; });

    let x = d3.scale.ordinal()
              .domain( years.map(function(d) { return d; }) )
              .rangeRoundBands([0, width], 0.1);

    let y = d3.scale.linear()
              .domain(d3.extent(values))
              .range([height, 0]);

    let yd = y.domain();
    let yAxis = d3.svg.axis()
                  .scale(y)
                  .orient("left")
                  .ticks(3)
                  .tickPadding(1)
                  .tickSize(1)
                  .tickFormat(function (d) {
                    let prefix = d3.formatPrefix(d, 0);
                    if ( d < 10000 ){ 
                      return d3.round(d, decimals); 
                    }
                    return d3.round(prefix.scale(d), 3) + prefix.symbol;
                  })
                  .tickValues([yd[0], (yd[0] + yd[1]) * 0.5, yd[1]]);

    let line = d3.svg.line()
                  .x(function(d, i) { return x(years[i]) ;})
                  .y(function(d) { return y(d); })
                  .interpolate('monotone')
                  ;

    let svg = d3.select('#'+this.get('elementId'));

    svg.select('.line')
       .transition()
       .ease('bounce')
       .duration(1000)
       .attr('d', line(values));

    svg.selectAll('.circle')
        .data(values)
        .transition()
        .ease('bounce')
        .duration(1100)
        .attr('cy', function(d, i) { return y(d); });

    svg.select('.y.axis')
       .transition()
       .duration(750)
       .call(yAxis);

  }),

});
