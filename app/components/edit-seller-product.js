import Ember from 'ember';

export default Ember.Component.extend({
  editing: false,
  actions: {
    edit() {
      this.set('editing', true);
    },
    updateProduct(product) {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        image: this.get('image'),
        cost: this.get('cost'),
      }
      this.sendAction('updateProduct', product, params);
      this.set('editing', false)
    }
  }
});
