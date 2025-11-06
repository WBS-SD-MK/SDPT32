// // const sayHello2 = function () {
// //   console.log('Hello2');
// // };
// sayHello();
// function sayHello() {
//   console.log('Hello');
// }

// (() => {
//   console.log('Hello directly');
//   // sayHello2();
// })();
// // sayHello();
// // sayHello2();

// let sayHello3 = () => {
//   console.log('Hello3');
// };

// // sayHello3();

const sum = (a, b = 0) => {
  console.log(a, b);
  return a + b;
};
console.log(sum(4, 6));
console.log(sum(4));
const result = sum(4, 5);
console.log(result);

console.log('2' == 2);
console.log('2' === 2);

const age = 25;
if (age > 18) {
  //do this block
  console.log('you can drive :)');
} else {
  console.log('sorry you cant drive');
}
console.log('we are outside the if');

const color = 'green';

if (color === 'red') {
  console.log(1);
} else if (color === 'blue') {
  console.log(2);
} else {
  console.log('wrong color');
}

switch (color) {
  case 'red':
    console.log('red');
    break;
  case 'green':
    console.log('green');
    break;
  default:
    console.log('wrong color');
    break;
}

// condition ? true  : false

// 1 > 2 ? console.log('2 is good') : 4 > 5 ? console.log('4 is ok') : console.log('oh nooo');

// isLoggedin?goToHomePage():goToLogin()

console.log(5 > 2 && 5 > 3); // T && T => true
console.log(5 > 2 && 5 < 3); // T && F => false
console.log(5 < 2 && 5 > 3); // F && T => false
console.log(5 < 2 && 5 < 3); // F && F => false

console.log(5 > 2 && 5 > 3); // T || T => true
console.log(5 > 2 && 5 < 3); // T || F => true
console.log(5 < 2 && 5 > 3); // F || T => true
console.log(5 < 2 && 5 < 3); // F || F => false
console.log(!true); // false
console.log(!false); // true
let userInput = '';
if (!userInput) {
  console.log('THIS is an empty string');
} else {
  console.log('whaaaat');
}
