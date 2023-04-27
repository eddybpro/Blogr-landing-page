const menuBtn = document.querySelector('.menu'),
closeBtn = document.querySelector('.close'),
navLinksBox = document.querySelector('.nav-links'),
navLinks = document.querySelectorAll('.link'),
navSubLinks = document.querySelectorAll('.nav-sub-link'),
loginBtn = document.querySelector('.login'),
signUpBtn = document.querySelector('.sign-up'),
arrowDown = document.querySelectorAll('.arrow-down');


window.addEventListener('resize',()=>{
    if(window.innerWidth > 768){
        arrowDown.forEach(el =>{
            el.src = 'images/icon-arrow-light.svg';
        })
    }else{
        arrowDown.forEach(el =>{
            el.src = 'images/icon-arrow-dark.svg';
        })
    }
})

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('none');
    closeBtn.classList.toggle('none');
    navLinksBox.classList.toggle('none');
})


function hideNavBox(){
    menuBtn.classList.toggle('none');
    closeBtn.classList.toggle('none');
    navLinksBox.classList.toggle('none');

}

closeBtn.addEventListener('click', hideNavBox)

navLinks.forEach(link =>{
    link.addEventListener('click', ()=>{
        link.lastElementChild.classList.toggle('none');
    })
})

navSubLinks.forEach(subLink =>{
    subLink.addEventListener('click', hideNavBox)
})

loginBtn.addEventListener('click', hideNavBox);
signUpBtn.addEventListener('click', hideNavBox);





















