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
var appMenuSlide = document.querySelector('.app-menu-slide');

var openMenu = function () {
    if (appMenuSlide) appMenuSlide.classList.add('open');
    if (contentSlide) contentSlide.classList.add('drawer-open');
};

var closeMenu = function () {
    if (appMenuSlide) appMenuSlide.classList.remove('open');
    if (contentSlide) contentSlide.classList.remove('drawer-open');
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

const minSlider = document.getElementById('slider-min');
const maxSlider = document.getElementById('slider-max');
const minVal = document.getElementById('value-min');
const maxVal = document.getElementById('value-max');
const track = document.querySelector('.slider-track');

function updateSlider() {
    if (parseInt(minSlider.value) >= parseInt(maxSlider.value)) {
        minSlider.value = maxSlider.value - 1;
    }

    minVal.textContent = '$' + minSlider.value;
    maxVal.textContent = '$' + maxSlider.value;

    const percent1 = (minSlider.value / minSlider.max) * 100;
    const percent2 = (maxSlider.value / maxSlider.max) * 100;

    minVal.style.left = `calc(${percent1}% + ${12 - percent1 * 0.24}px)`;
    maxVal.style.left = `calc(${percent2}% + ${12 - percent2 * 0.24}px)`;

    track.style.background = `linear-gradient(to right, #ddd ${percent1}%, var(--text-primary) ${percent1}%, var(--text-primary) ${percent2}%, #ddd ${percent2}%)`;
}

minSlider.addEventListener('input', updateSlider);
maxSlider.addEventListener('input', updateSlider);
updateSlider();

const openFilterBtn = document.getElementById('open-filter-btn');
const closeFilterBtn = document.getElementById('close-filter-btn');
const filterSidebar = document.querySelector('.catalog-sidebar');
const filterOverlayMobile = document.getElementById('filterOverlay');

const openFilter = () => {
    if (filterSidebar) filterSidebar.classList.add('show');
    if (filterOverlayMobile) filterOverlayMobile.classList.add('show');
    document.body.style.overflow = 'hidden';
};

const closeFilter = () => {
    if (filterSidebar) filterSidebar.classList.remove('show');
    if (filterOverlayMobile) filterOverlayMobile.classList.remove('show');
    document.body.style.overflow = '';
};

if (openFilterBtn) {
    openFilterBtn.addEventListener('click', openFilter);
}

if (closeFilterBtn) {
    closeFilterBtn.addEventListener('click', closeFilter);
}

if (filterOverlayMobile) {
    filterOverlayMobile.addEventListener('click', closeFilter);
}
