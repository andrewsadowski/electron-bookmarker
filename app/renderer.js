const newLinkUrl = document.querySelector('#new-link-url');
const newLinkSubmit = document.querySelector('.new-link-form--submit');
const newLinkForm = document.querySelector('.new-link-form');

newLinkUrl.addEventListener('keyup', () => {
  newLinkSubmit.disabled = !newLinkUrl.validity.valid;
});

newLinkForm.addEventListener('submit', () => {
  event.preventDefault();

  const url = newLinkUrl.value;
  fetch(url)
    .then(response => response.text())
    .then(response => console.log(response))
    .catch(error => console.error(error));
});

// const os = require('os');
// const fs = require('fs');

// const files = fs.readdirSync(os.homedir());

// console.log(files);

// files.forEach(name => {
//   const file = document.createElement('li');
//   file.textContent = name;
//   document.body.appendChild(file);
// });
