import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  totalItems: 0,
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
    this.set('totalItems', (this.get('totalItems') + 1));
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
  },
  remove(product){
    var items = this.get('items');
    var itemToRemove;
    // var counter = 0;

    for(var item of items) {
      if(item.product.id === product.id ){
        var qty = item.qty;
        this.set('totalItems', (this.get('totalItems') - qty));
        itemToRemove = item;
      }
      // counter++;
      // console.log(this.get('items['+counter+']'));
    }
    var updated = this.get('items').slice();
    updated.removeObject(itemToRemove);
    this.set('items', updated);
    // console.log(this.get('items'));
    // this.get('items.['+counter+']').destroy();
  }
});
