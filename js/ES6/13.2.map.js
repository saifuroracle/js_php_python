"use strict"

var myMap = new Map();


myMap.set("key1", "bangladesh")
myMap.set("key2", "india")
myMap.set("key3", "nepal")
myMap.set("key4", "bhutan")


if (myMap.has("key3")) {
    console.log("yes")
}
else{
    console.log("no")
}