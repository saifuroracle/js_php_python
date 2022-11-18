"use strict"

var mySet = new Set(['a','b','c', 'd']);

if (mySet.has('r')) {
    console.log('exist')
} else {
    console.log('doesn\'t exist')
}
