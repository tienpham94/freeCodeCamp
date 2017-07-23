
function myReplace(str, before, after) {
  var newArr = str.split(" ");
  var replace = [];
  for (var i = 0; i < newArr.length; i++) {
    if(newArr[i]===before){
      if(before.charCodeAt(0) <= 90 && before.charCodeAt(0)>=65){
        replace = after.split("");
        replace[0] =replace[0].toUpperCase();
        newArr[i] = replace.join("");
      }
      else{
      newArr[i] = after;
      }
    }
  }
  return newArr.join(" ");

}

console.log(myReplace("Let us go to the store", "store", "mall"));
