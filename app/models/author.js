import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  billingItems:DS.hasMany('billing-item',{inverse:'author'})
});
