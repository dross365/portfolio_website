// DARK MODE SETTINGS
let darkMode = false;

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const skillCard = document.querySelectorAll('.card');
const githubButtons = document.querySelectorAll('.github-button');
const liveDemoButtons = document.querySelectorAll('.live-demo');
const githubCardIcon = document.querySelectorAll('#github-card-icon');
const githubSkillIcon = document.querySelectorAll('#github-skill-icon');

const changeToDarkMode = function() {
  if (darkMode === false) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'yellow';
    darkMode = true;
    skillCard.forEach(card => {
      card.style.backgroundColor = '#40578C';
    })
    githubButtons.forEach(item => {
      item.style.color = 'yellow';
      item.style.backgroundColor = '#5775bd';
    })
    liveDemoButtons.forEach(item => {
      item.style.color = 'yellow';
      item.style.backgroundColor = '#5775bd';
    })
    githubCardIcon.forEach(icon => {
      icon.style.color = 'yellow';
    })
    githubSkillIcon.forEach(icon => {
      icon.style.color = 'black';
    })

    darkButton.style.color = 'green';
    lightButton.style.color = 'red';
  }
}

const changeToLightMode = function() {
  if(darkMode === true) {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    darkMode = false;

    skillCard.forEach(card => {
      card.style.backgroundColor = '';
    })
    githubButtons.forEach(item => {
      item.style.color = '';
      item.style.backgroundColor = '';
    })
    liveDemoButtons.forEach(item => {
      item.style.color = '';
      item.style.backgroundColor = '';
    })
    githubCardIcon.forEach(icon => {
      icon.style.color = '';
    })
    githubSkillIcon.forEach(icon => {
      icon.style.color = '';
    })

    darkButton.style.color = '';
    lightButton.style.color = '';
  }
}

darkButton.addEventListener('click', changeToDarkMode);
lightButton.addEventListener('click', changeToLightMode);

const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const hiddenProjectsButton = document.getElementById('hidden-projects');
const projectsSection = document.getElementById('projects')
const hiddenAboutButton = document.getElementById('hidden-about');
const aboutSection = document.getElementById('about-me');
const hiddenSkillsButton = document.getElementById('hidden-skills');
const skillsSection = document.getElementById('skills');
const hiddenContactButton = document.getElementById('hidden-contact');
const contactSection = document.getElementById('contact-me');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})

const scrollToViewProjects = function() {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
  projectsSection.scrollIntoView();
}
const scrollToViewAbout = function() {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
  aboutSection.scrollIntoView();
}
const scrollToViewSkills = function() {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
  skillsSection.scrollIntoView();
}
const scrollToViewContact = function() {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
  contactSection.scrollIntoView();
}

hiddenProjectsButton.addEventListener('click', scrollToViewProjects);
hiddenAboutButton.addEventListener('click', scrollToViewAbout);
hiddenSkillsButton.addEventListener('click', scrollToViewSkills);
hiddenContactButton.addEventListener('click', scrollToViewContact);

