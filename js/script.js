const swiper = new Swiper('.header__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // simulateTouch: false,
    allowTouchMove: true,
    initialSlide: 1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    lazy: {
        // Подзагрузка на старте перключения слайда
        loadOnTransitionStart: true,
        // Подгрузить предыдущую и следующую картинки
        loadPrevNext: true,
    },
    slidesPerView: 1,
    breakpoints: {
        992: {
            allowTouchMove: false,
        },
    },
  });
  



const slider = document.querySelector('.main__products_slider');

let mySwiper;



  const swipers = document.querySelector(".main__products-swiper");
  const swiperWrapper = document.querySelector(".main__products-wrapper");
  const swiperSlides = document.querySelectorAll(".main__products-slide");

  function addSwiperClass() {
    swipers.classList.add("swiper");
    swiperWrapper.classList.add("swiper-wrapper");
    swiperSlides.forEach(slide => {
      slide.classList.add("swiper-slide");
      slide.style.cssText = "width: '' ";
    });
  }
  
  function removeSlidesClass() {
    swipers.classList.remove("swiper");
    swiperWrapper.classList.remove("swiper-wrapper");
    swiperSlides.forEach(slide => {
      slide.classList.remove("swiper-slide");
      slide.style.cssText = "max-width: 353px; ";
    });
  }
  window.addEventListener('resize', comparsion);
  comparsion();
  function  comparsion() {
    if(window.innerWidth < 992 ) {
      addSwiperClass();
          const swiper2 = new Swiper(".main__products-swiper", {
        
        breakpoints: {
          320: {
            spaceBetween : 20,
            slidesPerView: 1.05,
            loop: true,
          },
          455: {
            spaceBetween : 20,
            slidesPerView: 1.2,
            loop: true,
          },
          565: {
            spaceBetween : 20,
            slidesPerView: 1.5,
            loop: true,
          },
          800: {
            spaceBetween : 20,
            slidesPerView: 2.14,
            loop: true,
          },
          

        }
    });
    } else {
      removeSlidesClass();
    }
  }

