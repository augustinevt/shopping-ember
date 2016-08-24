import Ember from 'ember';

export default Ember.Component.extend({
  multiItemCost: Ember.computed('product.cost', 'qty', function() {
    return this.get('product.cost') * this.get('qty');
  })
});
