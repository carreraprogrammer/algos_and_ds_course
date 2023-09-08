let bubbleSort = (arr) => {
  for(let i = arr.length - 1; i >= 0; i ++) {
    for(let j = 0; j < i -1; j ++) {
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j + 1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}


console.log(bubbleSort([1,4,3,2,5,8,9,7]))