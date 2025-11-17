const arr = [1, 2, 3, 4];
const output = [];
for (let index = 0; index < arr.length; index++) {
  output.push(arr[index] * 2);
}

console.log(output);

arr.forEach((value) => {
  console.log(value * 2);
});

const output2 = arr.map((value) => value * 2);
console.log(output2);

const even = arr.filter((value) => value % 2 === 0);
console.log(even, arr);

const sum = arr.reduce((acc, value, index) => {
  console.log(acc, value, index);

  return acc + value;
}, 0);
console.log('reduce', sum);
const sumEven = arr.reduce((acc, value, index) => {
  if (value % 2 === 0) {
    return acc + value;
  }
  return acc;
}, 0);
console.log('reduce', sumEven);
let sum2 = 0;
for (let index = 0; index < arr.length; index++) {
  // sum2 += arr[index];
  sum2 = sum2 + arr[index];
}
console.log(sum2);
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Carol', age: 35 },
];

console.log(people.filter((person) => person.name === 'Bob').length > 0);
console.log(people.some((person) => person.name === 'Bob'));
console.log(people.every((person) => person.name === 'Bob'));
