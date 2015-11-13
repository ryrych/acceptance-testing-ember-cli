import Ember from 'ember';

export function initialize() {
  Ember.$.ajaxSetup({
    crossDomain: true,
    xhrFields: {
      withCredentials: true,
    },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
  });
}

export default {
  name: 'ajax-setup',
  initialize: initialize
};
