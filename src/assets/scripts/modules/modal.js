function modalInit(callback) {
  const modal = $('.modal');

  $('.modal__trigger').click(function(e) {
    e.preventDefault();
    let id = '#' + $(this).attr('data-modal');
    if (id.length > 2) {
      modal.filter(id).addClass('is-active');
      $('body').addClass('no-scroll');
    }
  });

  $('.slider__slide').click(function(e) {
    e.preventDefault();
    if ($('.page').width() >= 1000 && $(this).hasClass('slick-current')) {
      let id = '#' + $(this).attr('data-modal');
      if (id.length > 2) {
        // modal.filter(id).find('.slider--modal').slick('resize')
        modal.filter(id).addClass('is-active');
        $('body').addClass('no-scroll');
      }
    } else {
      let id = '#' + $(this).attr('data-modal');
      if (id.length > 2) {
        // modal.filter(id).find('.slider--modal').slick('resize')
        modal.filter(id).addClass('is-active');
        $('body').addClass('no-scroll');
      }
    }
  });

  $('.modal__bg, .modal__close, .modal__inner .modal__close').click(function(e) {
    e.preventDefault();
    modal.removeClass('is-active');
    $('body').removeClass('no-scroll');
  });
}

export default modalInit;
