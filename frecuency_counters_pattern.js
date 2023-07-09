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

// Simple examples

/* same([1], [1]) // true
same([1], [1, 1]) // false (Not the same frecuency)
same([1, 2, 3], [1, 4, 9]) // true
same([1, 2, 3], [1, 4, 9, 1]) // false

// Empty inputs

same([], [1]) // error

// invalid input

same([1, 2, 3], "This is a string!!") // error */

// BREAK IT DOWN

// If arguments are arrays and every element inside the array is an integer
  // Compare elements from the first array with all the elements in the second array
  // If it match with his square in the second array
    // Delete the pair
  // If at the end of the loop, the two arrays are empty
  // return true
  // else
  // return false

const same = (firstArray, secondArray) => {
    if (Array.isArray(firstArray) && Array.isArray(secondArray)) {
      let matchFirst = []
      let matchSecond = []

      firstArray.forEach(
        function(number) {
          for(let i = 0; i < secondArray.length; i ++) {
            if(number ** 2 === secondArray[i]) {
              matchFirst.push(number)
              matchSecond.push(secondArray[i])
            }
          }
        }
      )

      if (firstArray.join('') == matchFirst.join('') && secondArray.join('') == matchSecond.join('')) {
        return true;
      } else {
        return false;
      }
    } else {
      throw new Error("Please, insert arrays as arguments !");
    }
  };  

 console.log(same([2, 3, 6], [4, 9, 32]))