function sumFibs(num) {
  var arr = [1,1];
  for (var i = 0; i <= arr.length-2; i++) {
    if(arr[i] +arr[i+1]<=num){
      arr.push(arr[i]+ arr[i+1]);
    }
  }
  var sum = 0;
  for (var j = 0; j <arr.length; j++) {
    if(arr[j]%2 === 1){
      sum += arr[j];
    }
  }

  return sum;
}

sumFibs(4000000);
