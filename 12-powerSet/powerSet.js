/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str){
    var outcome = [];
    var recursive = (input, num, start) => {
        var char = input.slice(start, num).split('').sort().join('');
        if (!outcome.includes(char)) {
            outcome.push(char)
        }
        if (num < input.length) {
            recursive(input, num + 1, start)
        }
    }
    for (var i = 0; i < str.length; i++){
        recursive(str, i, i);
    }
    return outcome;
}

console.log(powerSet('abc'));


// other solution
// var powerSet = function(str){
//     var outcome = [];
//     var recursive = (input, num) => {
//         for (var i = 0; i < str.length; i++){
//             var char = input.slice(i, num).split('').sort().join('');
//             if (!outcome.includes(char)) {
//                 outcome.push(char)
//             }
//             if (num < input.length) {
//                 recursive(input, num + 1)
//             }
//         }
//
//     }
//     recursive(str, 0);
//     return outcome;
// }


// teacher solution
//-----------------------------------------------------------------------------
// Solution 1
//-----------------------------------------------------------------------------
var powerSet = function (str) {
  var item = 0,
      total = [],
      destination = str.length - 1;
  var iter = function (pre, starter) {
    for (; total.push(item = pre.concat([str[starter]]).toString()) && starter < destination;) {
      console.log('total : ', total)
      iter(item, ++starter);
    }
  };
  if (destination) {
    iter([], 0);
  }
  return total;
};

//-----------------------------------------------------------------------------
// Solution 2
//-----------------------------------------------------------------------------
var powerSet = function (str) {
  var set = [];
  var hash = {};
  if (!str) str = '';
  str = str.split('').sort();

  for (var i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) {
      str.splice(i, 1);
      i--;
    }
  }

  function recurse(strSet) {
    var joined = strSet.join('');

    if (hash[joined]) return;
    hash[joined] = true;
    set.push(joined);

    if (strSet.length === 1) return;

    for (var i = 0; i < strSet.length; i++) {
      var subSet = strSet.slice(0, i).concat(strSet.slice(i + 1));
      recurse(subSet);
    }
  }
  recurse(str);
  set.push('');

  return set;
};
