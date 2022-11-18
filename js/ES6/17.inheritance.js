"use strict"

class parent{
    title = 'khan'
}

class child extends parent{

    name = 'Imran '+ this.title
}

var obj = new child();
console.log(obj.name)   
