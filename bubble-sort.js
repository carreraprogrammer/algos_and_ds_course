let bubbleSort = (arr) => {
// [1, 2, 3, 4, 5, 6]
//              i  j
//        i j
//              i  j
//  if the number i is more than number j, switch
// if it is not, i ++ j ++
// if there is not any switch, we break the function

let makeSwitch;

for(let i = arr.length; i > 0; i --) {
  makeSwitch = false;
  console.log(arr)

  for(let j = 0; j < i - 1; j ++) {
    if(arr[j] > arr[j + 1]) {
      [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      makeSwitch = true;
    }
  }

  if(!makeSwitch) break;
}

 return arr
}


console.log(bubbleSort([1,4,3,2,5,8,9,7]))