var dropdowns = $('.select')

// Onclick on a dropdown, toggle visibility
dropdowns.find('.select__selected').click(function () {
  dropdowns.addClass('is-active')
  dropdowns.find('.select__options .select__list').hide()
  $(this)
    .next()
    .children()
    .toggle()
  dropdowns.find('.icon').toggleClass('is-active')
})

// Clic handler for dropdown
dropdowns
  .find('.select__options .select__list .select__item .text')
  .click(function () {
    var leSpan = $(this)
      .parents('.select')
      .find('.select__selected .link .text')

    // Remove selected class
    $(this)
      .parents('.select')
      .find('.select__options .text')
      .each(function () {
        $(this).removeClass('selected')
      })

    // Update selected value
    leSpan.html($(this).html())

    // If back to default, remove selected class else addclass on right element
    if ($(this).hasClass('default')) {
      leSpan.removeClass('selected')
    } else {
      leSpan.addClass('selected')
      $(this).addClass('selected')
    }

    // Close dropdown
    $(this)
      .parents('.select__list')
      .hide()
    $(this).parents('.select').removeClass('is-active').find('.icon').removeClass('is-active')
  })

// Close all dropdown onclick on another element
$(document).bind('click', function (e) {
  if (
    !$(e.target)
    .parents()
    .hasClass('select')
  ) {
    $('.select .select__list').hide()
    $('.select.is-active').removeClass('is-active')
    $('.select .icon').removeClass('is-active')
  }
})
