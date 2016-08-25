import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveFeedback() {
      var type = this.get('type');
      var params = {
        rating: this.get('rating'),
        comment: this.get('comment'),
      };
      params[type] = this.get('target');
      this.sendAction('saveFeedback', params, type);
    }
  }
});
