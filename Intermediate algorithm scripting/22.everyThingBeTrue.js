function truthCheck(collection, pre) {
  // Is everyone being true?
  var arr = Array.from(arguments[0]);
  for (var i = 0; i < arr.length; i++) {
    if(!arr[i].hasOwnProperty(pre)){
      return false;
    }
    else if(arr[i].hasOwnProperty(pre)){
      if(!Boolean(arr[i][pre])){
        return false;
      }
    }
  }

  return true;
}
console.log(
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));
