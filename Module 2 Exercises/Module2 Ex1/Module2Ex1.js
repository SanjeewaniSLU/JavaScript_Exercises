'use strict';



let numbers = [];

for (let i = 0; i < 5; i++) {
    let num = parseFloat(prompt("Enter a number:"));
    numbers.push(num);
}

console.log("Numbers in reverse order:", numbers.reverse());

