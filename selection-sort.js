let selectionSort = (arr) => {
  for(let i = 0; i < arr.length; i ++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j ++) {
      if(arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    if(i !== lowest) {
      [arr[lowest], arr[i]] = [arr[i], arr[lowest]]
    }
  }

  return arr
}

console.log(selectionSort([2,3,1]))