function greetings()
{
    console.log('Hello world after promise')
}

async function promise() 
{ 
    setTimeout(function() {
        console.log('this is 3 seconds promise')
   }, 3000);

   greetings()
}

promise()