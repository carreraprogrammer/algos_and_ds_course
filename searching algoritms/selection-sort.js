let selectionSort = (arr) => {
  // [1, 3, 5, 2, 4, 6]]
  //  define a min value arr[0]
  // compare that first value to find the minimum number in the array
  // if the min value != firstNumber, switch
  // In every passing, I can guarantize that the first number is the smallest number, so I can do the next passing starting from the next number
  let minValue = 0;

  for(let i = 0; i < arr.length; i ++) {
    minValue = i
    console.log(arr, minValue)
   for(let j = i + 1; j < arr.length; j ++) {
    console.log(arr[minValue])
    console.log('VS')
    console.log(arr[j])
    if(arr[minValue] > arr[j]) {
      console.log(`switch ${arr[minValue]} by ${arr[j]}`)
      minValue = j
    }
   }
    [arr[i], arr[minValue]] = [arr[minValue], arr[i]]
  }

  return arr
}

console.log(selectionSort([2, 3, 1, 0, -6, 7]))