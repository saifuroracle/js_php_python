"use strict"

function calculation(...restparams) {
    let sum = 0;

    console.log(restparams)

    restparams.forEach(element => {
        sum+=element
    });

    console.log(sum)
}
calculation(1,2,3,4,5,6)

// [ 1, 2, 3, 4, 5, 6 ]
// 21