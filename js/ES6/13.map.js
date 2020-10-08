"use strict"

var myMap = new Map();

console.log(myMap)
// Map {}

myMap.set("key1", "bangladesh")
console.log(myMap)
// Map { 'key1' => 'bangladesh' }

myMap.set("key2", "india")
console.log(myMap)
// Map { 'key1' => 'bangladesh', 'key2' => 'india' }

console.log(myMap.values())
// [Map Iterator] { 'bangladesh', 'india' }

console.log(myMap.keys())
// [Map Iterator] { 'key1', 'key2' }


for (var myKey of myMap.values()) {
    console.log(myKey)
}
// bangladesh
// india

