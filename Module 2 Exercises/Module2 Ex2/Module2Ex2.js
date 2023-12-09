'use strict';

const number = prompt('Enter how many number of participants');
let result = parseInt(number);
let names = [];
for(let i=1; i <= result; i++) {
    const name = prompt('Enter the name - '  + i);
    names.push(name);
}
names.sort();
const olElement = document.getElementById('names');
names.forEach(function(name) {
const liElement = document.createElement('li');
liElement.textContent = name;
olElement.appendChild(liElement);
})