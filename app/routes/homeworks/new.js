import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('homework');
  },

  actions: {
    saveRecord(homework) {
      homework.save().then(hw => this.transitionTo('homeworks.show', hw));
    },
  },
});
