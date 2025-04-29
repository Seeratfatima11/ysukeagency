
// Testimonial Section //
jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
        
    });
});
// Testimonial Section //

// GROWING RESULTS//
const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

// Function to update the carousel by shifting positions
const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);

  current.classList.remove('carousel__item_active');

  [current, prev, next, first, last].forEach(item => {
    var itemPos = parseInt(item.dataset.pos);
    item.dataset.pos = getPos(itemPos, parseInt(newActivePos));
  });
};

// Function to calculate new positions for the carousel items
const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current;
  }

  return diff;
};

// Autoplay function to move to the next item every few milliseconds
const autoplay = function() {
  const current = elems.find((elem) => elem.dataset.pos == 0); // Find the current active item
  const nextItem = elems.find((elem) => parseInt(elem.dataset.pos) === 1); // Find the next item
  
  update(nextItem); // Update to the next item
};

// Set interval to autoplay every 1 second (1000ms) for faster transition
setInterval(autoplay, 3000);



// FAQ'S//
function toggleFAQ(header) {
  const faqItem = header.parentElement;
  const faqBodies = faqItem.querySelectorAll('.faq-body');
  const faqIconImg = header.querySelector('.faq-icon img');

  const isOpen = faqItem.classList.contains('faq-open');

  if (isOpen) {
    // Close it
    faqItem.classList.remove('faq-open');
    faqBodies.forEach(body => body.style.display = 'none');
    faqIconImg.src = 'assets/img/faq-icon.png'; // back to plus
  } else {
    // Open it
    faqItem.classList.add('faq-open');
    faqBodies.forEach(body => body.style.display = 'block');
    faqIconImg.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path fill='black' d='M5 12h14v2H5z'/></svg>"; // minus
  }
}
  
// Upload photo//
