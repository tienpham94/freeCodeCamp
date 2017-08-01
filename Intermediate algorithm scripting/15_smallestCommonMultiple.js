function smallestCommons(arr) {
  var newArr = [];
  var numbers = [1];
  arr.sort(function(a,b){
    return a-b;
  });

  for (var i = arr[0]; i <= arr[1]; i++) {
    newArr.push(i);
  }

  for(var i= 0; i<= newArr.length;i++){
    if(newArr[i] === 1){
      continue;
    }
    else if(isPrime(newArr[i])){
      if (numbers.indexOf(newArr[i]) <0){
        numbers.push(newArr[i]);
      }
    }


  }


}

function isPrime(val){
  var isPrime = true;
  for(var j= 2;j<val;j++){
   if(val%j===0){
     isPrime = false;
   }
  }
  return isPrime;
}

function findPrimeDivisors(val){
  var arr = [];
  for (var i = 2; i < val; i++) {
    if(val%i===0 && isPrime(i)){
      arr.push(i);
    }
  }
  return arr;
}

console.log(findPrimeDivisors(15));

smallestCommons([1,5]);
