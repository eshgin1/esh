const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('menu__close');

hamburger.addEventListener('click', () =>{
    menu.classList.add('active');
});

closeElem.addEventListener('click', () =>{
    menu.classList.remove('active');
});

const counter = document.querySelectorAll('.skills__procent'),
    lines = document.querySelectorAll('.skills__divider span');

counter.forEach( (item, i) =>{
    lines[i].style.width = item.innerHTML;
});  