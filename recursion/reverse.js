/* Write a recursive function called reverse which accepts a string and returns a new string in reverse. */

let reverse = (str) => {
  if(str.length === 1) return str;
  let lastLetter = str.split('').slice(str.length - 1)
  let newString = str.split('').slice(0, str.length - 1).join('')
  return lastLetter + reverse(newString)
}

console.log(reverse('hello'))