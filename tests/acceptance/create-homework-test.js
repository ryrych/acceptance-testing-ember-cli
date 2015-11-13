import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'acceptance-testing-ember-cli/tests/helpers/start-app';

module('Acceptance | create homework', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('Creating a new homework', function(assert) {
  visit('/homeworks/new');

  const title = 'Underwater basket weaving';
  const description = 'an amazing the description about basket weaving';

  fillIn('.homework-title', title);
  fillIn('.homework-description', description);

  click('.submit-homework');
  andThen(function() {
    assert.equal(currentURL(), '/homeworks/1', 'creates a homework and redirects to show page');
  });
});
