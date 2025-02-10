// Access the menu content container
const menuContent = document.getElementById('menu-content');

// When the user clicks on the button, toggle between hiding and showing the menu content 
const showMenuContent = () => {
  menuContent.classList.toggle('show');
}


// Close the menu if the user clicks outside of it

window.onclick = (e) => {
  if (!e.target.matches('.menu-btn')){
menuContent.classList.remove('show');
  }
}

// Below is another way to implement the above code (to close the menu if the user clicks outside of it)

/*

window.onclick = (e) => {
  if (!e.target.matches('.menu-btn')) {
    let dropdowns = document.getElementsByClassName("menu-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

*/

// Making the year span element dynamic with javascript getFullYear method
const currentYear = document.getElementById('current-year');

const showCurrentYear = () => {
  currentYear.innerHTML = new Date().getFullYear();
  // console.log(new Date().getFullYear())
}
showCurrentYear();