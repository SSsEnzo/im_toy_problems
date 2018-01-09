/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange){
<<<<<<< HEAD
  var result = true;
  for (var key in apple) {
    if (String(apple[key]) === "[object Object]") {
      if (!deepEquals(apple[key], orange[key])) {result = false;}
    } else {
      if (apple[key] !== orange[key]) {result = false};
    }
  }
  return result;
};

// console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}));
=======
};
>>>>>>> 0c5479362b26c981944f94c898d0b0377897d643
