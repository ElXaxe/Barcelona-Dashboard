import Ember from 'ember';

export default Ember.Component.extend({
	// SVG Config
	tagName: 'svg',
	svg: null,
	margin: {top: 20, right: 20, bottom: 20, left: 20},
	pieData: null,
	title: 'Title',
	iniColor: '#C1D1FF',
	endColor: '#000050',
	selectColor: 'crimson',
	units: 'u.',
	colorScale: Ember.computed('iniColor', 'endColor', function(){
		const first = this.get('iniColor'),
					last = this.get('endColor');

		const color = d3.scale.ordinal()
										.range([first, last]);

		return color;
	}),
	tip: d3.select('body').append('div').attr('class', 'map-tooltip').style('opacity', 0),

	didInsertElement: function() {
		const w = (this.$().css('width')).slice(0, (this.$().css('width')).indexOf('p'));
		const h = (this.$().css('height')).slice(0, (this.$().css('height')).indexOf('p'));
		const margin = this.get('margin');
		const width = w - margin.left - margin.right;
  	const height = h - margin.top - margin.bottom;
  	const color = this.get('colorScale');
  	const iniColor = this.get('iniColor');
  	const endColor = this.get('endColor');
  	const selectColor = this.get('selectColor');
  	const pieData = this.get('pieData');
  	const radius = Math.min(width, height) / 2;
  	const innRadius = radius * 0.5,
  				outRadius = radius * 0.9;
  	const labels = $.map(pieData, function(el) { return el.key; }),
				values = $.map(pieData, function(el) { return el.value; });
		const title = this.get('title');
		const tooltip = this.get('tip');
		const units = this.get('units');
		const total = values.reduce(function(a, b) { return a + b; });
		const _this = this;
  	color.domain(labels[0], labels[labels.length - 1]);
  	
  	let svg = d3.select('#'+this.get('elementId'));
		svg.attr('width', width).attr('height', height);

		let pie = d3.layout.pie()
								.value( function(d) { return d; })
								.sort(null);

		let arc = d3.svg.arc()
								.innerRadius(innRadius)
								.outerRadius(outRadius);

		svg.append('g')
			 .attr('class', 'donut-chart')
			 .attr('transform', 'translate(' + (width / 2) + ',' + (height / 1.75) +')');

		svg.select('.donut-chart')
			 .selectAll('.donut-arc')
			 .data(pie(values))
			 .enter()
			 .append('g')
			 .attr('class', 'donut-arc _selected_')
				;

		svg.selectAll('.donut-arc')
			 .append('path')
			 .attr('fill', function(d, i) { return color(labels[i]); })
			 .attr('d', arc)
			 .each(function(d) { this._current = d; })
			 .on('mouseover', function (d, i) { 
			 		let percentage = d.value / total * 100;

			 		d3.select(this)
			 			.transition()
			 			.attr('stroke', selectColor)
			 			.attr('stroke-width', '2px');

			 		tooltip.transition()
						 .duration(350)
						 .style('opacity', 0.9);
					
					tooltip.html('<h3>' +
								  d3.round(percentage, 2) + 
								  '%</h3><p>' + d.value.toLocaleString() + ' ' + units +'</p>')
						 .style("left", (d3.event.pageX) + "px")
	           .style("top", (d3.event.pageY - 100) + "px"); 
			 })
			 .on('mouseout', function (d, i) {
			 		d3.select(this)
			 			.transition()
			 			.attr('stroke', 'none');

			 		tooltip.transition()
						.duration(500)
						.style('opacity', 0);
			 });
		
		svg.selectAll('.donut-arc')
			.style('cursor', 'pointer')
			.on('click', (d, i) => {
			 		let index = i;
			 		svg.selectAll('.donut-arc')
			 			.classed('_selected_', function(d, i) {
			 				return i === index;
			 			});
			 		this.sendAction('setPie', labels[i]);
			});

		svg.selectAll('.donut-arc')
			.append('text')
			.attr('class', 'labelText')
			.attr("x", function(d) {
          var a = d.startAngle + (d.endAngle - d.startAngle)/2 - Math.PI/2;
          d.cx = Math.cos(a) * (outRadius + 75);
          return d.x = Math.cos(a) * (outRadius + 30);
      })
      .attr("y", function(d) {
          var a = d.startAngle + (d.endAngle - d.startAngle)/2 - Math.PI/2;
          d.cy = Math.sin(a) * (outRadius + 75);
          return d.y = Math.sin(a) * (outRadius + 20);
      })
      .text(function(d, i) {
          return labels[i];
      })
      .style("text-anchor", function(d) {
	        var rads = ((d.endAngle - d.startAngle) / 2) + d.startAngle + 10;
	        if ( (rads > 7 * Math.PI / 4 && rads < Math.PI / 4) || (rads > 3 * Math.PI / 4 && rads < 5 * Math.PI / 4) ) {
	          return "middle";
	        } else if (rads >= Math.PI / 4 && rads <= 3 * Math.PI / 4) {
	            return "start";
	        } else if (rads >= 5 * Math.PI / 4 && rads <= 7 * Math.PI / 4) {
	            return "end";
	        } else {
	            return "middle";
	        }
	    });

	  svg.select('.donut-chart')
	  	 .append('text')
	  	 .attr('class', 'title')
	  	 .attr('transform', 'translate(0,10)')
	  	 .style('text-anchor', 'middle')
	  	 .style('font-size', '2rem')
	  	 .style('font-weight', 400)
	  	 .style('cursor', 'pointer')
	  	 .text(title)
	  	 .on('click', (d, i) => {
			 		svg.selectAll('.donut-arc')
			 			.classed('_selected_', true);
			 		this.sendAction('setPie', null);
			});
	},

	actions: {

	}
});
