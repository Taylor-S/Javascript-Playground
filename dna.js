function pairElement(str) {
    var baseArray = str.split(""),
    completeArray = [],
    valuePairs = {
        'T': 'A',
        'A': "T",
        'C': "G",
        'G': "C"
    };

    for(var key in valuePairs){
        for (var i = 0; i < baseArray.length; i++) {
            if(baseArray[i] === valuePairs[key]){
                var pair = [baseArray[i], key];
                completeArray = completeArray.push(pair);
            }
        }
    }
console.log(completeArray);
  return completeArray;
}

console.log(pairElement("GCG"));

// find each letters base pair

// turn string into an array

// create an object of value pairs

// return an array displaying correct base pairs
