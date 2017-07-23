
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var str = str.replace(/([a-z])([A-Z])/g,"$1 $2");
  console.log(str);
  return str.replace(/\s|_/g,"-").toLowerCase();
}

spinalCase("thisIsSpinalTap");
