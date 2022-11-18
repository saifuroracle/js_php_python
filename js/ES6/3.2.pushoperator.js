"use strict"

let poorCountry = ['bd', 'ind'];

let richCountry = [ 'usa', 'uk'];

richCountry.push(poorCountry)

console.log(richCountry)

// [ 'usa', 'uk', [ 'bd', 'ind' ] ]