
function dropElements(arr, func) {
  // Drop them elements.
  var newArr = arr.filter(func);

  if(newArr[0]!== undefined){
    return arr.slice(arr.indexOf(newArr[0]));
  }
  return newArr;

}

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
