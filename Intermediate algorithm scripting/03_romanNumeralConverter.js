
function convertToRoman(num) {

  var arr = num.toString().split("");
  var result = [];
  if(arr.length >0){
  var firstChar = toRoman(arr[arr.length-1],"X","V","I");
  result.unshift(firstChar);
}
  if(arr.length >1){
  var secondChar = toRoman(arr[arr.length-2],"C","L","X");
  result.unshift(secondChar);
}
  if(arr.length >2){
  var thirdChar = toRoman(arr[arr.length-3],"M","D","C");
  result.unshift(thirdChar);
}
  if(arr.length >3){
  var fourthChar = toRoman(arr[arr.length-4],"X","V","M");
  result.unshift(fourthChar);
}

 return result.join("");

}

function toRoman(num, tenChar, fiveChar, char){
  var initial = num;
  var output = "";

  if(initial == 9){
    output += char;
    output += tenChar;
    return output;
  }
  else if(initial <9 && initial>5){
    initial -=5;
    output += fiveChar;
    for(var i = 0; i<(initial);i++){
      output += char;
    }
    return output;
  }
  else if(initial == 5){
      return fiveChar;
    }
  else if(initial == 4){
    return char + fiveChar;
  }

  while(initial>0){
    initial -= 1;
    output += char;
  }
  return output;
}

console.log(convertToRoman(989));
