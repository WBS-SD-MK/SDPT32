// sum.js
// Get two numbers from the command line
const args = process.argv.slice(2);
// Check if the user provided exactly two numbers

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomArbitrary(1, 100));
