// Write a script that computes and prints a factorial

// - The first argument is integer (argument can be cast as integer) used for computing the factorial
// - Factorial of `NaN` is `1`
// - You must do it recursively
// - You must use a function
// - You must use `console.log(...)` to print all output
// - You are not allowed to use `var`

const args = process.argv.slice(2);
const num = parseInt(args[0]);

function factorial(n) {
  if (isNaN(n) || n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(num));    