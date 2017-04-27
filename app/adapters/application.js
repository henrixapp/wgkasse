import DS from 'ember-data';
import Ember from 'ember';
import DataAdapterMixin from 'ember-simple-auth/mixins/devise-token-auth-data-adapter-mixin';
const { String: { pluralize, underscore } } = Ember;
export default DS.JSONAPIAdapter.extend(DataAdapterMixin,{
  authorizer: 'authorizer:devise-token-auth',
  pathForType(type) {
    return pluralize(underscore(type));
  }
});
