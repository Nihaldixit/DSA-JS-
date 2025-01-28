function quickSort(array) {
  //Base case; return array if no. of element is < or = 1.
  if (array.length <= 1) {
    return array;
  }
  //choose a pivot; here 1st element is chosen.
  let pivot = array[0];
  //create two new array leftArray and rightArray.
  let leftArray = []; // has all the element < pivot
  let rightArray = []; // has all the element >= pivot, not pivot

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }
  // recusively call the quickSort() function until all the subarray is sorted.

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

let unsortedArray = [100, 50, 38, 45, 100, 34];
let sortedArray = quickSort(unsortedArray);
console.log(unsortedArray);
console.log(sortedArray);
