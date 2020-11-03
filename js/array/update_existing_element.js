var employees = [
    {id:1, name: 'john'},
    {id:2, name: 'Rambo'},
    {id:3, name: 'doe'},
    {id:4, name: 'joli'},
]

var changeId = 2


for (let i = 0; i < employees.length; i++) 
{
    if (employees[i].id==changeId) 
    {
        employees[i].name='name changed'
        break;
    }
}

console.log(employees)