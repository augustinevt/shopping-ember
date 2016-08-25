import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  cartTotal: Ember.computed('shoppingCart', function() {
    var items = this.get('shoppingCart.items');
    console.log(items);
    var total = 0;
    var counter = 0;
    items.forEach((item) => {
      console.log("QTY " + item.qty);
      console.log(item.product.get('cost'));
      total += item.qty * item.product.get('cost');
      counter ++;
    });
    return total;
  })
});
