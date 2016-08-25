import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('product', params.product_id);
  },
  actions: {
    saveFeedback(params) {
      var newFeedback = this.store.createRecord('feedback', params);
      var product = params.product;
      product.get('feedback').addObject(newFeedback);
      newFeedback.save().then(function() {
        return product.save();
      });
      this.transitionTo('product', product.id);
    }
  }
});
