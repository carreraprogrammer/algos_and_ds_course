function minSubArrayLen(nums, sum) {
  // [1,2,3,4,5,6], 4
  //  i j
  //   3   is less than sum so I move j
  //  i  j
  //   6   is more than sum, store arr.length(j + 1 - i) and move i

  let i = 0;
  let j = 1;
  let minLength = Infinity
  let currentSum =nums[i] + nums[j]

  while(j < nums.length && i < j) {
    if(currentSum < sum) {
      j ++
      currentSum += nums[j]
    } else if(currentSum > sum) {
      minLength = Math.min((j + 1 - i), minLength)
      currentSum -= nums[i]
      i ++
    } else {
      return
    }
  }

  return minLength
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
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