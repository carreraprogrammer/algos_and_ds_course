/* Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman */


const validAnagram = (str1, str2) => {
   frequency_counter_str1 = {}
   frequency_counter_str2 = {}
   let arr1 = str1.split('')
   let arr2 = str2.split('')

   if(str1.length != str2.length) {
     return false
   }

   arr1.forEach((str) => {
    frequency_counter_str1[str] = (frequency_counter_str1[str] || 0) + 1
    return frequency_counter_str1
   })

   arr2.forEach((str) => {
    frequency_counter_str2[str] = (frequency_counter_str2[str] || 0) + 1
    return frequency_counter_str2
   })

   for(let key in frequency_counter_str1) {
    if(!frequency_counter_str2[key]) {
      return false
    } else if(frequency_counter_str1[key] != frequency_counter_str2[key]){
      return false
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