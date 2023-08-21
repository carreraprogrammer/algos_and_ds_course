// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

// What it should return?
// The max sum of a group of determinated numbers inside the array

// What is the input ?
// The input is one array of integers and a number that defines the length of the groups that we are gonna evaluate

// Solution

const maxSubarraySum = (arr, num) => {
  let accumulator = 0;
  let maxSum = - Infinity

  if(num > arr.length) return null;

  // Sum of the first num numbers to create first window

  for(let i = 0; i < num; i++ ) {
    accumulator += arr[i]
  }

  maxSum = accumulator;

  for(let j = num; j < arr.length; j ++) {
    accumulator = accumulator - arr[j - num] + arr[j]
    maxSum = Math.max(accumulator, maxSum)
  }

  return maxSum
}

// Simple examples

console.log(maxSubarraySum([1, 2, 3], 2) )// 5
console.log(maxSubarraySum([], 2)) // null
console.log(maxSubarraySum([1, 2, 3], 4) )// null
console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) // 17
console.log(maxSubarraySum([4,2,1,6],1)) // 6
console.log(maxSubarraySum([4,2,1,6,2],4)) // 13
console.log(maxSubarraySum([],4)) // null