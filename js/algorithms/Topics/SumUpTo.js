// Summation of n numbers

let process_start_time = Date.now();

const sumUpToN = (n) => {
    return ( n * (n+1) )
}

console.log(sumUpToN(5))

let process_end_time = Date.now();
let execution_time = (process_end_time-process_start_time)/1000

console.log('Program execution_time =',execution_time,'Seconds');
