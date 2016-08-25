import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('seller', params.seller_id);
  },
  actions: {
    saveProduct(params){
      var newProduct = this.store.createRecord('product', params);
      var seller = params.seller;
      seller.get('products').addObject(newProduct);
      newProduct.save().then(function() {
        return seller.save();
      });
      this.transitionTo('seller', seller.id);
    }
  }
});
