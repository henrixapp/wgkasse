import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
      save:function(item){
        item.save();
        alert("Gespeichert");
      }
    }
});
