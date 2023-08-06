/* Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters. */

function findLongestSubstring (str) {
  // I receive an string
  // I return the length of the longest substring with different characters
  // I need to split the string 
  // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
  //   i          j

  let i = 0;
  let j = 1;

  let strArr = str.split('')
  let maxLength = -Infinity

  while(i < strArr.length) {
    if(strArr[i] != strArr[j]) {
      j ++
    } else  if(strArr[i] == strArr[j]) {
      maxLength = Math.max(maxLength, j - i)

    }
  }
}

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6