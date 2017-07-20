function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var check = arguments[0];
  var obj = arguments[1];

  var keys = Object.keys(obj); //capulet

  for(var i=0;i<check.length;i++){
    if(check[i] === obj){
      console.log("fuck");
    }
  }

/*
  for(var i = 0; i<keys.length;i++){ //iterate thru keys
    for(var j=0; j<check.length;j++){
      if(check[j].hasOwnProperty(keys[i])&&check[j][keys[i]] === obj[keys[i]]){
        console.log(check[j])
        arr.push(check[j]);
      }
      }
    }
    */
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
