import Ember from 'ember';

export default Ember.Controller.extend({
  sumAll:Ember.computed('model.all',function(){
    var all=(this.get('model.all'));
    var result=0.0;
    all.forEach(function(item){result+=item.get('price');});
    return result;
  })
});
