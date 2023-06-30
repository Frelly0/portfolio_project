const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  document.querySelector('.desktop').classList.toggle('show');
});

const navButton = document.querySelector('#nav-button');
navButton.addEventListener('click', () => {
  document.querySelector('.desktop').classList.toggle('show');
});

const linkButtons = document.querySelectorAll('.links');
linkButtons.forEach((linkButton) => {
  linkButton.addEventListener('click', () => {
    document.querySelector('.desktop').classList.toggle('show');
  });
});
// END OF HAMBURGER MENU

// Form Validation script.js
const form = document.getElementById('myform');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const emailValue = emailInput.value;
  if (emailValue.toLowerCase() === emailValue) {
    // Email is already in lowercase, form submission is allowed
    form.submit();
  } else {
    // Email is not in lowercase, display error message
    errorMessage.textContent = 'Email must be in lowercase.';
    errorMessage.style.display = 'block';
  }
});



const previewContainer = document.querySelector('.card-preview');
const previewBox = previewContainer.querySelectorAll('.popup');

document.querySelectorAll('.works .card').forEach((product) => {
  product.onclick = () => {
    previewContainer.style.display = 'flex';
    const name = product.getAttribute('data-name');
    previewBox.forEach((preview) => {
      const target = preview.getAttribute('data-target');
      if (name === target) {
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector('.closebtn').onclick = () => {
    close.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});