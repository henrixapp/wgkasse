import Ember from 'ember';

export default Ember.Component.extend({
    users: Ember.computed('authors.[]',function(){
      var result =[];
      var authors=this.get('authors');
      console.log(authors);
      authors.forEach(function(item,index, enumerable){result.push(item);
      console.log("HI");});
      console.log(authors);
      console.log(result);
    return result;
  })
});
