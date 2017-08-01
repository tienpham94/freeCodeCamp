function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){
      console.log("hi");
    }
  }
  return newArr;
}
console.log(
steamrollArray([1, [2], [3, [[4]]]]));
