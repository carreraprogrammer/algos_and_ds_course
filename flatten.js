//Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

const flatten = (arr) => {
let newArr = []

let findArrays = (arr) => {
  for(let i = 0; i < arr.length; i ++) {
    if(!Array.isArray(arr[i])) {
      newArr.push(arr[i])
    } else {
      findArrays(arr[i])
    }
  }
}

findArrays(arr)

return newArr
}

flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]