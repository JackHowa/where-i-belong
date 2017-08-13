
function getIndexToIns(arr, num) {
  // sort the array 
  // .sort() doesn't work with integers 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // arr sort is destructive; don't need to redefine var 
  arr.sort(function(a, b) {
    return a - b;
  });

  // loop through the array
  for (var i = 0; i < arr.length; i++) {
    // compare the target num with indexed array
    // if indexed array value  is equal or greater than target num

    if (num <= arr[i]) {
      // then that index is either the right one or last right one 
      return i;
    } 
  }

  // return the length of array if target index is last 
  return arr.length;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));