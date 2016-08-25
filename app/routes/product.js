import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('product', params.product_id);
  },
  actions: {
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
