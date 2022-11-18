"use strict"

var func = function(...restParams){
    console.log(restParams);
}

func(1,2,3,4,5,6)

// [ 1, 2, 3, 4, 5, 6 ]