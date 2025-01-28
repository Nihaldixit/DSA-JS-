//A helper function named merge() to merge the sorted array into
//sorted format.

function merge(leftArray, rightArray) {
  let result = [];
  let i = 0,
    j = 0;
  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      result.push(leftArray[i]);
      i++; //move to next element for comparison
    } else {
      result.push(rightArray[j]);
      j++; //move to next element for comparison
    }
  }

  //pushing rest of element from leftArray into result.
  while (i < leftArray.length) {
    result.push(leftArray[i]);
    i++;
  }

  //pushing rest of element from rightArray into result.
  while (j < rightArray.length) {
    result.push(rightArray[j]);
    j++;
  }
  return result;
}

function mergeSort(array) {
  //base case for array with <= 1 element.
  if (array.length <= 1) {
    return array;
  }
  //splitting the array into two subarrays
  const mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  //sorting the left and right halves recursively
  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  //merging the sorted two halves.
  return merge(sortedLeft, sortedRight);
}

let unsortedArray = [12, 34, 532, 454, 6434, 245, 45, 44, 5555];
let sortedArray = mergeSort(unsortedArray);
console.log(unsortedArray);
console.log(sortedArray);