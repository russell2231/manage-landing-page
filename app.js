const navToggle = document.querySelector('.nav-toggle');
const form = document.querySelector('#form');

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


navToggle.addEventListener('click', () => {
  const overlay = document.querySelector('.overlay');
  const header = document.querySelector('header');

  overlay.classList.toggle('active');
  header.classList.toggle('active');
})

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.querySelector('#email').value;

  if (!validateEmail(email)) {
    form.classList.add('error');
  } else {
    form.innerHTML = `<p>Ok, we will send you updates</p>`;
  }
})

