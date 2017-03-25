function searchAndReplace(str, search, replace) {
    if (search.charAt(0) == search.charAt(0).toUpperCase()){
        replace = replace.replace(replace.charAt(0), replace.charAt(0).toUpperCase());
        str = str.replace(search, replace);
    }
    else {
        str = str.replace(search, replace);
    }

  return str;
}


// First arguement is the sentence to perform the search and replace on.
// second argument is the word to replace
// third argument is the replacement word
function replace(str, rep) {
    console.log(rep);

    if (str.charAt(0) == str.charAt(0).toUpperCase()){
        rep = rep.replace(rep.charAt(0), rep.charAt(0).toUpperCase());
        console.log(rep);
    }
    else {
        console.log(false);
    }

}

// perform a search and replace on the sentencte using provided arguments.

// Preserve the case of the original word, eg, replace Book with dog will be Dog with a capital

// if the first letter the word to be replaced is capital, then first letter of replacing word is too.

// console.log(searchAndReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
