
const stringfyNumber = (obj) => {
  for (let key in obj) {
    if (Number.isInteger(obj[key])) {
      obj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object') {
      stringfyNumber(obj[key]);
    }
  }
  return obj;
}

console.log(stringfyNumber({
  one: 1,
  two: {
    nested: 2
  }
}));
