/* Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities: */

// Sample Input:

function sameFrequency(num1, num2) {
  const numArr1 = num1.toString().split('').map((num) => parseInt(num, 10));
  const numArr2 = num2.toString().split('').map((num) => parseInt(num, 10));

  if (numArr1.length !== numArr2.length || numArr1 === undefined || numArr2 === undefined) {
    return false;
  }

  const frequencyCounter = {};

  numArr1.forEach((num) => {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
  });

  for (const num of numArr2) {
    // If the number doesn't exist in the frequencyCounter, return false
    if (!frequencyCounter[num]) {
      return false;
    } else if (frequencyCounter[num] === num) {
      frequencyCounter[num]--;
    }
  }

  return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385) )// true
console.log(sameFrequency(22,222) )// false
