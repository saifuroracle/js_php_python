"use strict"

class myClass{

    constructor(a, b){
        this.num1 = a
        this.num2 = b
    }

    add(){
        return this.num1+this.num2
    }

    subtract(){
        return this.num1-this.num2
    }

}

 var obj = new myClass(4,4);  

 console.log(obj.add()) // 8
 console.log(obj.subtract())  // 0

