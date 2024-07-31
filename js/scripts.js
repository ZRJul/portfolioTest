
let toggle = document.getElementById('toggle');
let box = document.getElementById('menu');
let menuLinks = document.querySelectorAll('#menu a');
let toggleCheckbox = toggle.querySelector('input[type="checkbox"]');

toggle.addEventListener('click', function() {
    box.classList.toggle('active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        box.classList.remove('active');
        toggleCheckbox.checked = false; // Сбрасываем состояние чекбокса
    });
});

//animation
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(params){
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active');
                }
            }
        }
    }

    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.window.scrollY || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(()=> {
        animOnScroll();
    }, 300)

}
document.addEventListener('DOMContentLoaded', function () {
    const swiperWrapper = document.querySelector('.icon_swiper_wrapper');
    const slides = document.querySelectorAll('.icon_swiper_slide');
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        swiperWrapper.appendChild(clone);
    });

    let swiper = new Swiper('.icon_swiper', {
        loop: true,
        freeMode: true,
        slidesPerView: 6,
        spaceBetween: 30,
        speed: 2000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        breakpoints:{
            320:{
                slidesPerView: 2,
            },
            480:{
                slidesPerView: 3,
            },
            992:{
                slidesPerView: 6,
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const swiperWrapper = document.querySelector('.ticker_swiper_wrapper');
    const slides = document.querySelectorAll('.ticker_swiper_slide');
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        swiperWrapper.appendChild(clone);
    });

    let swiper = new Swiper('.ticker_swiper', {
        loop: true,
        freeMode: true,
        slidesPerView: 7,
        spaceBetween: 30,
        speed: 2000,
        loopAdditionalSlides: 7,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        breakpoints:{
            320:{
                slidesPerView: 2,
            },
            480:{
                slidesPerView: 4,
            },
            992:{
                slidesPerView: 7,
            }
        },
        on: {
            init: function () {
                this.autoplay.start();
            },
            transitionEnd: function() {
                this.wrapperEl.style.transitionTimingFunction = 'linear';
            }
        }
    });
});

//modal
const modalLinks = document.querySelectorAll('.modal_link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock_padding')
const header = document.querySelector('header');

let unlock = true

const timeout = 800;

if (modalLinks.length > 0) {
    for (let index = 0; index < modalLinks.length; index++) {
        const modalLink = modalLinks[index];
        modalLink.addEventListener("click", function (e) {
            const modalName = modalLink.getAttribute('href').replace('#','');
            const curentModal = document.getElementById(modalName);
            modalOpen (curentModal);
            e.preventDefault();
        });
    }
}

const modalCloseIcon = document.querySelectorAll('.close_modal');
if (modalCloseIcon.length > 0) {
    for (let index = 0; index < modalCloseIcon.length; index++){
        const el = modalCloseIcon[index];
        el.addEventListener('click', function (e){
            modalClose(el.closest('.modal'));
            e.preventDefault();
        });
    }
}

function modalOpen(curentModal) {
    if (curentModal && unlock) {
        const modalActive = document.querySelector('.modal.open');
        if (modalActive) {
            modalClose(modalActive, false);
        } else {
            bodyLock();
        }
        curentModal.classList.add('open');
        header.classList.add('hidden');
        curentModal.addEventListener("click", function (e) {
            if (!e.target.closest('.modal_content')){
                modalClose(e.target.closest('.modal'));
            }
        });
    }
}

function modalClose (modalActive, doUnlock = true){
    if (unlock) {
        modalActive.classList.remove('open');
        header.classList.remove('hidden');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}


function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }

    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function (){
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function (){
        for (let index = 0; index < lockPadding.length; index++){
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
