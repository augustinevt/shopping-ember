import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveFeedback() {
      var params = {
        rating: this.get('rating'),
        comment: this.get('comment'),
        product: this.get('product')
      };
      this.sendAction('saveFeedback', params);
    }
  }
});
