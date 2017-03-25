// Goals
// Print a triangle falling to the right
function triangleRight(n){

    console.log("----------------\n Triangle Right \n----------------");

    for(i=1; i<(n+1); i++){
        console.log('#'.repeat(i));
    }
}

// print a triangle falling to the left
function triangleLeft(n){

    console.log("---------------\n Triangle Left \n---------------");

    k = n;
    for(i=1; i<(n+1); i++){
        console.log(" ".repeat(k-1)+"#".repeat(i));
        k--;
    }
}

// goals
// Print all number from 1 to100
// numbers that are divisible by three (n % 3 == 0), print "Fizz" instead of that number
// numbers that are divisible by 5 (n % 5 ==0), print "Buzz" instead
// numbers divisible by both 5 & 3 (n % 5 == 0 && n%3 == 0), print Fizz Buzz whilst the others remain tha same.
function fizzBuzz (n) {

    console.log("-----------\n Fizz Buzz \n-----------")

    output = '';
    for(var i=1; i<(n+1); i++){
        if(i % 5 == 0 && i % 3 ==0) {
            output += "\nFizz Buzz";
        }
        else if (i % 3 ==0) {
            output += "\nFizz";
        }
        else if (i % 5 ==0) {
            output += "\nBuzz";
        }
        output += "\n" + i;
    }
    return output;
}


// Goal ChesBoard
// create an 8X8 grid  ||make a loop to create a row, then loop that 8 times.
// \n characters to seperate lines
// each space should be a # or space

function chessBoard (n) {

    console.log("-------------\n Chess Board \n-------------")


    var board = '';
    for (var k= 0; k < n; k++) {
        for (var i = 0; i < n; i++) {
            if ((i+k) % 2 == 0) {
                board += "  ";

            }
            else {
                board += "𐌎";
            }

        }
        board += "\n";
    }
    console.log(board);
}

// triangleRight(5);
// triangleLeft(5);
// fizzBuzz(100);
// chessBoard(8);
