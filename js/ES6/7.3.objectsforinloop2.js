"use strict"

var obj = {
    name : 'saifur rahman',
    gender : 'male',
    profession : 'software developer',
}

for (let props in obj) {
    console.log(obj[props])
}

// saifur rahman     
// male
// software developer