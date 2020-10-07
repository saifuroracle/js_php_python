"use strict"

var obj = {
    name : {
        firstName: 'saifur',
        lastName: 'rahman'
    },
    gender : 'male',
    profession : 'software developer',
}

console.log(obj.gender)
console.log(obj['gender'])

console.log(obj.name.firstName)
console.log(obj['name']['firstName'])

// male
// male
// saifur
// saifur