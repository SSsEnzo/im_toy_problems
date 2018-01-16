/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */
// console.log(Math.floor(8/2));
var binarySearch = function (array, target) {

  var recursive = function (index, target){
      if (index === null){
          var midIndex= Math.floor(array.length/2)
          if (array[midIndex] === target){
              return midIndex;
          } else {
              if (target > array[midIndex]) {
                  return recursive(Math.floor((array.length + midIndex) / 2), target)
              } else {
                  return recursive(Math.floor((array.length - midIndex) / 2), target)
              }
          }
      } else {
          if (array[index] === target){
              return index
          } else {
            if (target > array[index]) {
                return recursive(Math.floor((array.length + index) / 2), target)
            } else if (index === 1) {
                return recursive(0, target)
            } else {
                return recursive(Math.floor((array.length - index) / 2), target)
            }
          }
      }
  }
  return recursive(null, target);
};


console.log(binarySearch([1, 2, 3, 4, 5], 1));
