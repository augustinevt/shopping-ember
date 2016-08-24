import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveProduct() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        image: this.get('image'),
        seller: this.get('seller'),
      };
      console.log('saveProduct');
      this.sendAction('saveProduct', params);
    }
  }
});
