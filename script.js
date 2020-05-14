const navBtn = document.querySelector('.nav__btn');
const navImg = document.querySelector('.header__btn');
const navList = document.querySelector('.nav__list');
const topDiv = document.querySelector('.top');

const openNav = e => {
    e.preventDefault();

    navList.classList.toggle('is-open');

    topDiv.classList.toggle('overlay')

    if (navList.classList.contains('is-open')){
        navImg.src = 'images/icon-close.svg'
    }else{
        navImg.src = 'images/icon-hamburger.svg'
    }

}


navBtn.addEventListener('click', openNav)


