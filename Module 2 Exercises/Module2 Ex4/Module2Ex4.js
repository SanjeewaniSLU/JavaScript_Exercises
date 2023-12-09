
let numbers = [];

let inputNumber;
do {
  inputNumber = parseFloat(prompt("Enter a number (enter 0 to stop):"));
  if (!isNaN(inputNumber)) {
    numbers.push(inputNumber);
  } else {
    alert("Invalid input. Please enter a valid number.");
  }
} while (inputNumber !== 0);

numbers.sort(function(a, b) {
  return b - a;
});

console.log("Numbers from largest to smallest:", numbers);
