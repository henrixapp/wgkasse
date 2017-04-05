import Ember from 'ember';

export default Ember.Component.extend({
    users: Ember.computed('authors',function(){
      var authors= (this.get('authors'));
      var result =[];
      authors.map(function(item){result.push(item)});
    return result;
  })
});
