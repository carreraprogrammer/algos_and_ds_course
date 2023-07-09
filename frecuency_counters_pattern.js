// USE OBJECTS OR SETS TO COLLECT VALUES
// CAN AVOIDS NESTED LOOPS AS O(N^2)

/* Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same. */

/* same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency) */

// UNDERSTANDING THE PROBLEM

// 1. Can I restate the problem with my own words?

// Answer: Every element in the first array, should have one and just one element ^ 2 in the second array

// 2. What are the inputs that go into the problem?

// Answer: Basically, the functuon should only accept two arrays with numbers. 
  // What happend if I put as input two strings?
  // What happend if the array have data that is not a number
  // Numbers can be float?
  // If I put wrong number of arguments?
  // Arrays inside arrays

// 3. What are the outputs?
  // The output should be a boolean

// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
  // Answer: Aparently yes

// 5. How should I label the important pieces of data that are part of the problem?
  // The arguments can be arrayOne, arrayTwo 

// EXPLORE EXAMPLES

