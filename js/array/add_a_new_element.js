var arr1 = [1,2,11]
var arr2 = [5,6,7,8]

arr1.splice(2,0,...arr2)

console.log(arr1) 

// [
//     1, 2,  5, 6,
//     7, 8, 11
//   ]