//     Convert the characters &, <, >, " (double quote),
//     and ' (apostrophe), in a string to their corresponding
//     HTML entities.


function convertHTML(str) {
  // &colon;&rpar;
    // create object of html entities
    var htmlEnt = {
        "&" : "&amp;",
        "<" : "&lt;",
        ">" : "&gt;",
        "\"" : "&quot;",
        "'" : "&apos;"
    };

  var matches = str.match(/&|<|>|"|'/g);

  // if there are no matches, return string as is
  if(matches === null){
    return str;
  }
  else{

    for (var i = 0; i < matches.length; i++) {
      for (var key in htmlEnt) {
          if (matches[i] === key) {

            //   replace matched character with HTML entity
              str = str.replace(matches[i], htmlEnt[key]);
          }
      }
  }
  }

  return str;
}

// console.log(convertHTML("Hamburgers < Pizza < Tacos"));
