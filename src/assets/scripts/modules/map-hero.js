function init() {
  $(".hero").click(function(e) {
    e.preventDefault();

    if ($(e.target).hasClass('btn--square')) {
      $(e.target)
        .siblings()
        .removeClass("is-active is-visible");
      $(e.target)
        .toggleClass("is-active")
        .next()
        .toggleClass("is-visible");
    } else {
      $(this)
        .find('.is-active, .is-visible')
        .removeClass("is-active is-visible");
    }
  });
}

export default init;
