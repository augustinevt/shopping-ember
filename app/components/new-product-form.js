import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveProduct() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        image: this.get('image'),
        seller: this.get('seller'),
        cost: this.get('cost'),
      };
      this.sendAction('saveProduct', params);
    }
  }
});
