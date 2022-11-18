var arr = [50,45,100,30];

let largestNumber = 0;
for (let i = 0; i < arr.length; i++) 
{
    if(arr[i]>largestNumber)
    {
        largestNumber=arr[i];
    }
}

console.log('Largest number = ', largestNumber, 'in array of', arr)