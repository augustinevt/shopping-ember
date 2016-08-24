import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('seller');
  },
  actions: {
    saveSeller(params){
      console.log(params);
      var newSeller = this.store.createRecord('seller', params);
      newSeller.save();
      this.transitionTo('index');
    }
  }
});
