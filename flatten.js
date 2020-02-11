const flatten = function(inputArray) {
  let newArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if(Array.isArray(inputArray[i]) === true){
      inputArray[i].forEach(function(element) {
        newArray.push(element)
      });
    } else {
      newArray.push(inputArray[i]);
    }
  }
  return newArray;
}

module.exports = flatten;