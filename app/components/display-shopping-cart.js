import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  cartTotal: Ember.computed('shoppingCart.items', function() {
    var items = this.get('shoppingCart.items');
    console.log(items);
    var total = 0;
    items.forEach(function(item) {
      total += item.product.cost * item.quanity;
    });
    return total;
  })
});
