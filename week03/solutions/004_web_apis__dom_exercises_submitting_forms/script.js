// You can work here or download the template
/**
 * Add an event listener to handle form submission.
Validate that all fields are not empty.
If validation passes, output the form data to the console and display it in the p element as a list (ul)
If not output an error message in the p element, style it as an error. Maybe something red and flashy?
Make sure to toggle the error and success styles!
Clear the form fields
 * 
 */
const form = document.getElementById('contact-form');
const outputParagraph = document.getElementById('output');
const ulEl = document.createElement('ul');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;
  if (!name || !email || !message) {
    // handle empty fields
    outputParagraph.textContent = 'Please fill in all fields';
    outputParagraph.classList.remove('bg-green-500');
    outputParagraph.classList.add('bg-red-500');
  } else {
    console.log('eee', name, email, message);
    outputParagraph.innerHTML = '';
    ulEl.innerHTML = '';
    for (let index = 0; index < event.target.elements.length; index++) {
      const inputElement = event.target.elements[index];
      const liEl = document.createElement('li');
      liEl.textContent = inputElement.value;
      ulEl.appendChild(liEl);
    }
    outputParagraph.appendChild(ulEl);
    outputParagraph.classList.remove('bg-red-500');
    outputParagraph.classList.add('bg-green-500');
    form.reset();
  }
});
