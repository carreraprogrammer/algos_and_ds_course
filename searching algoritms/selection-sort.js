let selectionSort = (arr) => {
// [1, 3, 2, 4]
//        m     // if arr[0] !== arr[m], switch
//          i
  for(let i = 0; i < arr.length; i ++) {
    let minNumber = i

    for(let j = i + 1; j < arr.length; j ++) {
      if(arr[j] < arr[minNumber]) {
        minNumber = j
      }
    }

    if(arr[i] !== arr[minNumber]) {
      [arr[i], arr[minNumber]] = [arr[minNumber], arr[i]]
    }
  }
  return arr
}

console.log(selectionSort([2, 3, 1, 0, -6, 7]))