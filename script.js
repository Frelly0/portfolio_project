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

// function togglePopup() {
//   document.getElementById('popup-1').classList.toggle('active');
// }
// function togglePopup() {
//   document.getElementById('popup-2').classList.toggle('active');
// }
// function togglePopup() {
//   document.getElementById('popup-3').classList.toggle('active');
// }
// function togglePopup() {
//   document.getElementById('popup-4').classList.toggle('active');
// }

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