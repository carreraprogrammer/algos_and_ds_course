// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

let nestedEvenSum = (obj) => {
  let accumulator = 0

  let evenAcummulator = (obj) => {
    for(let key in obj) {
      if(Number.isInteger(obj[key]) && obj[key] % 2 == 0) {
        accumulator += obj[key]
      } else if(typeof obj[key] == 'object') {
        evenAcummulator(obj[key])
      }
    }
  }

  evenAcummulator(obj)
  return accumulator
}