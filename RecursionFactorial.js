
const RecursionFactorial = (n) => {
    if(n==0)
        return 1;
    let partialAns = RecursionFactorial(n-1);
    return n*partialAns;
}

console.log(RecursionFactorial(3));
console.log(RecursionFactorial(5));
console.log(RecursionFactorial(6));
console.log(RecursionFactorial(4));