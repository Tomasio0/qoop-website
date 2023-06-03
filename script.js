
let searchForm = document.querySelector('.search-form');
let searchDiv = document.querySelector('#search-btn');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    searchDiv.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    cartDiv.classList.remove('active');
    loginDiv.classList.remove('active');
    menuDiv.classList.remove('active');
} 

let shoppingCart = document.querySelector('.shopping-cart');
let cartDiv = document.querySelector('#cart-btn');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    cartDiv.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    searchDiv.classList.remove('active');
    loginDiv.classList.remove('active');
    menuDiv.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
let loginDiv = document.querySelector('#login-btn');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    loginDiv.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    cartDiv.classList.remove('active');
    searchDiv.classList.remove('active');
    menuDiv.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
let menuDiv = document.querySelector('#menu-btn');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    menuDiv.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    cartDiv.classList.remove('active');
    loginDiv.classList.remove('active');
    searchDiv.classList.remove('active');
}

window.onscroll = () =>{
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    cartDiv.classList.remove('active');
    loginDiv.classList.remove('active');
    menuDiv.classList.remove('active');
}


// Swiper Code

const swiper = new Swiper('.swiper', {
    /* Optional parameters
    direction: 'vertical',
    loop: true,
  */
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    /* And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    */
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1215: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }
  });

  /*
  var clickableDivs = document.querySelectorAll('.clickable-div');

  clickableDivs.forEach(function(clickableDiv) {
    clickableDiv.addEventListener('click', function() {
      // hide all the other clickable divs
      clickableDivs.forEach(function(div) {
        if (div !== clickableDiv && div.classList.contains('active')) {
          div.classList.remove('active');
          div.style.maxHeight = '0';
          div.style.paddingTop = '0';
          div.style.paddingBottom = '0';
        }
      });
      
      // slide in/out the clicked clickable div
      if (clickableDiv.classList.contains('active')) {
        clickableDiv.classList.remove('active');
        clickableDiv.style.maxHeight = '0';
        clickableDiv.style.paddingTop = '0';
        clickableDiv.style.paddingBottom = '0';
      } else {
        clickableDiv.classList.add('active');
        clickableDiv.style.maxHeight = clickableDiv.scrollHeight + 'px';
        clickableDiv.style.paddingTop = '10px';
        clickableDiv.style.paddingBottom = '10px';
      }
      
      // remove the active class from all the other clickable divs
      clickableDivs.forEach(function(div) {
        if (div !== clickableDiv) {
          div.classList.remove('active');
        }
      });
    });
  });
  */