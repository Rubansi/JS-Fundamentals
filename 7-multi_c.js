// Write a script that prints `x` times “C is fun”

// - Where `x` is the first argument of the script
// - If the first argument can’t be converted to an integer, print “Missing number of occurrences”
// - You must use `console.log(...)` to print all output
// - You are not allowed to use `var`
// - You can use only two `console.log`
// - You must use a loop (`while`, `for`, etc.)


const args = process.argv.slice(2);
const num = parseInt(args[0]);

if (isNaN(num)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < num; i++) {
    console.log("C is fun");
  }
}   