function smallestCommons(arr) {

    // find min and max
    var max = Math.max.apply(Math, arr),
    min = Math.min.apply(Math, arr),

    // create a range
    range = [];

    for (var i = min; i <= max; i++) {
        range.push(i);
    }

    // a is equal to lowers/first number in range
    var a = range[0];

    // loop through range applying Euclid’s Algorithm
    for (var k = 1; k < range.length; k++) {
        var b = range[k],
        c = a;

    // this loop changes the current dividend and divisor until there is a greatest common
    // divisor wich gives a remainder of 0
        while (a && b) {

            if (a > b) {
                a%=b;
            }
            else {
                b%=a;
            }
        }

        // orig dividend * orig divisor / greatest common divisor
        a = c * range[k] / (a + b);
    }

    return a;
}


console.log(smallestCommons([25, 1]));
