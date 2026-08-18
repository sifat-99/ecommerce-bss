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
    if (!minSlider || !maxSlider || !minVal || !maxVal || !track) return;

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

if (minSlider && maxSlider && minVal && maxVal && track) {
    minSlider.addEventListener('input', updateSlider);
    maxSlider.addEventListener('input', updateSlider);
    updateSlider();
}

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



document.addEventListener('click', function (e) {
    const minusBtn = e.target.closest('.cart-quantity-btn button:first-of-type');
    if (minusBtn) {
        const container = minusBtn.closest('.cart-quantity-btn');
        const quantitySpan = container.querySelector('span');
        if (quantitySpan) {
            let number = Number.parseInt(quantitySpan.innerHTML, 10) || 1;
            if (number > 1) {
                quantitySpan.innerHTML = number - 1;
                if (typeof updateCartItemTotal === 'function') updateCartItemTotal();
            }
        }
        return;
    }

    const plusBtn = e.target.closest('.cart-quantity-btn button:last-of-type');
    if (plusBtn) {
        const container = plusBtn.closest('.cart-quantity-btn');
        const quantitySpan = container.querySelector('span');
        if (quantitySpan) {
            let number = Number.parseInt(quantitySpan.innerHTML, 10) || 0;
            quantitySpan.innerHTML = number + 1;
            if (typeof updateCartItemTotal === 'function') updateCartItemTotal();
        }
        return;
    }


    const sizeBtn = e.target.closest('.choose-size button');
    if (sizeBtn) {
        e.preventDefault();
        const allSizeBtns = document.querySelectorAll('.choose-size button');
        allSizeBtns.forEach(btn => {
            btn.classList.remove('btn-dark', 'text-white', 'bg-tertiary');
            btn.classList.add('bg-secondary', 'text-secondary');
        });
        sizeBtn.classList.remove('bg-secondary', 'text-secondary');
        sizeBtn.classList.add('btn-dark', 'text-white', 'bg-tertiary');
        return;
    }


    const colorBox = e.target.closest('.colors .color-box');
    if (colorBox) {
        e.preventDefault();
        const allColorBoxes = document.querySelectorAll('.colors .color-box');
        allColorBoxes.forEach(cb => {
            const icon = cb.querySelector('.check-icon');
            if (icon) {
                icon.remove();
            }
            cb.classList.remove('position-relative');
        });

        colorBox.classList.add('position-relative');

        const checkIconHTML = `
            <div class="position-absolute check-icon d-flex justify-content-center align-items-center top-0 start-0 w-100 h-100">
                <i class="fa-solid fa-check text-white" style="font-size: 14px;"></i>
            </div>
        `;
        colorBox.insertAdjacentHTML('beforeend', checkIconHTML);
        return;
    }

    const catalogSizeBtn = e.target.closest('.size-wrapper .size-button');
    if (catalogSizeBtn) {
        e.preventDefault();
        const allCatalogSizeBtns = document.querySelectorAll('.size-wrapper .size-button');
        allCatalogSizeBtns.forEach(btn => btn.classList.remove('active'));
        catalogSizeBtn.classList.add('active');
        return;
    }

    const catalogColorSvg = e.target.closest('.color-wrapper svg');
    if (catalogColorSvg) {
        e.preventDefault();
        const allCatalogColorSvgs = document.querySelectorAll('.color-wrapper svg');

        allCatalogColorSvgs.forEach(svg => {
            const path = svg.querySelector('path');
            if (path) {
                path.remove();
            }
        });

        let strokeColor = "white";
        const circle = catalogColorSvg.querySelector('circle');
        if (circle) {
            const fill = circle.getAttribute('fill');
            if (fill === 'white' || fill === '#ffffff' || fill === '#FFFFFF') {
                strokeColor = "black";
            }
        }

        const pathHTML = `<path d="M12.5 19.5 L16.5 23.5 L24.5 14" stroke="${strokeColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />`;
        catalogColorSvg.insertAdjacentHTML('beforeend', pathHTML);
        return;
    }

    const trashIcon = e.target.closest('.delete-icon') || e.target.closest('#trash-icon');
    console.log(trashIcon);
    if (trashIcon) {
        e.preventDefault();
        const cartCard = trashIcon.closest('.cart-card');
        const nextHR = cartCard.nextElementSibling;
        if (cartCard) {
            cartCard.remove();
            if (nextHR && nextHR.tagName.toUpperCase() === 'HR') {
                nextHR.remove();
            }
            if (typeof updateCartItemTotal === 'function') updateCartItemTotal();
        }
        return;
    }
});



const calculateCartItemTotal = () => {
    const allCartCards = document.querySelectorAll('.cart-card');
    let subtotal = 0;
    allCartCards.forEach(cartCard => {
        const priceElement = cartCard.querySelector('.cart-price span');
        const quantityElement = cartCard.querySelector('.cart-quantity-btn span');

        if (priceElement && quantityElement) {
            const price = Number.parseInt(priceElement.innerHTML.replace('$', '')) || 0;
            const quantity = Number.parseInt(quantityElement.innerHTML) || 0;
            subtotal += price * quantity;
        }
    });
    return subtotal;
};

const updateCartItemTotal = () => {
    const subtotalElement = document.getElementById('cart-subtotal');
    const discountElement = document.getElementById('cart-discount');
    const deliveryElement = document.getElementById('cart-delivery');
    const totalElement = document.getElementById('cart-total');

    if (!subtotalElement || !discountElement || !deliveryElement || !totalElement) return;

    const subtotal = calculateCartItemTotal();
    const discount = Math.round(subtotal * 0.20);
    const deliveryFee = subtotal > 0 ? 15 : 0;
    const total = subtotal - discount + deliveryFee;

    subtotalElement.innerHTML = '$' + subtotal;
    discountElement.innerHTML = '-$' + discount;
    deliveryElement.innerHTML = '$' + deliveryFee;
    totalElement.innerHTML = '$' + total;
};

updateCartItemTotal();