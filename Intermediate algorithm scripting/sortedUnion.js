
function uniteUnique(arr) {
  var newArr = Array.from(arguments);
  var flattened = newArr.reduce(function(arr1,arr2){
    for(var i=0;i<arr2.length;i++){
      if(arr1.indexOf(arr2[i])<0){
        arr1.push(arr2[i]);
      };
    }
    return arr1;
  })
  return flattened;

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
