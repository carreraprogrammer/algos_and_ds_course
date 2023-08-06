function collectOddValues(arr){
  // Array of numbers
  // Odd values from array\
  let oddNumsArr = []

  let oddSelector =  (collection) => { // push odd numbers in my arr
    if(collection.length === 0) {
      return;
    }

    if(collection[0] % 2 !== 0) {
      oddNumsArr.push(collection[0])
    }

    oddSelector(collection.slice(1)) 
  }

  oddSelector(arr)

  console.log(oddNumsArr)
}

collectOddValues([1,2,3,4,5,6,7,8,9])