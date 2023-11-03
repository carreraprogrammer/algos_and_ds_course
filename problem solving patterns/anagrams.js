/* Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman */


const validAnagram = (str1, str2) => {
  
  if (str1.length !== str2.length) return false;

  // This should return a boolean
  const arrStr1 = str1.split('')
  const arrStr2 = str2.split('')
  const freqCounter = {}

  for (let l of arrStr1) {
    freqCounter[l] = (freqCounter[l] || 0) + 1
  }

  for (let l of arrStr2) {
    if(!freqCounter[l]) {
      return false
    } else {
      freqCounter[l] --
    }
  }
  
  return true
}

console.log(validAnagram('', ''))// true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
