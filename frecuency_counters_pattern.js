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

/* 

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

function same(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  for(let i = 0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1) {
      return false;
    }
      arr2.splice(correctIndex,1)
    }
    return true
}

 console.log(same([2], [4, 9, 32]))
 console.log(same([1], [1])) // true
 console.log(same([1], [1, 1])) // false (Not the same frecuency)
 console.log(same([1, 2, 3], [1, 4, 9])) // true
 console.log(same([1, 2, 3], [1, 4, 9, 1])) // false
 console.log(same([1, 2, 3], [9, 4, 1]))


 // O(n)

 function same2(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }

    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}