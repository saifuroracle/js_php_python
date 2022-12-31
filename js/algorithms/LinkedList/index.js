// run with cmd = node '/media/saifur/projects/Projects/0.personal/js_php_python/js/algorithms/LinkedList/index.js'
// https://www.scaler.com/topics/linked-list-in-javascript/
// https://www.geeksforgeeks.org/implementation-linkedlist-javascript/

// Need 2 things first
// 1. Node
// 2. LinkedList

// Implementing a List Node 
// a list node contains two items: 1. the data and 2. the pointer to the next node. 
class Node
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

// const node1 = new Node(100)
// const node2 = new Node(200)
// node1.next = node2
// console.log(node1)
// console.log(node2)

// Implementing a Linked List
// if the head node is not passed, the head is initialised to null.
class LinkedList
{
    constructor(head = null)
    {
        this.head = head;
    }

    // Insert last node
    // add(element) – It adds an element at the end of the list. 
    add(element)
    {
        // create a new node
        let node = new Node(element);

        // to store current node
        let current;

        // if list is empty add the element and make it head
        if (this.head==null) 
        {
            this.head = node;   
        }
        else
        {
            current = this.head;

            // iterate to the end of the
            // list
            while(current.next)
            {
                current = current.next;
            }

            // add node
            current.next = node;
        }
    }

    
    // Insert ar index
    // Get at index   
    // Remove an index
    // Clear list

    // Print list data
    // prints the list items
    getList() 
    {
        let result = [];
        console.log(this.head);
        let current = this.head;
        while(current)
        {
            result.push(current.data)
            result.join(' => ')
            // console.log(current.data, ' = ', current);
            current = current.next
        }
        return result;
    }
}

let list = new LinkedList() 
list.add(1)
list.add(2)
list.add(3)

console.log(list.getList());