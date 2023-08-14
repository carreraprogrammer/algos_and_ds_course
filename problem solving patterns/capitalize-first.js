// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst (array) {
  let newArr = []


  function capitalizeStr(arr) {
    if(arr.length > 0) {
      let newStr = arr[0].charAt(0).toUpperCase() + arr[0].slice(1, arr[0].length)
      newArr.push(newStr)
      capitalizeStr(arr.filter ( str => str != arr[0]))
    }
  }

  capitalizeStr(array)

  return newArr
}

console.log(capitalizeFirst(["hello", "chao", "bye", "daniel"]))