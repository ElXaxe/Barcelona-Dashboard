import DS from 'ember-data';

export default DS.Model.extend({
  year: DS.attr('number'),
  district: DS.attr('number'),
 	neighbor: DS.attr('string'),
  womenYears: DS.attr('array'),
  menYears: DS.attr('array'),
  womenTotal: DS.attr('number'),
  menTotal: DS.attr('number')
});
