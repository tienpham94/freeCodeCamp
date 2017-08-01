function addTogether() {
  var args = Array.from(arguments);
  if(args.length === 2 && Number.isInteger(args[0]) && Number.isInteger(args[1])){
    return args[0] + args[1];
  }
  else if(args.length === 1 & Number.isInteger(args[0])){
    return function(val){
      if(Number.isInteger(val)){
      return args[0] + val;
      }
      return undefined;
    };
  }

  return undefined;
}

addTogether(2,3);
