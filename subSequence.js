/* Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing. */

function isSubsequence(str1, str2) {
  let pointerOne = 0;
  let pointerTwo = 0;

  while (pointerTwo < str2.length) {
    if (str1[pointerOne] === str2[pointerTwo]) {
      pointerOne++;
    }
    if (pointerOne === str1.length) {
      return true;
    }
    pointerTwo++;
  }

  return false; 
}

  
  return true
}

console.log(isSubsequence('hello', 'hello world')) //true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false 