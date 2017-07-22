function convertHTML(str) {
  // &colon;&rpar;
  var arr = str.split("");
  var replace = {
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    "\"":"&quot;",
    "'":"&apos"
  };
/*
  console.log(replace[Object.keys(replace)[1]]);
  for(var i=0;i<Object.keys(replace).length;i++){
    newStr.replace(Object.keys(replace)[i],replace[Object.keys(replace)[i]]);
  }
  console.log(newStr);
*/
  var newArr = arr.map(function(val){
    if(replace[val] !== undefined){

      return replace[val];
    }
    return val;
  })

  return newArr.join("");
}
console.log(
convertHTML("Dolce & Gabbana"));
