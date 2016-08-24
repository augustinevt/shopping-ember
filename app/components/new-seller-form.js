import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveSeller() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        image: this.get('image'),
      };
      console.log('saveSeller');
      this.sendAction('saveSeller', params);
    },
  }
});
