/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function () {
  var list = ["rock", "paper", "scissors"];
  var list_of_sequence = [];
  var sequence = [];
  for (var i = 0; i < 3; i++){
    sequence.push(list[i]);
    for (var k = 0; k < 3; k++){
      sequence.push(list[k]);
      for (var j = 0; j < 3; j++){
        sequence.push(list[j]);
        list_of_sequence.push(sequence);
        sequence = sequence.slice(0, 2);
      }
      sequence = sequence.slice(0, 1);
    }
    sequence = sequence.slice(0, 0);
  }
  return list_of_sequence;
};

console.log(rockPaperScissors());

// var rockPaperScissors = function (number) {
//   var list = ["rock", "paper", "scissors"];
//   var list_of_sequence = [];
//   var sequence = [];
//   var find_sequence = function(times){
//     for (var i = 0; i < tiems; i++){
//       if (sequence.length < time){
//         sequence.push(list[i]);
//         find_sequence(times);
//         sequence = sequence.slice(0, sequence.length - 1)
//       } else if (sequence.length = times) {
//         list_of_sequence.push(sequence);
//         sequence = sequence.slice(0, times - 1);
//       }
//     }
//   }
//   find_sequence(number);
//
//   return list_of_sequence;
// };
//
// console.log(rockPaperScissors(3));






// var rockPaperScissors = function (num) {
//   let result = [], temp;
//   const rps = ['Rock', 'Paper', 'Scissors'];
//   for ( let i = 0; i < Math.pow(3, num); i++ ) {
//     temp = '0'.repeat(num-i.toString(3).length) + i.toString(3);
//     temp = temp.split('').map(a => { return rps[Number(a)] });
//     result.push(temp);
//   }
//   return result;
