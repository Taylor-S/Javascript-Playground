// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {

    var a =0, b=1, temp;
    var sequence = [0], odd = [];

    // loop pushes fib sequence to an array
    while (num > 0) {
        temp = a;
        a += b;
        sequence.push(a);
        b = temp;
        num -= b;

    }
    // return sequence;

// isolate the odd numbers with sequence
    for (var i = 0; i < sequence.length; i++) {

        if (sequence[i] % 2 !== 0) {
            odd.push(sequence[i]);
        }
    }

    // sum of odd numbers
  return odd.reduce(function(a, b) {
      return a+b;
  });
}

console.log(sumFibs(4));
