/* Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern. */

function areThereDuplicates(...args) {
  args.sort();

  let pointerOne = 0;
  let pointerTwo = 1;

  while (pointerTwo < args.length) {
    if (args[pointerOne] == args[pointerTwo]) { 
      return true;
    }
    pointerOne++;
    pointerTwo++;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 

