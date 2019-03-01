// import Glide from '@glidejs/glide'
import 'slick-carousel';
import headerInit from './modules/header';
import modalInit from './modules/modal';
import formInit from './modules/form';
import scrollInit from './modules/scroll';

function sliderButtonPosition() {
  if ($('.page').width() >= 1000) {
    var offset = $('.slick-current')
      .eq(1)
      .offset();
    var top = offset.top;
    var left = offset.left;

    $('.slider--main .slick-btn.slick-prev').css('left', left - 38 + 'px');
    $('.slider--main .slick-btn.slick-next').css('right', left - 38 + 'px');
  }
}

$(window).resize(function() {
  sliderButtonPosition();
  $('.slider--main').slick('resize');
});

jQuery(document).ready(function() {
  headerInit();

  modalInit();
  formInit();

  scrollInit();

  $('.slider--main').slick({
    mobileFirst: true,
    rows: 0,
    prevArrow:
      '<button type="button" class="slick-prev slick-btn"><svg class="icon icon--arrow arrow--left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.04 55.72"><g><path d="M3.73.64A2.17 2.17 0 0 0 2.18 0 2.19 2.19 0 0 0 0 2.19a2.17 2.17 0 0 0 .64 1.54l24.13 24.13L.64 52a2.18 2.18 0 1 0 3.09 3.08L29.41 29.4a2.18 2.18 0 0 0 0-3.08z"/></g></svg></span></button>',
    nextArrow:
      '<button type="button" class="slick-next slick-btn"><svg class="icon icon--arrow arrow--right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.04 55.72"><g><path d="M3.73.64A2.17 2.17 0 0 0 2.18 0 2.19 2.19 0 0 0 0 2.19a2.17 2.17 0 0 0 .64 1.54l24.13 24.13L.64 52a2.18 2.18 0 1 0 3.09 3.08L29.41 29.4a2.18 2.18 0 0 0 0-3.08z"/></g></svg></span></button>',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          centerMode: true,
          dots: false,
          infinite: true,
          slidesToShow: 1,
          speed: 250,
          variableWidth: true,
          centerPadding: 0
        }
      },
      {
        breakpoint: 300,
        settings: 'unslick' // destroys slick
      }
    ]
  });

  sliderButtonPosition();

  $('.slider__slide').click(function(e) {
    e.preventDefault();
    if ($('.page').width() >= 1000 && $(this).hasClass('slick-current')) {
      let id = '#' + $(this).attr('data-modal');
      $('.modal')
        .filter(id)
        .find('.slider--modal')
        .slick({
          slidesToShow: 1,
          dots: true,
          rows: 0,
          centerMode: true,
          centerPadding: 0,
          prevArrow:
            '<button type="button" class="slick-prev slick-btn"><svg class="icon icon--arrow arrow--left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.04 55.72"><g><path d="M3.73.64A2.17 2.17 0 0 0 2.18 0 2.19 2.19 0 0 0 0 2.19a2.17 2.17 0 0 0 .64 1.54l24.13 24.13L.64 52a2.18 2.18 0 1 0 3.09 3.08L29.41 29.4a2.18 2.18 0 0 0 0-3.08z"/></g></svg></span></button>',
          nextArrow:
            '<button type="button" class="slick-next slick-btn"><svg class="icon icon--arrow arrow--right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.04 55.72"><g><path d="M3.73.64A2.17 2.17 0 0 0 2.18 0 2.19 2.19 0 0 0 0 2.19a2.17 2.17 0 0 0 .64 1.54l24.13 24.13L.64 52a2.18 2.18 0 1 0 3.09 3.08L29.41 29.4a2.18 2.18 0 0 0 0-3.08z"/></g></svg></span></button>'
        });
    } else {
      let id = '#' + $(this).attr('data-modal');
      console.log(id);
      $('.modal')
        .filter(id)
        .find('.slider--modal')
        .slick({
          slidesToShow: 1,
          dots: true,
          rows: 0,
          centerMode: true,
          centerPadding: 0,
          prevArrow:
            '<button type="button" class="slick-prev slick-btn"><svg class="icon icon--arrow arrow--left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.04 55.72"><g><path d="M3.73.64A2.17 2.17 0 0 0 2.18 0 2.19 2.19 0 0 0 0 2.19a2.17 2.17 0 0 0 .64 1.54l24.13 24.13L.64 52a2.18 2.18 0 1 0 3.09 3.08L29.41 29.4a2.18 2.18 0 0 0 0-3.08z"/></g></svg></span></button>',
          nextArrow:
            '<button type="button" class="slick-next slick-btn"><svg class="icon icon--arrow arrow--right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.04 55.72"><g><path d="M3.73.64A2.17 2.17 0 0 0 2.18 0 2.19 2.19 0 0 0 0 2.19a2.17 2.17 0 0 0 .64 1.54l24.13 24.13L.64 52a2.18 2.18 0 1 0 3.09 3.08L29.41 29.4a2.18 2.18 0 0 0 0-3.08z"/></g></svg></span></button>'
        });
    }
  });
});
