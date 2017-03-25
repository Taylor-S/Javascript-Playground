function translatePigLatin(str) {
    var vowels = ["a", "e", "i", "o", "u"],

    cc = ["bl", "br", "ch", "cl", "cr", "dr", "fl", "fr",
     "gl", "gr", "pl", "pr", "sc", "sh", "sk", "sl", "sm",
     "sn", "sp", "st", "sw", "th", "tr", "tw", "wh", "wr",
     "sch", "scr", "shr", "sph", "spl", "spr", "squ", "str", "thr"],

    firstLetter = str.slice(0, 1);

    // loop over vowels list
    for (var i = 0; i < vowels.length; i++) {
        if(str.slice(0, 1) === vowels[i]){
            return str.concat("way");
        }
    }

    // loop over consonant cluster list
    for (var k = 0; k < cc.length; k++) {
        if (str.slice(0, 2) === cc[k]) {
            return str.substring(2, str.length).concat(str.slice(0, 2), "ay");
        }
    }
    return str.substring(1, str.length).concat(str.slice(0, 1), "ay");
}

// console.log(translatePigLatin("glove"));


// Problem
// take the first letter of an english word, move to end and aff "ay"
// If the letter happens to be a vowel, add "way" not "ay".

// all inputs are lowercase english words
