function greetings()
{
    console.log('Hello world after promise')
}

function promise_log()
{
    console.log('this is 3 seconds promise-this should be first')
}

async function promise() 
{ 
    let promise = new Promise( (resolve, reject) => {
        {
            setTimeout(() => {
                resolve( promise_log());
            }, 3000);
        }
    })

    await promise
    greetings()
}

promise()