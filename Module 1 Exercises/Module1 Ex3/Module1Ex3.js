 'use strict';
function calculations() {
  const num1 = prompt("Enter the first integer:");
  const num2 = prompt("Enter the second integer:");
  const num3 = prompt("Enter the third integer:");

  const int1 = parseInt(num1);
  const int2 = parseInt(num2);
  const int3 = parseInt(num3);

  const sum = int1 + int2 + int3;
  const product = int1 * int2 * int3;
  const average = sum / 3;

  document.getElementById('index').innerHTML =`
      <p>Sum:  ${sum}</p>
      <p>Product:  ${product}</p>
      <p>Average:  ${average}</p>
  `;
}
calculations();