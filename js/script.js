let btn = document.querySelector(".btn");
let menu = document.querySelector("#menu");

function showMenu() {
    menu.classList.toggle("show");
}

function noLink() {
    window.alert("No link")
}

btn.addEventListener('click', showMenu);


// Melhorar o codigo abaixo

let msg1 = document.getElementById('link1');
let msg2 = document.getElementById('link2');
let msg3 = document.getElementById('link3');
let msg4 = document.getElementById('link4');

let more1 = document.querySelector('#more1');
let more2 = document.querySelector('#more2');
let more3 = document.querySelector('#more3');
let more4 = document.querySelector('#more4');
let more5 = document.querySelector('#more5');

link1.addEventListener('click', noLink);
link2.addEventListener('click', noLink);
link3.addEventListener('click', noLink);
link4.addEventListener('click', noLink);

more1.addEventListener('click', noLink);
more2.addEventListener('click', noLink);
more3.addEventListener('click', noLink);
more4.addEventListener('click', noLink);
more5.addEventListener('click', noLink);