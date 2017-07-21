
function pairElement(str) {
  var letters = str.split("");
  var pairs ={
    "A":"T",
    "C":"G",
    "T":"A",
    "G":"C"
  }

  var returnPairs = [];

  for (var i = 0; i < letters.length; i++) {
    var newPair = [];
    newPair.push(letters[i]);
    newPair.push(pairs[letters[i]]);
    returnPairs.push(newPair);
  }
  console.log(returnPairs);

  return returnPairs;
}

pairElement("GCG");
