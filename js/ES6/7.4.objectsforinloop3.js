"use strict"

var obj = {
    name : 'saifur rahman',
    gender : 'male',
    profession : 'software developer',
}

for (let props in obj) {
    console.log(props + ' : ' + obj[props])
}



// name : saifur rahman
// gender : male
// profession : software developer