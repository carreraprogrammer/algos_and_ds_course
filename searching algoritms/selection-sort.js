let selectionSort = (arr) => {
  for(let i = 0; i < arr.length; i ++) {
    minPosition = i
    for(let j = i + 1; j < arr.length; j ++) {
      if(arr[j] < arr[minPosition]) {
        minPosition = j
      }
    }

    if(minPosition !== i) {
      [arr[minPosition], arr[i]] = [arr[i], arr[minPosition]]
    }
  }
  return arr
}

console.log(selectionSort([2, 3, 1, 0, -6, 7]))