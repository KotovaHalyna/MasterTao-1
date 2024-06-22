const burger = document.querySelector('#burger');
const body = document.querySelector('body');
const navigationSection = document.querySelector('.navigation-section');

function showNavigation(){
  navigationSection.classList.toggle('show');
  body.classList.toggle('overflow-hidden');
}

burger.addEventListener('click', showNavigation);

const swiperInfo = new Swiper('.slider-info' , {
  spaceBetween: 12,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

   navigation:  {
        enabled: false
    },

  breakpoints: { 
    1025: {
      spaceBetween: 40,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
     }, 
   }
  }
});


const fileInput = document.querySelector('#calculation-file');
const fileName = document.querySelector('#file-name');

fileInput.addEventListener('change', function () {
  console.log('change');
  fileName.innerHTML = 'File'
  console.log(fileInput.files[0]);
  fileName.innerHTML = fileInput.files[0].name;
});

const advantagesCount = document.querySelectorAll('.slider-advantages .swiper-slide').length

console.log(advantagesCount);


const swiperAdvantages = new Swiper('.slider-advantages' , {
  spaceBetween: 12,
  loop: true,
  simulateTouch: true,
  slidesPerView: 1,
  pagination: {
     el: '.swiper-pagination',
     clickable: true,
     enabled: true,
   },
   breakpoints: { 
    1025: {
      spaceBetween: 0,
      initialSlide: 0,
      loop: false,
      slidesPerGroup: 15,
      simulateTouch: false,
      
     pagination: {
      enabled: false,
      el: '.swiper-pagination'
    }, 
   }
  }
});



const swiperTemplate = new Swiper('.swiper-template', {
  speed: 700, 
  loop: true,
  slidesPerView: 1,
  spaceBetween: 15,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    enabled: true,
  },

   navigation:  {
        enabled: false
    },

  breakpoints: { 
    1025: {
    slidesPerView: 2,
    spaceBetween: 0,
    navigation: {
      enabled: true,
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   pagination: {
    enabled: false,
   }, 
 },
   1400: {
      slidesPerView: 3,
      spaceBetween: 0,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
     },
     pagination: {
      enabled: false,
     }, 
   },
   
}

});


// $(document).ready(function(){

// });