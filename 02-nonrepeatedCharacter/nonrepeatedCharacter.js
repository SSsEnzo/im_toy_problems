/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
//  */
//
// var firstNonRepeatedCharacter = function(string) {
//   var list = string.split("");
//   var output = [];
//   var count = 0;
//   for (var i = 0; i < list.length; i++){
//     for (var k = 0; k < list.length; k++){
//       if(list[i] === list[k]){
//         count++;
//       }
//     }
//     if (count === 1){
//       return list[i];
//     } else {
//       count = 0;
//     }
//   }
// };


var firstNonRepeatedCharacter = function(string) {
  var list = string.split("");
  var output = [];
  for (var i = 0; i < string.length; i++){
    var check = list.splice(i + 1, 1);
    if (list.indexOf(check[0]) === -1) {
      return check[0]
    }
    list.splice(i + 1, 0, check[0]);
  }
};



console.log(firstNonRepeatedCharacter('AAAACDDDDEEECDS'));



// 우와
// var firstNonRepeatedCharacter = function(string) {
//   for ( var i = 0; i < string.length; i++ ) {
//     if ( string.indexOf(string[i]) === string.lastIndexOf(string[i]) ) return string[i]
//   }
// };
//
// const firstNonRepeatedCharacter = string => {
//   const arr = string.split('');
//   return arr.filter(a => { return arr.indexOf(a) === arr.lastIndexOf(a) })[0]
// };
