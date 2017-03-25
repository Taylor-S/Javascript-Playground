function sumPrimes(num) {
    var primes = [];

    // loop through numbers between 2 and num
    for (var i = 2; i <= num; i++) {

        // i is the limiter here, loop through j untill one of the statements reads true
        for (var j = 2; j <= i; j++) {

            if (j == i) {                   //if j == i, the number is prime
                primes.push(i);
            }

            else if (i % j == 0) {              //if i is divisible by any other number equally, the loop is broken
                break;
            }
        }
    }
    console.log("the sum of prime number between 1 and " + num + " is: \n-----------------------------------------------");
  return primes.reduce(function(a, b){
      return a + b;
  });
}

// console.log(sumPrimes(100));
