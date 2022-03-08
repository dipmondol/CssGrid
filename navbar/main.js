const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form  = document.querySelector("form");


menuBtn.onClick = ()=>{
    items.classList.add("active"); 
}
