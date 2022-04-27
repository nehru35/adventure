let btn = document.querySelector(".btn");
let menu = document.querySelector("#menu");

function showMenu() {
    menu.classList.toggle("show");
}

btn.addEventListener('click', showMenu);