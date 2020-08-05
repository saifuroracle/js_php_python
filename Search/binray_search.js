// caller
var array = [5, 1, 2, 3, 4, 6]
console.log(binarySearch(array, 6))

// main algorithm code
// main algorithm code
function binarySearch(array, searchNumber) {
    arr = mergeSort(array)

    if (recursiveFunction(arr, searchNumber, 0, arr.length - 1))
        return 'Found'
    else
        return 'Not found'
}

function recursiveFunction(arr, searchNumber, start, end) {

    // Base Condition 
    if (start > end) return false;

    // Find the middle index 
    let mid = Math.floor((start + end) / 2);

    // Compare mid with given key searchNumber 
    if (arr[mid] === searchNumber) return true;

    // If element at mid is greater than searchNumber, 
    // search in the left half of mid 
    if (arr[mid] > searchNumber)
        return recursiveFunction(arr, searchNumber, start, mid - 1);
    else

    // If element at mid is smaller than searchNumber, 
    // search in the right half of mid 
        return recursiveFunction(arr, searchNumber, mid + 1, end);
}

// Merge takes two sorted arrays (left, right) and
// returns one array which contains the sorted numbers
// from left and right.

function merge(left, right) {
    var i = 0;
    var j = 0;
    var results = [];

    while (i < left.length || j < right.length) {
        if (i === left.length) {
            // j is the only index left
            results.push(right[j]);
            j++;
        } else if (j === right.length || left[i] <= right[j]) {
            // i is the only index left
            results.push(left[i]);
            i++;
        } else {
            results.push(right[j]);
            j++;
        }
    }
    return results;
}


// Merge sort uses the merge function in order to
// sort an array. Given an array of numbers in any
// order, merge sort should return an array that is
// sorted.
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    };

    var mid = Math.floor(arr.length / 2);
    var arrL = arr.slice(0, mid); // 0 to mid-1 => new array
    var arrR = arr.slice(mid, arr.length); // mid to length-1 => new array

    return merge(mergeSort(arrL), mergeSort(arrR));
}