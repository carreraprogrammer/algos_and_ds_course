/* Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman */


const validAnagram = (str1, str2) => {
  // This should return a boolean

  if (str1.length !== str2.length) return false;

  const frequencyCounter = {}
  const wordsArr = str1.split('')

  wordsArr.forEach(l => {
    frequencyCounter[l] = (frequencyCounter[l] || 0) + 1
  })
  
  for (let l of str2) {
    if(!frequencyCounter[l])  {
      return false
    } else {
      frequencyCounter[l] --
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
