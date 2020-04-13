function HiddenMenu () {
    const openBtn = document.querySelector('.header__nav--open'),
        closeBtn = document.querySelector('.header__nav--close'),
        menu=document.querySelector('.header__nav');
    let home=document.querySelector('.home');
        
    openBtn.addEventListener('click', () => {
        menu.classList.toggle('nav');
        home.classList.toggle('overlay');
    })
    closeBtn.addEventListener('click', () => {
        menu.classList.toggle('nav');
        home.classList.toggle('overlay');
        
    })
}

// function scrolling() {
//     const takePart = document.querySelector('.main__btn'),
//         arrow = document.querySelector('.main__arrow'),
//         about = document.querySelector('.about'),
//         form = document.querySelector('.registration');

//     takePart.addEventListener('click', () => {
//         form.scrollIntoView({block: "center", inline: "center"});
//     })
//     arrow.addEventListener('click', () => {
//         about.scrollIntoView({block: "center", inline: "center"});
//     })
// }

let phone = document.querySelector(".phone");
let phoneMask = new Inputmask("+7([9]{3})[9]{3}-[9]{2}-[9]{2}");
phoneMask.mask(phone);

console.log(phone);

HiddenMenu();
// scrolling();