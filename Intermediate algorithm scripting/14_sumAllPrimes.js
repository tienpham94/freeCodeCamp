function sumPrimes(num) {

  var arr = [];
  for(var i=2;i<=num;i++){
    var isPrime = true;
    for(var j= 2;j<i;j++){
     if(i%j===0){
       isPrime = false;
     }
    }
    if(isPrime){
      arr.push(i);
    }
  }

  return arr.reduce(function(x,y){
    return x+y;
  });

}

console.log(sumPrimes(997));
