/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function (array, target) {
<<<<<<< HEAD

  var recursive = function (index, target){
          if (array[index] === target){
              return index
          } else {
            if (index === 0 || (index === array.length - 1 && array[index] !== target)) {
                return -1;
            } else if (target > array[index]) {
                return recursive(Math.floor((array.length + index) / 2), target);
            } else if (index === 1) {
                return recursive(0, target);
            } else {
                return recursive(Math.floor((array.length - index) / 2), target);
            }
          }
  }
  return recursive(Math.floor(array.length/2), target);
};


// console.log(binarySearch([1, 2, 3, 4, 5], 3));



// //others solutions 1
// var binarySearch = function(array, target) {
//   let left = 0, right = array.length - 1, mid;
//   while (left <= right) {
//     mid = Math.floor((left + right) / 2);
//     if (array[mid] === target) return mid;
//     else if (array[mid] > target) right = mid - 1;
//     else left = mid + 1;
//   }
//   return -1;
// };
//
// //others solutions 2
// var rotatedArraySearch = function (rotated, target) {
//   // Your code here:
//   var zeroIndex = binarySearch(rotated,0,0,rotated.length); // 0의 인덱스를 binarySearch로 찾음 ==> O(logN)
//
//   if(target > rotated.length) return null;
//   else { // 배열을 0을 기준으로 둘로 쪼개서 binarySearch 함수에 넣는다
//     var a = binarySearch(rotated,target,0,zeroIndex-1) // ==> O(logN)
//     var b = binarySearch(rotated,target,zeroIndex,rotated.length) // ==> O(logN)
//     if (a === -1) return b; // a 파트에서 target을 찾지 못하면 b 파트에서 찾은 target의 인덱스값을 리턴
//     else return a
// }
// };
//
// function binarySearch(array.sort(),value,low,high){  // // ==> O(logN)
//   if(low>high) false;
//
//   var mid = Math.floor((low+high) / 2)
//   if(array[mid] > value) return binarySearch(array,value,low,mid-1)
//   else if(array[mid] < value) return binarySearch(array,value,mid+1,high)
//   else return mid
// }
// };
=======
};

>>>>>>> 1178bab1332c5d5c4a8847d3f8e9216d19ff56a6
