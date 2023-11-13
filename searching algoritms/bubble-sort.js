let bubbleSort = (arr) => {
  for(let i = arr.length; i > 0; i --) {
    console.log(arr)
    let makeSwitch = false;
    for(let j = 0; j < i; j ++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        makeSwitch = true
      }
    }

    if(!makeSwitch) break;
    
  }
  return arr
}

// [1, 3, 2, 4, 5]

console.log(bubbleSort([1,4,3,2,5,8,9,7]))