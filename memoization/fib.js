// Fibonacci Seq
// Brute Force 
// const fib =(n) => {
//  if(n<=2) return 1;
//  return fib(n-1) + fib(n-2);
// };

// memoization 
// JS object, keys will be arg to func, value will be the return value

const fib = (n, memo = {}) =>{
    if (n in memo) return memo[n];
    if (n <= 2) return 1;

    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n];
}


console.log(fib(6))
console.log(fib(7))
console.log(fib(50))
