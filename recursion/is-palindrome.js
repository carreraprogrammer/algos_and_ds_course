function isPalindrome(str) {
  let newStr = str.split('').filter((letter) => letter.match(/[a-z]/i));
  let reverse = (arr) => {
    if(arr.length === 1) return arr[0];
    let newArr =  arr.slice(0, arr.length - 1)
    return arr[arr.length - 1] + reverse(newArr)
  }
  return reverse(newStr) == newStr.join('')
}

console.log(isPalindrome('heh! '))