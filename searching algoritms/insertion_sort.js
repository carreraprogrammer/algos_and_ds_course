// [1, 2, 4, 6, 2]     
// If my current number is > my previous number, I will switch with the next one
// |  |

const insertionSort = (arr) => {

  let currentNumber;

  for(let i = 1; i < arr.length; i ++) {
    currentNumber = arr[i]
    let temp;

    for(let j = i; j >= 0; j --) {
      if(currentNumber > arr[j]) {
        temp =  arr[j + 1]
        arr[j + 1] = currentNumber;
        currentNumber = temp
      }
    }

    arr[i] = temp
  }

  return arr
}

console.log(insertionSort([1,3,2,4,6,5]))