var arr = new Array(20);

console.log(arr)

arr.fill(0)
console.log(arr)



// mutable = object copied by reference not value


var x=[], y=[]

console.log(x===y)

var names=['John', 'Salam', 'Rik', 'Rimon']
console.log(names)


var nameupdated = names
console.log(nameupdated)

console.log(names==nameupdated)
console.log(names===nameupdated)

function updateName(names) 
{ 
    for (let i = 0; i < names.length; i++) {
        names[i] = i +'. ' + names[i];
    }  
    return names
}

var updatednames = updateName(names)
console.log(names)
console.log(updatednames)
console.log(names===updatednames)

