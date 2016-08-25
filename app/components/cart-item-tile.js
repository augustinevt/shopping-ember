import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  multiItemCost: Ember.computed('product.cost', 'qty', function() {
    return this.get('product.cost') * this.get('qty');
  }),
  actions: {
    removeItem(product){
      // console.log(product);
      this.get('shoppingCart').remove(product);

    }
  }
});
