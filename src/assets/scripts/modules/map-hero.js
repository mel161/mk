function init () {
  //   $('.btn--square').hover(
  //     function () {
  //       // over
  //       $(this)
  //         .addClass('is-active')
  //         .next()
  //         .addClass('is-visible')
  //     },
  //     function () {
  //       // out
  //       $(this)
  //         .removeClass('is-active')
  //         .next()
  //         .removeClass('is-visible')
  //     }
  //   )
  $('.btn--square').click(function (e) {
    e.preventDefault()
    $(this)
      .siblings()
      .removeClass('is-active is-visible')
    $(this)
      .toggleClass('is-active')
      .next()
      .toggleClass('is-visible')
  })

  //   $('.hero').click(function (e) {
  //     e.preventDefault()
  //     console.log(e.target)

  //     if (e.taget.is('.btn')) {
  //       $(e.taget)
  //         .siblings()
  //         .removeClass('is-active is-visible')
  //       $(e.taget)
  //         .toggleClass('is-active')
  //         .next()
  //         .toggleClass('is-visible')
  //     } else {
  //       //   $(this)
  //       //     .find('.map')
  //       //     .children()
  //       //     .removeClass('is-active is-visible')
  //     }
  //   })
}

export default init
