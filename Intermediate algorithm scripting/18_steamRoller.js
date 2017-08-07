function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.reduce(function(a, b) {
      if (Array.isArray(b)) {
        return a.concat(steamrollArray(b));
      }
      return a.concat(b);
    }, []);
}﻿

console.log(steamrollArray([[["a"]], [["b"]]]));
