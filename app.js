let menu = document.querySelector('.menu');
let closeBtn = document.querySelector('#close');
let burger = document.querySelector('#burger');

burger.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        burger.style.display = "none";
        closeBtn.classList.remove('open');
    }
})
closeBtn.addEventListener('click', () => {
    if (!menu.classList.contains('open')) {
        menu.classList.add('open');
        burger.style.display = "block";
        closeBtn.classList.add('open');
    }
})