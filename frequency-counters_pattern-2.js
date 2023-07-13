function same(arr1, arr2) {
  let frequency_counter_arr1 ={}
  let frequency_counter_arr2={}

  if(arr1.length != arr2.length){
    return false
  }
  
  arr1.forEach(
    (number) => {
      frequency_counter_arr1[number] = (frequency_counter_arr1[number] || 0) + 1
      return frequency_counter_arr1
    }
  )

  arr2.forEach(
    (number) => {
      frequency_counter_arr2[number] = (frequency_counter_arr2[number] || 0) + 1
      return frequency_counter_arr2
    }
  )
  
  for (let element in frequency_counter_arr1){
      if(!frequency_counter_arr2[element ** 2]){
        return false
      }
      else if(frequency_counter_arr1[element] != frequency_counter_arr2[element ** 2]) {
        return false
      }
   }

  return true
  
}

console.log(same([1,2,2,3,3,3], [1,9,9,9,2,4]))