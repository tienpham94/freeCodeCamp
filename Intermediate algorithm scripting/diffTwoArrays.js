
function diffArray(arr1, arr2) {
  var result = [];
  for(var i = 0; i< arr1.length; i++){
    if(arr2.indexOf(arr1[i])<0 && arr1[i]!==undefined){
      result.push(arr1[i]);
    }
  }

  for(var j = 0; j< arr2.length; j++){
    if(arr1.indexOf(arr2[j])<0 && arr2[j]!==undefined){
      result.push(arr2[j]);
    }
  }

  // Same, same; but different.
  return result;
}
console.log(
diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
