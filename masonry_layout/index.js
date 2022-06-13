const rippleBtn = document.querySelector(".rippleBtn");

function mousePosition(event, element){
    let posX = event.offsetX;
    let posY = event.offsetY;

    element.style.setProperty("--x", posX + "px");
    element.style.setProperty("--y", posY + "px");
}
rippleBtn.addEventListener("click", (e) =>{
mousePosition(e, rippleBtn);

rippleBtn.classList.add("pulse");
rippleBtn.addEventListener("animationend", () =>{
    rippleBtn.classList.remove("pulse");
},{
    once: true
});

});


