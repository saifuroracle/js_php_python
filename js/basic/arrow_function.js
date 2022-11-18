// syntax
    // function () {}
    // () = arguments
    // {} = function body codes

    // ======convertd to=======

// ( ) => {}
// {} is option if body is 1 line code

let message = msg => 'hello '+ msg
console.log(message('saifur'))  // hello saifur


// arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
let additions = (...numbers) =>  numbers.reduce( (prev, curVal) => prev+curVal)
console.log(additions(1,2,3,4,5,6))   // 21
let additions2 = (...numbers) =>  numbers.reduce( (prev, curVal) => prev+curVal, 0 )
console.log(additions2(1,2,3,4,5,6))   // 21
let additions3 = (...numbers) =>  numbers.reduce( (prev, curVal) => prev+curVal, 100 )
console.log(additions3(1,2,3,4,5,6))   // 121
