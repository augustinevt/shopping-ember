import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr(),
  comment: DS.attr(),
  product: DS.belongsTo('product', {async: true}),
  seller: DS.belongsTo('seller', {async: true}),
});
