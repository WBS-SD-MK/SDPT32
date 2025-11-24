// You can work here or download the template
// Array of 10 random tasks as strings
const tasks = [
  'Complete the project',
  'Attend the meeting',
  'Write a report',
  'Review the code',
  'Fix the bugs',
  'Update the documentation',
  'Plan the next sprint',
  'Conduct user testing',
  'Optimize the performance',
  'Design',
  'new item',
];
/*
HTML Structure:
Use the provided HTML structure which includes three buttons and an empty ul element.
JavaScript Tasks:
Attach an event to the first button to create a new li in the ul with a random task from the provided array.
Make sure you scroll to the last task so the last one is always visible!
Attach an event to the second button to display an alert with a custom message.
Attach an event to the third button to output a custom message to the console.
What would happen if instead of element.addEventListener('click', listener) you would  do element.onclick = listener? What are the differences?
*/
const AddItemBtn = document.getElementById('add-item-btn');
const alertBtn = document.getElementById('alert-btn');
const consoleBtn = document.getElementById('console-btn');
const itemList = document.getElementById('item-list');

AddItemBtn.addEventListener('click', () => {
  const liEl = document.createElement('li');
  liEl.textContent = tasks[Math.floor(Math.random() * tasks.length)];
  itemList.appendChild(liEl);
  itemList.scrollTop = itemList.scrollHeight;
});

alertBtn.addEventListener('click', () => {
  alert(tasks[Math.floor(Math.random() * tasks.length)]);
});
consoleBtn.onclick = () => {
  console.log('333434', tasks[Math.floor(Math.random() * tasks.length)]);
};
consoleBtn.onclick = () => {
  console.log('this should work!', tasks[Math.floor(Math.random() * tasks.length)]);
};
// });
// consoleBtn.addEventListener('click', () => {
//   console.log('whaaaat');
// });
