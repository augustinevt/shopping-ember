import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

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
