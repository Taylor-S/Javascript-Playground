// find all unique values in any number of arrays and create a new array
// containing all those unique values


function uniteUnique(arr) {
    var fullArr = [],
    uniqueArr = [];

    for (var a = 0; a < arguments.length; a++) {    //loop through arguments

        for (var i = 0; i < arguments[a].length; i++) {     //loop though argument

            if (uniqueArr.indexOf(arguments[a][i]) == -1) {

                //  if an argument array's value does not yet exist, add it to new array
                uniqueArr.push(arguments[a][i]);
            }
        }
    }

    return uniqueArr;

    ////////////////////////////////////////////////////////
    // more elegant design of filter method

    // arr = arr.filter(function(index, pos){
    //     return arr.indexOf(index) == pos;
    // });
    // return arr;
    ///////////////////////////////////////////////////////
}


// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
