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

// console.log(powerSet('abc'));


// other solution
var powerSet = function(str){
    var outcome = [];
    var recursive = (input, num) => {
        for (var i = 0; i < str.length; i++){
            var char = input.slice(i, num).split('').sort().join('');
            if (!outcome.includes(char)) {
                outcome.push(char)
            }
            if (num < input.length) {
                recursive(input, num + 1)
            }
        }

    }
    recursive(str, 0);
    return outcome;
}
