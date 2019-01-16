import headerInit from './modules/header'

import 'slick-carousel'

jQuery(document).ready(function () {
  headerInit()

  $('.slider--news').slick({
    dots: true,
    rows: 0,
    prevArrow:
      '<button type="button" class="slick-prev slick-btn"><svg class="icon icon--arrow arrow--left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.04 59.72"><g><path d="M32.82 32.82L7.14 58.5a4.183 4.183 0 0 1-5.92-5.91l22.73-22.73L1.23 7.14a4.18 4.18 0 0 1 5.91-5.91l25.68 25.68a4.18 4.18 0 0 1 0 5.91zm0 0"></path></g></svg></span></button>',
    nextArrow:
      '<button type="button" class="slick-next slick-btn"><svg class="icon icon--arrow arrow--right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.04 59.72"><g><path d="M32.82 32.82L7.14 58.5a4.183 4.183 0 0 1-5.92-5.91l22.73-22.73L1.23 7.14a4.18 4.18 0 0 1 5.91-5.91l25.68 25.68a4.18 4.18 0 0 1 0 5.91zm0 0"></path></g></svg></span></button>'
  })
})
