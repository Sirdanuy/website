const burger = document.querySelector('.menu-burger'),
      menu = document.querySelector('.menu'),
      body = document.querySelector('body'),
      loader = document.querySelector('.loader')

burger.addEventListener('click', () => {
    burger.classList.toggle('clickedBurger');
    menu.classList.toggle('d-none');
    body.classList.toggle('stopScroll')
});

window.addEventListener('click', (e) => {
    if(e.target == menu) {
        burger.classList.toggle('clickedBurger');
        menu.classList.toggle('d-none');
        body.classList.toggle('stopScroll')
    }
});


window.onload = function () {
    body.classList.add('stopScroll')
    setTimeout(() => {
        loader.classList.add('d-none');
        body.classList.remove('stopScroll')
        window.scrollTo(0, 0);
    }, 500);
}