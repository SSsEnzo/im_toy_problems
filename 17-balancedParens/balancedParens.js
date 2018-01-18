/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input){
  var string = input
  var arr = ["()", "{}", "[]"];
  while (string.includes(arr[0]) || string.includes(arr[1]) || string.includes(arr[2])){
    var str
    if (string.includes(arr[0])){
      str = arr[0]
    } else if (string.includes(arr[1])){
      str = arr[1]
    } else {
      str = arr[2]
    }
    string = string.replace(str, "");
  }
  if (string.length === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(balancedParens('[(]{)}'));
