"use strict";
function helloWorld(name, val) {
    console.log(`Hello ${name}! ${val || ''}`);
}
helloWorld('Joe');
helloWorld('John', 5);
