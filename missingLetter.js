
function missingLetter(str) {
    var missingLetter = "";
//   loop through string letters not including first position
  for(i=1; i<str.length; i++){

//     current charcode - previous charcode should produce 1. if not, there's a mising letter
      if(str.charCodeAt(i)-str.charCodeAt(i-1) !== 1){
        //   add charcode of missing letter to missing string variable
          missingLetter = String.fromCharCode(str.charCodeAt(i-1)+1);
          return missingLetter;
      }

  }
    missingLetter = undefined;
  return missingLetter;
}

// console.log(missingLetter("abcdefghjklmno"));
