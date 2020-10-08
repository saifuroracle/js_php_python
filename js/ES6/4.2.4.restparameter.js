"use strict"

function calculation(...restparams) {
    console.log(restparams[2])
}
calculation(1,2,3,4,5,6, 'a', 'b')

// 3