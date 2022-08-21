const Sum = (n) =>{
    if(n==1) return 1;
    let partialAns = Sum(n-1);
    return n + partialAns;
}
console.log(Sum(5));
console.log(Sum(10));
console.log(Sum(50));
console.log(Sum(100));