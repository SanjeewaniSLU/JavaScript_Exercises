 'use strict';

const name = prompt ('Enter your name:');
let result;
result = Math.floor(Math.random()*4)+1;

if (result === 1) {
  document.querySelector('#index').innerHTML = name +',You are Gryffindor';
}
else if (result === 2){
  document.querySelector('#index').innerHTML = name  + ' ,You are Slytherin';
}
else if (result === 3) {
  document.querySelector('#index').innerHTML = name + ' ,You are Hufflepuff';
}
else if (result === 4){
  document.querySelector('#index').innerHTML = name + ' ,You are Ravenclaw';
}

