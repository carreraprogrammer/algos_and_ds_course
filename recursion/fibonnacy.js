/* Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers. */

function fib(n){
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

// return fib(4) + fib(3)
// return fib(3) +  fib(2) + fib(2) +  fib(1)
// return fib(2) + fib(1) +f fib(2) + fib(2) + fib(1)
// como todos mis num son <=2, todos retornan 1
// return 1 + 1 + 1 +1 + 1
// fib(5) = 5


console.log(fib(4) )// 3 
console.log(fib(5))
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465

function noRecursiveFib(n) {
  if (n <= 2) return 1;

  let prev = 1;
  let current = 1;

  for (let i = 3; i <= n; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }

  return current;
}