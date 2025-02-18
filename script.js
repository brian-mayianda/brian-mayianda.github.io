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