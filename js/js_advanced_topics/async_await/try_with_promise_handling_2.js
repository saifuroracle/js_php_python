function greetings()
{
    console.log('Hello world after promise')
}

function promise_log()
{
    console.log('this is 3 seconds promise - this should be first')
    console.log('this is 3 seconds promise - this should be first')
    console.log('this is 3 seconds promise - this should be first')
    console.log('this is 3 seconds promise - this should be first')
    console.log('this is 3 seconds promise - this should be first')
    console.log('this is 3 seconds promise - this should be first')
}

async function promise() 
{ 
    let promise = new Promise( (resolve, reject) => {
        resolve( promise_log());
    })

    await promise
    greetings()
}

promise()