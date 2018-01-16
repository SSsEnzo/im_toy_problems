/*
 * Write Compose and Pipe functions.
 *
 * Step 1: Implement the function Compose:
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 *
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */

'use strict';

var compose = function(){
  // var outcome = arguments[0];
  // for (var i = 1; i < arguments.length; i++){
  //   outcome = arguments[i](outcome)
  // }
  // return function(input){return outcome(input)}
};


// var greet = function(name){ return 'hi: ' + name;}
// var exclaim = function(statement) { return statement.toUpperCase() + '!';}
// var welcome = compose(greet, exclaim);
// console.log(welcome('phillip')); // 'hi: PHILLIP!'



var pipe = function(){
  var outcome = arguments[0].call(this);
  return function(){
    for (var i = 1; i < arguments.length; i++){
      outcome = arguments[i].call(this, outcome)
    }
  }
  return
};

var add2 = function(number){ return number + 2; }
var multiplyBy3 = function(number){ return number * 3; }
console.log(pipe(add2, multiplyBy3)(5)); // 21
console.log(pipe(add2, multiplyBy3, multiplyBy3)(5)); // 63








//  solution
// var compose = function () {
//   let arr = Array.prototype.slice.call(arguments).reverse();
//   return function (res) {
//     for (let i = 0; i < arr.length; i++ ) {
//       res = arr[i](res)
//     }
//     return res
//   }
// };
//
// var pipe = function () {
//   let arr = Array.prototype.slice.call(arguments);
//   return function (res) {
//     for (let i = 0; i < arr.length; i++ ) {
//       res = arr[i](res)
//     }
//     return res
//   }
// };

// 
// var compose = function(){
//   const array = [...arguments];
//   return function(x) {
//     return array.reduceRight((value, fn) => {
//       return fn(value);
//     }, x);
//   };
// };
//
// var pipe = function(){
//   const array = [...arguments];
//   return function(x) {
//     return array.reduce((value, fn) => {
//       return fn(value);
//     }, x);
//   };
// };
