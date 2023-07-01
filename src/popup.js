export const projects = [
  {
    name: 'Topic',
    feature: 'CANOPY',
    background: 'Back End Dev',
    year: '2015',
    image: 'images/desktop/tonic-project-desktop.svg',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis voluptates sint tempore dolores veniam quae? Error temporibus repudiandae obcaecati similique placeat nesciunt ab necess. <br> <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maxime dolorem fuga odit voluptate ipsam laudantium. Excepturi eveniet assumenda nam consequuntur culpa?',
    tool1: 'html',
    tool2: 'css',
    tool3: 'javascript',
    linkLive: 'https://frelly0.github.io/portfolio_project/',
    linkSource: 'https://github.com/Frelly0',
  },
  {
    name: 'Multi-Post Stories',
    feature: 'FACEBOOK',
    background: 'Full Stack Dev',
    year: '2015',
    image: 'images/desktop/multi-post-stories-project.svg',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis voluptates sint tempore dolores veniam quae? Error temporibus repudiandae obcaecati similique placeat nesciunt ab necess. <br> <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maxime dolorem fuga odit voluptate ipsam laudantium. Excepturi eveniet assumenda nam consequuntur culpa?',
    tool1: 'html',
    tool2: 'css',
    tool3: 'javascript',
    linkLive: 'https://frelly0.github.io/portfolio_project/',
    linkSource: 'https://github.com/Frelly0',
  },
  {
    name: 'Facebook 360',
    feature: 'FACEBOOK',
    background: 'Full Stack Dev',
    year: '2015',
    image: 'images/desktop/facebook-360-project.svg',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis voluptates sint tempore dolores veniam quae? Error temporibus repudiandae obcaecati similique placeat nesciunt ab necess. <br> <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maxime dolorem fuga odit voluptate ipsam laudantium. Excepturi eveniet assumenda nam consequuntur culpa?',
    tool1: 'html',
    tool2: 'css',
    tool3: 'javascript',
    linkLive: 'https://frelly0.github.io/portfolio_project/',
    linkSource: 'https://github.com/Frelly0',
  },
  {
    name: 'Uber Navigation',
    feature: 'Uber',
    background: 'Lead Developer',
    year: '2018',
    image: 'images/desktop/uber-navigation-project.svg',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis voluptates sint tempore dolores veniam quae? Error temporibus repudiandae obcaecati similique placeat nesciunt ab necess. <br> <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maxime dolorem fuga odit voluptate ipsam laudantium. Excepturi eveniet assumenda nam consequuntur culpa?',
    tool1: 'html',
    tool2: 'css',
    tool3: 'javascript',
    linkLive: 'https://frelly0.github.io/portfolio_project/',
    linkSource: 'https://github.com/Frelly0',
  },
];

const startingPoint = document.querySelector('.hero');

export function createModal() {
  startingPoint.insertAdjacentHTML(
    'afterend',
    `<div class='overlay'>
    <section class='modal'>
    <div class='modal__header flex'>
    <h2 class='project-name fw-700 fz-32 lh-44 clr-n-800'></h2>
    <img  class='closeModal' src='images/desktop/close.svg' alt='close icon'></img>
    </div>
    <div class='modal__feature flex'>
    <p class="project-feature fw-600 fz-8 lh-16 clr-n-600"></p>
    <ul class=" flex">
    <li class=" project-background fw-600 fz-13 lh-16 clr-n-500"></li>
    <li class="project-year fw-600 fz-13 lh-16 clr-n-500"> </li>
    </ul></div>
    <div class='image-project'><img class='modal__image project-image' src='' alt='project image'></img></div>
    <ul class='modal__dsc ul flex'>
    <li class='modal__dsc__first'><p class='project-description fw-400 fz-15 lh-24 clr-n-600'></p></li>
    <li class="modal__dsc__second flex">
    <div class='flex'>
    <p class="project-tool1 fw-500 fz-12 lh-16 clr-p-400 bg-p-50"></p>
    <p class="project-tool2 fw-500 fz-12 lh-16 clr-p-400 bg-p-50"></p>
    <p class="project-tool3 fw-500 fz-12 lh-16 clr-p-400 bg-p-50"></p>
    </div>
    <ul class='modal__btn ul flex'>
    <li>
    <a href='' class="btn link project-linkLive fw-500 fz-17 lh-24 clr-p-500 bg-white">See Live</a>
    </li>
    <li>
    <a href='' class="btn link project-linkSource fw-500 fz-17 lh-24 clr-p-500 bg-white">See Source</a>
    </li>
    </ul>
    </li>
    </ul>
    </section>
    </div>`,
  );
}
