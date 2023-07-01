const projectContainer = document.querySelector('.works');

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

const projects = [
  {
    name: 'Tonic',
    title: 'CANOPY',
    decription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './image/one.png',
    tech: ['html','css','javaScript'],
    version: 'www.google.com',
    source: 'www.github.com'
  },
  {
    name: 'Multi-Post Stories',
    title: 'FACEBOOK',
    decription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: './image/two.png',
    tech: ['html','Ruby on rails','css','javaScript'],
    version: 'www.google.com',
    source: 'www.github.com'
  },
  {
    name: 'Facebook 360',
    title: 'FACEBOOK',
    decription: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    image: './image/three.png',
    tech: ['html','Ruby on rails','css','javaScript'],
    version: 'www.google.com',
    source: 'www.github.com'
  },
  {
    name: 'Uber Navigation',
    title: 'Uber',
    decription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: './image/four.png',
    tech: ['html','Ruby on rails','css','javaScript'],
    version: 'www.google.com',
    source: 'www.github.com'
  }
];

let html = '';

projects.forEach((project) => {
  const projectTags = project.tech
  const tags = projectTags.map((tag) => `<li><a href="#">${tag}</a></li>`).join('')
  html += `      <nav class="card" id="one"  data-name="p-1">
  <div id="img1" style='background-image: url(${project.image});'></div>
  <div class="left-bloks" id="sub-left-block">
    <div class="primary">
      <h1>${project.name}</h1>
      <div class="frame">
        <p id="font">${project.title}</p>
        <img src="./image/Counter.png" alt="counter" />
        <h6>Back End Dev</h6>
        <img src="./image/Counter.png" alt="counter" />
        <h6>2015</h6>
      </div>
    </div>
    <p class="text">
      ${project.decription}
    </p>
    <ul>
      ${tags}
    </ul>
    <div class="action">
      <button type="button" class="btn popup-btn" onclick="togglePopup()"><p>See project</p></button>
    </div>
  </div>
</nav>`;
});

projectContainer.innerHTML = html;


let previewContainer = document.querySelector('.card-preview');
let previewBox = document.querySelector('.popup');

const projectTitle = document.querySelector('.project-title')
const allPopup = document.querySelectorAll('.popup-btn')
const mainProjectTitle = document.querySelector('.main-project-title')
const popImage = document.querySelector('.pop-image')

allPopup.forEach((pop,index) => {
  pop.addEventListener('click',() => {
    previewContainer.style.display = 'flex'
    const cardData = projects[index]
    const cardImage = cardData.image
    projectTitle.innerHTML = cardData.title
    mainProjectTitle.innerHTML = cardImage.name
    popImage.innerHTML = cardData.image
  })
})

document.querySelector('.closebtn').addEventListener('click', () => {
  previewContainer.style.display = 'none';
})



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