// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

const binarySearch = (arr, num) => {
  // I need to return the index of the num in the arr
  // Left pointer, is gonna start on the beginin of the array
  let leftPointer = 0;
  // Right pointer, is gonna start on the end of the array
  let rightPointer = arr.length - 1
  
  

  while(leftPointer <= rightPointer) {
    let middle = Math.floor((leftPointer + rightPointer))
    // if the middle === num
    if(arr[middle] === num) {
      // return index of middle
      return middle
    } else if (arr[middle] > num) {   // if the middle of my arr > num
      rightPointer = middle  - 1  // My Right pointer moves to the middle
    } else if (arr[middle] < num) {// if the middle of my arr < num
      leftPointer = middle + 1// My left pointer moves to the middle
    }
  }
  
  return -1
}

console.log(binarySearch([1,2,3,4,5],2)) // 1 
console.log(binarySearch([1,2,3,4,5],3)) // 2
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6) )// -1
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1