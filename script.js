const navContainer = document.querySelector(".remove-nav");
const navCloseButton = document.querySelector(".nav-close-message");

if (navCloseButton) {
    navCloseButton.addEventListener("click", () => {
        navContainer.classList.add("d-none");
    });
}

var menuButton = document.querySelector('.menu-button');
var closeMenuButton = document.getElementById('close-menu');
var swiperOverlay = document.getElementById('swiperOverlay');
var contentSlide = document.querySelector('.app-content-slide');

var swiper = new Swiper('.app-swiper', {
    slidesPerView: 'auto',
    initialSlide: 1,
    resistanceRatio: 0,
    speed: 300,
    slideToClickedSlide: false,
    on: {
        slideChangeTransitionStart: function () {
            if (this.activeIndex === 0) {
                contentSlide.classList.add('drawer-open');
            } else {
                contentSlide.classList.remove('drawer-open');
            }
        },
    },
});

var openMenu = function () {
    swiper.slidePrev();
};

var closeMenu = function () {
    swiper.slideNext();
};

if (menuButton) {
    menuButton.addEventListener('click', openMenu);
}
if (closeMenuButton) {
    closeMenuButton.addEventListener('click', closeMenu);
}
if (swiperOverlay) {
    swiperOverlay.addEventListener('click', closeMenu);
}

function handleResize() {
    if (window.innerWidth >= 992) {
        if (swiper.activeIndex === 0) {
            swiper.slideTo(1, 0);
        }
        swiper.allowTouchMove = false;
    } else {
        swiper.allowTouchMove = true;
    }
}
window.addEventListener('resize', handleResize);
handleResize();

document.querySelectorAll('.new-arrivals-section').forEach(section => {
    const seeMoreBtn = section.querySelector('.btn-secondary');
    const toggleableCards = section.querySelectorAll('.mobile-hidden');

    if (seeMoreBtn && toggleableCards.length > 0) {
        let isExpanded = false;

        seeMoreBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;

            toggleableCards.forEach(card => {
                if (isExpanded) {
                    card.classList.remove('mobile-hidden');
                } else {
                    card.classList.add('mobile-hidden');
                }
            });

            seeMoreBtn.textContent = isExpanded ? 'View Less' : 'View All';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {

    const reviewSwiper = new Swiper('.review-swiper', {
        loop: true,
        watchSlidesProgress: true,
        spaceBetween: 20,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-next-btn',
            prevEl: '.swiper-prev-btn',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 16
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 24
            },
            1200: {
                slidesPerView: 3.5,
                spaceBetween: 24
            }
        }
    });

});


