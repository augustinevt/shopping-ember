import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  cartTotal: Ember.computed('items', function() {
    var items = this.get('items');
    var total = 0;
    var counter = 0;
    items.forEach((item) => {
      total += item.qty * item.product.get('cost');
      counter ++;
    });
    return total;
  }),
  add(product) {
    var items = this.get('items');
    var alreadyAdded = false;
    items.forEach((item) => {
      if(item.product.id === product.id){
        item.qty ++;
        alreadyAdded = true;
        return;
      }
    });
    if(!alreadyAdded){
      items.pushObject({"product": product, "qty": 1});
    }
  }
});
