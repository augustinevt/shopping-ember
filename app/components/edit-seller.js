import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    update(seller){
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        image: this.get('image'),
      }
      this.sendAction('updateSeller', seller, params);
    },
    delete(seller){
      this.sendAction('deleteSeller', seller);
    }
  }

});
