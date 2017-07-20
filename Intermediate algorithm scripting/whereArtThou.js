function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  arr = collection.filter( function(obj){
      for(var i in source){
        if(source[i] != obj[i]){
         return false;
      }
   }
   return true;
 });

  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
