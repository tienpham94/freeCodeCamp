function convertHTML(str) {
  // &colon;&rpar;
  var arr = str.split("");
  var replace = {
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    "\"":"&quot;",
    "'":"&apos;"
  };
  var newArr = arr.map(function(val){
    if(replace[val] !== undefined){

      return replace[val];
    }
    return val;
  })

  return newArr.join("");
}

convertHTML("Dolce & Gabbana");
