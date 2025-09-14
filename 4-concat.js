// Write a script that prints two arguments passed to it, in the following format: “ is ”

// - You must use `console.log(...)` to print all output
// - You are not allowed to use `var`

const args = process.argv.slice(2);
console.log(args[0] + " is " + args[1]);    