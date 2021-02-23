function greetings()
{
    console.log('Hello world after promise')
}

function promise_log()
{
    setTimeout(() => {
        console.log('this is 3 seconds promise - this should be first')
    }, 3000);
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