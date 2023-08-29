function bubbleSort(arr) {
  let i = 0;
  let j = 1;
  let counter = 0;

  while(counter < arr.length) {
    if(arr[i] < arr[j]){
      i++
      j++
    } else if(arr[i] > arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    counter ++
  }
  
  return arr
}

console.log(bubbleSort([1,4,3,2,5,8,9,7]))