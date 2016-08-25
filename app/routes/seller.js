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
    },
    updateSeller(seller, params){
      Object.keys(params).forEach((key) => {
        if(params[key] !== undefined){
          seller.set(key, params[key]);
        }
      });
      seller.save();
      this.transitionTo('seller', seller.id);
    },
    deleteSeller(seller){
      var product_deletions = seller.get('products').map(function(product){
        return product.destroyRecord();
      });
      Ember.RSVP.all(product_deletions).then(function(){
        return seller.destroyRecord();
      });
      this.transitionTo('index');
    },
    deleteProduct(product){
      product.destroyRecord();
      this.transitionTo('seller', this.get('currentModel.id'));
    },
    updateProduct(product, params){
      Object.keys(params).forEach((key) => {
        if(params[key] !== undefined){
          product.set(key, params[key]);
        }
      });
      product.save();
      this.transitionTo('seller', this.get('currentModel.id'));
    },
    saveFeedback(params, type) {
      var newFeedback = this.store.createRecord('feedback', params);
      var target = params[type];
      target.get('feedback').addObject(newFeedback);
      newFeedback.save().then(function() {
        return target.save();
      });
      this.transitionTo(type, target.id);
    }
  }
});
