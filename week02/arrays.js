//arrays
const arr = ['a', 'b', 'c', 'd'];
console.log(arr[0]);
arr[2] = 'e'; //change the value of 3 to 33

// get the last value
console.log(arr[arr.length - 1]);
console.log(arr.at(-1));
//push pop shift and unshift
// add to the end
arr.push('t');
console.log(arr);
// add to the start
arr.unshift(0);
console.log(arr);

// remove from the end
const lastItem = arr.pop();
console.log(lastItem, arr);
// remove from start
const lastItem2 = arr.shift();
console.log(lastItem2, arr);

//reverse toReversed
// console.log('reversed', arr.reverse());
// console.log(arr);
const reversed = arr.toReversed();
console.log(reversed, arr);

//splice and toSpliced
const indexOfT = arr.indexOf('t');
arr.splice(indexOfT, 1, 'h');
console.log('arr after splice', arr);
const spliced = arr.toSpliced(0, 0, 'r');
console.log(arr, spliced);
//slice and join
console.log(arr.slice(1, 3));
console.log(arr.join(''));
console.log('hello world'.split(' '));
// for and for of in arrays
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// change 3 to 33
for (let i = 0; i < arr.length; i++) {
  console.log('the value is ', arr[i], 'at index', i);
  if (arr[i] === 'h') {
    arr[i] = 'z';
  }
}
console.log(arr);

// For of

for (const char of arr) {
  console.log(char);
}
