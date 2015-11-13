import Ember from 'ember';

export default Ember.Route.extend({
  serverRegisterEndpoint: 'http://app.some-fake-domain.com/api/v1/auth/sign_up',

  actions: {
    testCustomPOST() {
      // global setup from `/app/initializers/ajax-setup.js` is also appended
      return Ember.$.ajax({
        url: this.get('serverRegisterEndpoint'),
        type: 'POST',
        data: {
          email: 'joe@smith.com',
          password: 'secret'
        }
      }).then((data)=> {
        // returns `{ status: 'hooray!' }` from `app/mirage/config.js`
        console.log('data', data);
      });
    },
  }
});
