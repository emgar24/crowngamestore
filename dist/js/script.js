  ///NavbarFixed
  window.onscroll = function() {
      const header = document.querySelector('header');
      const NavbarFixed = header.offsetTop;

      if(window.pageYOffset > NavbarFixed) {
          header.classList.add('navbar-fixed');
      } else {
          header.classList.remove('navbar-fixed');
      }
  }
  
  //hamburger
  const hamburger = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#nav-menu');

  hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden');
  });

  //Carousel
 

    var swiper = new Swiper(".mySwiper", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
