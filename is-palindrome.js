function isPalindrome(str) {
  
  function reverse(str) {
    if(str.length === 1) return str;
    let lastLetter = str[str.length - 1];
    let newStr = str.split('').slice(0, str.length - 1).join('');
    
    return lastLetter + reverse(newStr)
  }

  return str == reverse(str)
}

console.log(isPalindrome('heh'))