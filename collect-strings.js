const collectStrings = (object) => {
  let stringsCollector = []

  for (let key in object) {
    if (typeof object[key] === "string") {
      stringsCollector.push(object[key])
    } else if (typeof object[key] === "object") {
      stringsCollector = stringsCollector.concat(collectStrings(object[key]))
    }
  }

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