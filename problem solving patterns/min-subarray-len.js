function minSubArrayLen(nums, sum) {
  // What's my input
  // An array of numbers
  // Sum
  // What's my output
  // Length of the min array that is more or equal to the sum
  // I'm looking the shortest consecutive array which sum is more or equal that my sum argument

  let minSubArrayLen = +Infinity // Every value should be less than infinity
  let acc = 0
  let i = 0;
  let j = 0;
  // [1,3,2,7] wich sub array is more or less than 5
  //  i j      1 + 3 = 4
  //  i   j    1 + 3 + 2 = 6
  //  i     j  1 + 3 + 2 + 7 = 13  I FOUND A SUB ARRAY
  //    i   j  3 + 2 + 7 = 12 I FOUND OTHER SUB ARRAY
  //      i j  2 + 7 = 9 I FOUND OTHER SUB ARRAY
  //        ij 7 = 7 I FOUND OTHER SUB ARRAY


 
  while(j < nums.length) {
    acc += nums[j]
     // if my current subArray.sum < 5 
    if (acc < sum) {
     // j ++ 
      j ++
    } else if(acc > sum && i < nums.length) {// else if subArray.sum >= 5
      // compare my current subArrayLength my previous subArrayLength
      minSubArrayLen = Math.min(minSubArrayLen, j - i)
      console.log("current")
      console.log(j - i)
      console.log("previous")
      console.log(minSubArrayLen)
      // i ++ 
      i ++
    } else {
      break;
    }
  }
  
  return minSubArrayLen
   
}

// Simple cases

console.log(minSubArrayLen([1,3,2,7], 5)) // 1, because [7] is more than 5

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0