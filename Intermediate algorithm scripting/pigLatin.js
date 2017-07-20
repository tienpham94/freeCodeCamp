
function translatePigLatin(str) {
  var vowels = ['a','e','i','o','u'];
  var letters = str.split("");
  if(vowels.indexOf(letters[0])>=0){
    letters.push('w');
  }
  else{
    for(var i=0; i<letters.length;i++){
      if(vowels.indexOf(letters[0])<0){
        letters.push(letters.shift());
      }
      else{
        break;
      }
    }
  }
  letters.push('ay');

  return letters.join("");

}

console.log(translatePigLatin("consonant"));
