function reverseString(string) {
   let newString = string.split('').reverse().join('')
   return newString
}

console.log(reverseString("Hola")) // => "aloH"

//