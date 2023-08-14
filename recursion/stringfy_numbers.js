const stringifyNumbers  = (obj) => {
  for (let key in obj) {
    if (Number.isInteger(obj[key])) {
      obj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object') {
      stringifyNumbers(obj[key]);
    }
  }
  return obj;
}

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/