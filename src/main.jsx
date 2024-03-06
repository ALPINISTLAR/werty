const modifiers = {
  headerCartModalOpen: 'site-header__cart-modal--open',
  imgThumbnailActive: 'image-showcase__thumbnail--active',
  lightboxOpen: 'lightbox--open'
};


// Shopping cart
const elsShoppingCartRemoveButton = document.querySelectorAll('.item-shopping-cart-products__remove-button');
const elSiteHeaderCartLink = document.querySelector('.js-site-header-cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');

if (elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    elSiteHeaderCartModal.classList.toggle(modifiers.headerCartModalOpen);
  });
}

// IMAGE SHOWCASE
const elProductPageGallery = document.querySelector('.product-page__gallery');
const elsImageShowcaseThumbnailButton = elProductPageGallery.querySelectorAll('.js-thumbnail-button');
const elsImageShowcaseThumbnail = elProductPageGallery.querySelectorAll('.image-showcase__thumbnail');
const elImageShowcaseImg = elProductPageGallery.querySelector('.image-showcase__img');

elsImageShowcaseThumbnailButton.forEach(function (elThumbnailButton) {
  elThumbnailButton.addEventListener('click', function () {
    elsImageShowcaseThumbnail.forEach(function (elShowcaseThumbnail) {
      // Remove active state from all buttons
      elShowcaseThumbnail.classList.remove(modifiers.imgThumbnailActive)
    });
    // Add active state to clicked button
    elThumbnailButton.parentElement.classList.add(modifiers.imgThumbnailActive)

    // Update active image src accordingly
    elImageShowcaseImg.src = elThumbnailButton.dataset.showcaseImgBig;
    elImageShowcaseImg.srcset = `${elThumbnailButton.dataset.showcaseImgBig} 1x, ${elThumbnailButton.dataset.showcaseImgRetina} 2x`;
  })
})


// LIGHTBOX //
const elLightboxToggler = document.querySelector('.js-lightbox-toggler');
const elLightbox = document.querySelector('.lightbox');
const elLightboxClose = document.querySelector('.js-lightbox-close');

// Open Lightbox
if (elLightboxToggler) {
  elLightboxToggler.addEventListener('click', function () {
    elLightbox.classList.add(modifiers.lightboxOpen)
  });
}
// Close Lightbox
if (elLightboxClose) {
  elLightboxClose.addEventListener('click', function () {
    elLightbox.classList.remove(modifiers.lightboxOpen)
  })
}

// LIGHTBOX IMAGE SHOWCASE

const elsImageShowcaseLightboxThumbnailButton = document.querySelectorAll('.js-lightbox-thumbnail-button');
const elsImageShowcaseThumbnailLightbox = document.querySelectorAll('.image-showcase__thumbnail-lightbox');
const elImageShowcaseImgLightbox = document.querySelector('.image-showcase__img-lightbox');

elsImageShowcaseLightboxThumbnailButton.forEach(function (elThumbnailLightboxButton) {
  elThumbnailLightboxButton.addEventListener('click', function () {
    elsImageShowcaseThumbnailLightbox.forEach(function (elShowcaseThumbnailLightbox) {
      // Remove active state from all buttons
      elShowcaseThumbnailLightbox.classList.remove(modifiers.imgThumbnailActive)
    });
    // Add active state to clicked button
    elThumbnailLightboxButton.parentElement.classList.add(modifiers.imgThumbnailActive)

    // Update active image src accordingly
    elImageShowcaseImgLightbox.src = elThumbnailLightboxButton.dataset.showcaseImgBig;
    elImageShowcaseImgLightbox.srcset = `${elThumbnailLightboxButton.dataset.showcaseImgBig} 1x, ${elThumbnailLightboxButton.dataset.showcaseImgRetina} 2x`;
  })
})

// LIGHTBOX CONTROL
const elLightboxControlPrev = elLightbox.querySelector('.js-lightbox-control-prev');
const elLightboxControlNext = elLightbox.querySelector('.js-lightbox-control-next');

if (elLightboxControlNext) {
  elLightboxControlNext.addEventListener('click', function () {
    // Find active li element
    const elActiveItem = elLightbox.querySelector('.image-showcase__thumbnail--active');
    // Remove active li element's styles
    elActiveItem.classList.remove(modifiers.imgThumbnailActive);

    let elNextActiveItem;

    if (elActiveItem.nextElementSibling === null) {
      elNextActiveItem = elsImageShowcaseThumbnailLightbox[0];
    } else {
      elNextActiveItem = elActiveItem.nextElementSibling;
    }
    elNextActiveItem.classList.add(modifiers.imgThumbnailActive);

    // Update active image src accordingly
    elImageShowcaseImgLightbox.src = elNextActiveItem.children[0].dataset.showcaseImgBig;
    elImageShowcaseImgLightbox.srcset = `${elNextActiveItem.children[0].dataset.showcaseImgBig} 1x, ${elNextActiveItem.children[0].dataset.showcaseImgRetina} 2x`;
  });
};



if (elLightboxControlPrev) {
  elLightboxControlPrev.addEventListener('click', function () {
    // Find active li element
    const elActiveItem = elLightbox.querySelector('.image-showcase__thumbnail--active');
    // Remove active li element's styles
    elActiveItem.classList.remove(modifiers.imgThumbnailActive);

    let elNextActiveItem;

    if (elActiveItem.previousElementSibling === null) {
      elNextActiveItem = elsImageShowcaseThumbnailLightbox[elsImageShowcaseThumbnailLightbox.length - 1];
    } else {
      elNextActiveItem = elActiveItem.previousElementSibling;
    }
    elNextActiveItem.classList.add(modifiers.imgThumbnailActive);

    // Update active image src accordingly
    elImageShowcaseImgLightbox.src = elNextActiveItem.children[0].dataset.showcaseImgBig;
    elImageShowcaseImgLightbox.srcset = `${elNextActiveItem.children[0].dataset.showcaseImgBig} 1x, ${elNextActiveItem.children[0].dataset.showcaseImgRetina} 2x`;
  });
};

// SHOPPING CART ACTIONS:  Product quantity button;
const elProductQuantityIncreaseButton = document.querySelector('.js-product-quantity-increase-button');
const elProductQuantityDecreaseButton = document.querySelector('.js-product-quantity-decrease-button');
const elProductQuantity = document.querySelector('.product-info__quantity');


if (elProductQuantityIncreaseButton) {
  elProductQuantityIncreaseButton.addEventListener('click', function () {
    elProductQuantity.textContent = parseInt(elProductQuantity.textContent, 10) + 1;
  });
};

if (elProductQuantityDecreaseButton) {
  elProductQuantityDecreaseButton.addEventListener('click', function () {
    const quantity = parseInt(elProductQuantity.textContent, 10);

    if (quantity > 0) {
      elProductQuantity.textContent = quantity - 1;
    }
  });
};


const elSitenavOpenButton = document.querySelector('.sitenav-open-button');
const elSitenavCloseButton = document.querySelector('.sitenav__close-button');
const elSitenavBg = document.querySelector('.sitenav-bg');
const elSitenav = document.querySelector('.site-header__sitenav');

elSitenavOpenButton.addEventListener('click', function () {
  elSitenav.classList.add('site-header__sitenav--open');
  setTimeout(function () {
    elSitenavBg.classList.add('sitenav-bg--open');
  }, 150);
});
elSitenavCloseButton.addEventListener('click', function () {
  elSitenav.classList.remove('site-header__sitenav--open');
  elSitenavBg.classList.remove('sitenav-bg--open');
});


// IMAGE SHOWCASE MOBILE CONTROL
const elShowcaseMobileControlPrev = document.querySelector('.js-showcase-mobile-control-prev');
const elShowcaseMobileControlNext = document.querySelector('.js-showcase-mobile-control-next');
const elImageShowcaseImgMobile = document.querySelector('.image-showcase__img--mobile');



if (elShowcaseMobileControlNext) {
  elShowcaseMobileControlNext.addEventListener('click', function () {
    // Find active li element
    const elActiveItem = document.querySelector('.image-showcase__thumbnail--active');
    // Remove active li element's styles
    elActiveItem.classList.remove(modifiers.imgThumbnailActive);

    let elNextActiveItemMobile;

    if (elActiveItem.nextElementSibling === null) {
      elNextActiveItemMobile = elsImageShowcaseThumbnail[0];
    } else {
      elNextActiveItemMobile = elActiveItem.nextElementSibling;
    }
    elNextActiveItemMobile.classList.add(modifiers.imgThumbnailActive);

    // Update active image src accordingly
    elImageShowcaseImgMobile.src = elNextActiveItemMobile.children[0].dataset.showcaseImgBig;
    elImageShowcaseImgMobile.srcset = `${elNextActiveItemMobile.children[0].dataset.showcaseImgBig} 1x, ${elNextActiveItemMobile.children[0].dataset.showcaseImgRetina} 2x`;
  });
};


if (elShowcaseMobileControlPrev) {
  elShowcaseMobileControlPrev.addEventListener('click', function () {
    // Find active li element
    const elActiveItem = document.querySelector('.image-showcase__thumbnail--active');
    // Remove active li element's styles
    elActiveItem.classList.remove(modifiers.imgThumbnailActive);

    let elNextActiveItemMobile;

    if (elActiveItem.previousElementSibling === null) {
      elNextActiveItemMobile = elsImageShowcaseThumbnail[elsImageShowcaseThumbnail.length - 1];
    } else {
      elNextActiveItemMobile = elActiveItem.previousElementSibling;
    }
    elNextActiveItemMobile.classList.add(modifiers.imgThumbnailActive);

    // Update active image src accordingly
    elImageShowcaseImgMobile.src = elNextActiveItemMobile.children[0].dataset.showcaseImgBig;
    elImageShowcaseImgMobile.srcset = `${elNextActiveItemMobile.children[0].dataset.showcaseImgBig} 1x, ${elNextActiveItemMobile.children[0].dataset.showcaseImgRetina} 2x`;
  });
};