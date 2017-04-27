import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
//  currentUser: Ember.inject.service('current-user'),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    authenticate() {
     let { identification, password } = this.getProperties('identification', 'password');
     this.get('session').authenticate('authenticator:devise-token-auth', identification, password).catch((reason) => {
       console.log(reason);
       this.set('errorMessage', reason.error || reason);
     });
     return false;
   }
  }
});
