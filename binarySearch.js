// A function for binary search.
// target -> element to be searched
// array -> array where searching takes place.

function binarySearch(target, array) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    //console.log(mid);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
const sortedArray = [2, 4, 6, 8, 10, 12, 14];
const target = 10;
console.log(binarySearch(target, sortedArray));
