
function findElement(arr, func) {
  var num = 0;
  return arr.filter(func)[0];
}

findElement([1, 3,5,9], function(num){ return num % 2 === 0; });
