// Convert a string to spinal case. Spinal
// case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {
    var firstLetter = "",
    newstr = "";
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  firstLetter = str.substr(0, 1);
  strSlice = str.substr(1, str.length);

  // all strings with no spaces but capitals are replaced with hyphens in front of cap letters
  if (strSlice.indexOf(" ") == -1 && strSlice.indexOf("_") == -1) {
      strSlice = strSlice.replace(/[A-Z]/g, function(x){
          return "-"+x;
      });
  }

  else {

    //   any spaces before lower case word gets a hyphen
      strSlice = strSlice.replace(/ [a-z]/g, function(z) {
          return "-" + z;
      });

    //   all spaces and underscores are erased and capital letters get replaces
    // with hyphens in front
      strSlice = strSlice.replace(/[_]|\s/g, "").replace(/[A-Z]/g, function(y){
          return "-"+y;
      });
  }

// reconnect first letter with rest of string, then convert all to lower case
  str = firstLetter.concat(strSlice).toLowerCase();
  return str;
}

// console.log(spinalCase("This Is Spinal Case"));
