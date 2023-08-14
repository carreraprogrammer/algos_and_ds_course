let capitalizeWords = (arr) => {
  let newArr = []

  let capitalizeHelper = (arrOfStrings) => {

    if(arrOfStrings.length === 0 ) return;
    let capitalizedString = arrOfStrings[0].toUpperCase()
    newArr.push(capitalizedString)
    let filteredArray = arrOfStrings.filter((word) => word != arrOfStrings[0])
    capitalizeHelper(filteredArray)
  }

  capitalizeHelper(arr)

  return newArr
}

console.log(capitalizeWords(["hello", "bye", "adios"]))