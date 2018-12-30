import Glide from '@glidejs/glide'
// import 'slick-carousel'
const sliderContainer = document.querySelector('.slider')
let slider = new Glide('.slider', {
  type: 'carousel',
  startAt: 0,
  focusAt: 'center',
  perView: 3,
  gap: -10,
  animationDuration: 600,
  animationTimingFunc: 'ease',
  classes: {
    slider: 'slider--slider',
    carousel: 'slider--carousel',
    swipeable: 'slider--swipeable',
    dragging: 'slider--dragging',
    cloneSlide: 'slider__slide--clone',
    activeNav: 'slider__bullet--active',
    activeSlide: 'slider__slide--active',
    disabledArrow: 'slider__arrow--disabled'
  }
})
slider.on(['build.after', 'run.after'], function (e) {
  let active = sliderContainer.querySelector('.slider__slide--active')
  //   active.classList.remove('next', 'prev')
  active.querySelector('.slider__header').classList.remove('fadeOutLeft')
  active.querySelector('.slider__header').classList.add('fadeInRight')
  //   active.previousElementSibling.classList.add('prev')
  //   active.nextElementSibling.classList.add('next')
})
slider.on(['run.before'], function (e) {
  let active = sliderContainer.querySelector('.slider__slide--active')
  active.querySelector('.slider__header').classList.remove('fadeInRight')
  active.querySelector('.slider__header').classList.add('fadeOutLeft')
})
slider.on(['translate.jump'], function () {
  let slides = sliderContainer.querySelectorAll('.slider__slide')
  slides.forEach(function (item, i, arr) {
    item.classList.remove('prev', 'next')
  })
})
slider.mount()

// $('.slider').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   arrows: true,
//   dots: false,
//   centerMode: true,
//   variableWidth: true,
//   infinite: true,
//   focusOnSelect: true,
//   cssEase: 'linear',
//   touchMove: true,
//   prevArrow: '<button class="slick-prev"> < </button>',
//   nextArrow: '<button class="slick-next"> > </button>',
//   rows: 0
// })
