let btn = document.querySelector(".btn");
let menu = document.querySelector("#menu");
let erroBtn = document.querySelector('#errorBtn');
let emptyLink = document.querySelectorAll('#link');

for (let i = 0; i < emptyLink.length; i++) {
    emptyLink[i].addEventListener('click', () => {
        error = document.getElementById('errorBlock');
        error.classList.add('showError');
    });
}

btn.addEventListener('click', () => {
    menu.classList.toggle("show");
});

erroBtn.addEventListener('click', () => {
    error.classList.remove('showError');
});


