function modalInit () {
  const modal = $('.modal')

  $('.modal__trigger').click(function (e) {
    e.preventDefault()
    let id = '#' + $(this).attr('data-modal')
    console.log(id)
    if (id) {
      modal.filter(id).addClass('is-active')
    } else {
      modal.addClass('is-active')
    }
  })

  $('.modal__bg, .modal__close').click(function (e) {
    e.preventDefault()
    modal.removeClass('is-active')
  })
}

export default modalInit
