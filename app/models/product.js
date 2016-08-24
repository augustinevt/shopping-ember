import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  seller: DS.belongsTo('seller', {async: true}),
  feedback: DS.hasMany('feedback', {async: true}),
});
