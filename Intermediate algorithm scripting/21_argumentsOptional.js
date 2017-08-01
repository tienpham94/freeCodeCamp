function addTogether() {
  var args = Array.from(arguments);
  if(args.length === 2){
    return args[0] + args[1];
  }
  else if(args.length === 1){
    return function(val){
      return args[0] + val;
    }
  }

  return undefined;
}

addTogether(2,3);
