
function binaryAgent(str) {
  var arr = str.split(" ");
  var toDecimal = [];
  var toString = [];

  for (var i = 0; i < arr.length; i++) {
    toDecimal[i] = 0;
    for(var j = 0; j < arr[i].length; j++){
      toDecimal[i] += arr[i][arr[i].length-j-1]*Math.pow(2,j);
    }
    toString.push(String.fromCharCode(toDecimal[i]));
  }

  var result = toString.join("");
  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
