import Ember from 'ember';

export default Ember.Route.extend({
  model:function(){
    return Ember.RSVP.hash({item:this.store.createRecord('billing-item'),users:this.store.findAll('author')});
  }
});
