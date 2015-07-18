/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?*/

var target = 13195;
var largestPrime = 0;

var isPrime = function(num){
  
  for (var i = 2; i < num; i++){
      if (num%i === 0){
          return false;
      }
  }
  
  return true;
};

var printResult = function(num){
    largestPrime = num;
    console.log(largestPrime);  
};

for (var i = 3; i < target; i+=2){
    
    if (target%i === 0){
        if (isPrime(i)){
            printResult(i);
        }
    }
    
    
}

var target = 600851475143;
var largestPrime = 0;
for (var i = 3; i < 1000; i+=2){
    
    if (target%i === 0){
        if (isPrime(i)){
            printResult(i);
        }
    }
    
    
}