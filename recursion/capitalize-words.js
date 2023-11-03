let capitalizeWords = (arr) => {

  if (arr.length === 0) return;

  // should return an array with capitalized words
  let wordsArray = []

  const capitalizeHelper = (arr) => {
    if (arr.length === 0) return;
    const firstWord = arr[0].split('')
    const capitalizedWord = firstWord.join('').toUpperCase()
    wordsArray.push(capitalizedWord)
    const filteredArr = arr.filter((word) => word !== arr[0])
    capitalizeHelper(filteredArr);
  }

  capitalizeHelper(arr)

  return wordsArray;
}

console.log(capitalizeWords(["hello", "bye", "adios"]))