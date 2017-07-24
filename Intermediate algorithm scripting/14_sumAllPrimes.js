function sumPrimes(num) {

  var arr = [];
  for(var i=2;i<num;i++){
    for(var j=2;j<=i;j++){
      if(i===j){
        arr.push(i);
      }
      if(i%j===0){
        break;
      }
    }
  }

  return arr.reduce(function(x,y){
    return x+y;
  });

}

console.log(sumPrimes(997));
