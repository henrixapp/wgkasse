// app/authenticators/devise.js
import DevisePasswordGrant from 'ember-simple-auth/authenticators/devise-token-auth';

export default DevisePasswordGrant.extend({
    resourceName: 'data',
});
