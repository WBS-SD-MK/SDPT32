// For loop
for (let i = 0; i < 10; i++) {
  let message = `hello ${i}`;
  if (i === 5) {
    break;
  }
  console.log(message);
}
function checkNumber(n) {
  for (let i = 0; i < n; i++) {
    let message = `what is the number ${i}`;
    if (i === 2) {
      return;
    }
    console.log(message);
  }
}
checkNumber(8);
//While loop
let number = 0;
while (number < 10) {
  console.log(number);
  number++;
}

// DO While loop
let index = 0;
do {
  console.log(index);
  index++;
} while (index < 10);
console.log('before');
for (let i = 10; i > 0; i--) {
  console.log('what is this', i);
}
console.log('after');

let arr = ['a', 'b', 'c', 'd'];
for (let i = 0; i < arr.length; i++) {
  console.log(`${arr[i]} is at index ${i}`);
}
