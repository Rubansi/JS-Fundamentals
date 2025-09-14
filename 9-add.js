// Write a script that prints the addition of 2 integers

// - The first argument is the first integer
// - The second argument is the second integer
// - You have to define a function with this prototype: `function add(a, b)`
// - You must use `console.log(...)` to print all output
// - You are not allowed to use `var`

const args = process.argv.slice(2);
const num1 = parseInt(args[0]);
const num2 = parseInt(args[1]);

function add(a, b) {
  return a + b;
}

if (isNaN(num1) || isNaN(num2)) {
  console.log("NaN");
} else {
  console.log(add(num1, num2));
}   