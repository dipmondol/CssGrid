// Start Toggle Mobile Menu
const menuToggleOpen = document.querySelector('.menu-toggle-open');
const menuToggleClose = document.querySelector('.menu-toggle-close');
const navMobileElement = document.querySelector('.nav-mob');


menuToggleOpen.addEventListener('click', () => navMobileElement.classList.add('active'));
menuToggleClose.addEventListener('click', () => navMobileElement.classList.remove('active'));
// End Toggle Mobile Menu

//Theme Block 

const bodyElement = document.body;
const themeToggleBtn = document.querySelector('.theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');
if(currentTheme){
    bodyElement.classList.add('theme-light');
}

themeToggleBtn.addEventListener('click', () =>{
    bodyElement.classList.toggle('theme-light');
    if(bodyElement.classList.contains('theme-light')){
        localStorage.setItem('currentTheme', 'themeActive');
    }
    else{
        localStorage.removeItem('currentTheme', 'themeActive');
    }
});
// Theme Block

// Start Drop Down Menu
document.addEventListener('click', element =>{
    const dropdownMenu = document.querySelector('.dropdown');
    if(element.target.classList.contains('dropdown-btn')){
        dropdownMenu.classList.add('active');
    }else{
        dropdownMenu.classList.remove('active');
    }
});

// End Drop Down Menu
