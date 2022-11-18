//'use strict'
function test(a,a,a){
    console.log(arguments.callee.caller)
    
}

test('apple','orange','milk')

function outer(){
    test()
}
outer()
if(true){
    test()
}