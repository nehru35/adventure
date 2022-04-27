let btn = document.querySelector(".btn");
let menu = document.querySelector("#menu");
let btns = null;

let attr = document.querySelectorAll("empty-link");
let learn = document.getElementsByClassName("learn-more");

function showMenu() {
    menu.classList.toggle("show");
}

function noLink() {
    window.alert("No link")
}

btn.addEventListener('click', showMenu);
attr.addEventListener('click', noLink)
learn.addEventListener('click', noLink)