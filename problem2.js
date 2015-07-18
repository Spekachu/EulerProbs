var fib = [0, 1, 2];
var last = 2;
var secLast = 1;
var sum = 0;

while (fib[fib.length - 1] <= 4000000) {
    var next = fib[last] + fib[secLast];
    fib.push(next);
    last++;
    secLast++;
}
console.log("The Fibonacci Sequence!");
console.log(fib);

console.log("The Sum of all the even numbers");
for (var i = 0; i < fib.length; i++) {
    var num = fib[i];
    if (num % 2 === 0) {
        sum += num;
        console.log(num + " - current sum = " + sum);
    }

}