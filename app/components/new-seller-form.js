import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveSeller() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        image: this.get('image'),
      };
      this.sendAction('saveSeller', params);
    },
  }
});
