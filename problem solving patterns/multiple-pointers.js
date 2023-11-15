/* Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
Very efficient for solving problems with minimal space complexity as well */

// EXAMPLE

/* Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist */


// NAIVE SOLUTION

function sumZero(arr){
  let start = 0
  let end = arr.length - 1;
  let response;

  // [-1, 2, 2, 3, 4, 5]
  //   ij
  //  My end point, should be always more than my start point 
  //  If the interval is more than 0, move the end --
  // If the interval is less than 0, move the start ++

  while( end > start) {
    if(arr[end] + arr[start] > 0) {
      end --
    } else if(arr[end] + arr[start] < 0){
      start ++
    } else {
      response = [arr[end], arr[start]]
      break
    }
  }
  return response
}


console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3] 
console.log(sumZero([-2,0,1,3])) // undefined
console.log(sumZero([1,2,3])) // undefined