

var swiper = new Swiper(".myswaper", {
  
  
  slidesPerView: 2.5,
  spaceBetween: 25,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,


});


if (matchMedia('only screen and (max-width: 1456px)').matches) {

  var swiper = new Swiper(".myswaper", {
  
  
    slidesPerView: 2.5,
    spaceBetween: 25,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  
  
  });
 
}

