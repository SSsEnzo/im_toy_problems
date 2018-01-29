
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral){
  let arr = romanNumeral.split('');
  let output = null
  for ( let i = 0; i < arr.length; i++ ) {
    if ( DIGIT_VALUES[arr[i]] === undefined ) {
      return null
    } else if ( i === 0 ) {
      output = DIGIT_VALUES[arr[i]];
    } else if ( DIGIT_VALUES[arr[i]] <= DIGIT_VALUES[arr[i - 1]] ) {
      output = output + DIGIT_VALUES[arr[i]]
    } else if ( DIGIT_VALUES[arr[i]] > DIGIT_VALUES[arr[i - 1]] ) {
      output = DIGIT_VALUES[arr[i]] - output
    }
  }
  return output;
};

// console.log(translateRomanNumeral("MDCCLXXVI"));
