projects = [
{
title: "Calculator",
description: "This is a calculator implemented with vanilla JavaScript.",
projectLink: "https://brian-mayianda.github.io/Vanilla-Javascript-Calculator/",
},

{
title: "Live user filter",
description: "This is a live user filter project implemented with vanilla JavaScript.",
projectLink: "https://brian-mayianda.github.io/Live-User-Filter/",
},

{
title: "Movies Site",
description: "This is a movies site implemented with vanilla JavaScript.",
projectLink: "https://brian-mayianda.github.io/Frontend-Movie-App"
}

]

const title = document.getElementById('project-title');
const description = document.getElementById('project-description');

const prevBtn = document.querySelector('.prev-btn');
const liveDemo = document.getElementById('live-demo');
const nextBtn = document.querySelector('.next-btn');

// Access the menu content container
const menuContent = document.getElementById('menu-content');

// When the user clicks on the button, toggle between hiding and showing the menu content 
const showMenuContent = () => {
  menuContent.classList.toggle('show');
}

// Close the menu if the user clicks outside of it
window.onclick = (e) => {
  if (!e.target.matches('#menu-icon')){
menuContent.classList.remove('show');
  }
}

// Making the current year span element dynamic with the JavaScript getFullYear method
const currentYear = document.getElementById('current-year');

const showCurrentYear = () => {
  currentYear.innerText = new Date().getFullYear();
}
showCurrentYear();

// set starting item (project)
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = projects[currentItem];
  title.textContent = item.title;
  description.textContent = item.description;
  liveDemo.setAttribute("href", item.projectLink);

});

// show project based on item
function showProject() {
  const item = projects[currentItem];
  title.textContent = item.title;
  description.textContent = item.description;
  liveDemo.setAttribute("href", item.projectLink);
  console.log(item.projectLink)
}


// show next project
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > projects.length - 1) {
    currentItem = 0;
  }
  showProject(currentItem);
});

// show prev project
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = projects.length - 1;
  }
  showProject(currentItem);
});