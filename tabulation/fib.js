const fib = (n) =>{
    const table = Array(n+1).fill(0);
    table[1] = 1;
    
    // Two possible for loops
    // for (let i=2; i<=n; i++)
    // {
    //     table[i] = table[i-1] + table[i-2];
    // }

    for (let i=0; i<=n; i++){
        table[i+1] += table[i];
        table[i+2] += table[i];
    }
    
    return table[n];
    
}

console.log(fib(6));
console.log(fib(20));
console.log(fib(30));
console.log(fib(50));