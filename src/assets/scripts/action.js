import headerInit from './modules/header';
import scrollInit from './modules/scroll';
import modalInit from './modules/modal';
import formInit from './modules/form';
import shave from 'shave';

jQuery(document).ready(function() {
  scrollInit();
  headerInit();
  modalInit();
  formInit();
  // $('.card__content .text').shave(35);
  if (jQuery('.page').width() < 1000) {
    shave('.card__content .text', 35);
  }

  jQuery(window).resize(function() {
    if (jQuery('.page').width() < 1000) {
      shave('.card__content .text', 35);
    }
  });
});
