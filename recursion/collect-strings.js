const collectStrings = (object) => {
  let stringsCollector = []

  function selectStrings (obj) {
    for(let key in obj) {
      if(typeof obj[key] === "string") {
        stringsCollector.push(obj[key])
      } else if(typeof obj[key] === "object") {
        selectStrings(obj[key])
      }
    }
  }

  selectStrings(object)

  return stringsCollector
}



const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])