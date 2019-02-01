import headerInit from './modules/header'
import scrollInit from './modules/scroll'
import modalInit from './modules/modal'
import formInit from './modules/form'

import 'slick-carousel'

jQuery(document).ready(function () {
  scrollInit()
  headerInit()
  modalInit()
  formInit()

  $('.slider--news').slick({
    dots: true,
    rows: 0,
    prevArrow: '<button type="button" class="slick-prev slick-btn"><svg class="icon icon--arrow arrow--left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.04 55.72"><g><path d="M3.73.64A2.17 2.17 0 0 0 2.18 0 2.19 2.19 0 0 0 0 2.19a2.17 2.17 0 0 0 .64 1.54l24.13 24.13L.64 52a2.18 2.18 0 1 0 3.09 3.08L29.41 29.4a2.18 2.18 0 0 0 0-3.08z"/></g></svg></span></button>',
    nextArrow: '<button type="button" class="slick-next slick-btn"><svg class="icon icon--arrow arrow--right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.04 55.72"><g><path d="M3.73.64A2.17 2.17 0 0 0 2.18 0 2.19 2.19 0 0 0 0 2.19a2.17 2.17 0 0 0 .64 1.54l24.13 24.13L.64 52a2.18 2.18 0 1 0 3.09 3.08L29.41 29.4a2.18 2.18 0 0 0 0-3.08z"/></g></svg></span></button>'
  })
})
