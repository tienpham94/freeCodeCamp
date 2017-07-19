
function diffArray(arr1, arr2) {
  var result = [];
  return result.concat(diff(arr1,arr2),diff(arr2,arr1));
  // Same, same; but different.
}

function diff(arr1,arr2){
  var result = [];
  for(var j = 0; j< arr2.length; j++){
    if(arr1.indexOf(arr2[j])<0){
      result.push(arr2[j]);
    }
  }
  return result;
}

console.log(
diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
