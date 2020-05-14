// Open Nav for mobile

const navBtn = document.querySelector('.nav__btn');
const navImg = document.querySelector('.header__btn');
const navList = document.querySelector('.nav__list');
const topDiv = document.querySelector('.top');

const openNav = e => {
    e.preventDefault();

    // add class to open nav
    navList.classList.toggle('is-open');

    // add overlay to the screen
    topDiv.classList.toggle('overlay')

    // change the icon
    if (navList.classList.contains('is-open')){
        navImg.src = 'images/icon-close.svg'
    }else{
        navImg.src = 'images/icon-hamburger.svg'
    }

}


navBtn.addEventListener('click', openNav)


//form validation


const ctaForm = document.getElementById('form');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submit');
const errorMsg = document.querySelector('.error-msg');


const validateForm = e => {
    e.preventDefault();
    const emailInputVal = emailInput.value;


    if (emailInputVal === '' || emailInputVal === null){
        errorMsg.innerText = 'Email address cannot be empty';
        errorMsg.style.display = 'block';
        emailInput.style.color = '#F25F3A'
    } else if (!isEmail(emailInputVal)){
        errorMsg.innerText = 'Please insert a valid email';
        errorMsg.style.display = 'block'
        emailInput.style.color = '#F25F3A'
    }else{
        errorMsg.style.display = 'none';
    }

}


const isEmail = (email) =>{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

ctaForm.addEventListener('submit', validateForm);





