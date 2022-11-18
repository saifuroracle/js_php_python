//  array.splice(index, howmany, item1, ....., itemX)

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr)

var arr_splice = arr.splice(1,5)  

console.log(arr_splice) // removed items from array
console.log(arr)  // after removed items, remaining items 
// arr[1]=2
// arr[2]=3
// arr[3]=4
// arr[4]=5
// arr[5]=6

// start = 0 
// end = arr[5] is included