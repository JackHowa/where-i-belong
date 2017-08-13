
function getIndexToIns(arr, num) {
  // sort the array 
  var sortedArr = arr.sort(); 

  // define empty index variable 
  var targetIndex = 0; 

  // loop through the array
  for (var i = 0; i < sortedArr.length; i++) {
    // compare the target num with indexed array
    // if target num is equal or greater than indexed array value 

    if (num < sortedArr[i]) {
      // set the target index var to the i 
      targetIndex = i;
    } 
  }

  // return the target index var if target index is last 
  return targetIndex;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));