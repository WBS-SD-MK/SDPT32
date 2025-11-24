// You can work here or download the template
/*
Select Elements and Log to Console:
Select the h1 element inside the .hero-content div and log it to the console.
Select all the a elements inside the .nav-list and log them to the console.
Select the .btn element and log it to the console.
Modify Styles:
Change the background color of the .header element to #b5651d.
Change the font size of the h1 element inside the .hero-content div to 3rem.
Change the text color of all a elements inside the .nav-list to #faf0e6.
Add Content:
Select the .hero-content div and add a new p element with the text “Open daily from 7 AM to 9 PM.” inside it.
*/

const heading = document.querySelector('.hero-content h1');
console.log(heading);
heading.style.fontSize = '3rem';

const navList = document.querySelectorAll('.nav-list a');
console.log(navList);
navList.forEach((link) => (link.style.color = '#faf0e6'));
const btn = document.querySelector('.btn');
console.log(btn);

const header = document.querySelector('.header');
console.log(header);
header.style.backgroundColor = '#b5651d';
const heroContent = document.querySelector('.hero-content');
//1 create element
const pEl = document.createElement('p');
// 2 set the text content
pEl.textContent = 'Open daily from 7 AM to 9 PM.';
pEl.style.color = '#e23f45';
pEl.style.fontSize = '1.5rem';
//3 append to parent
heroContent.appendChild(pEl);
