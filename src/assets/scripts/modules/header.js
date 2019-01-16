function headerInit () {
  const header = $('.header')
  const inner = header.find('.header__inner')
  const slide = header.find('.header__slide')
  const btnCall = header.find('.btn--call')
  const btnNavTrigger = header.find('.btn--nav-trigger')
  const btnSelect = header.find('.btn--select')
  const logoSmall = header.find('.logo--small')
  const logoFull = header.find('.logo--full')
  const info = header.find('.info--header')
  const navMain = header.find('.nav--main')

  function moveElements () {
    let mq = $('.page').outerWidth()

    if (mq >= 1000 && mq < 1700) {
      detachElements()
      info.prependTo(inner)
      logoFull.prependTo(inner)
      btnSelect.prependTo(inner)
      navMain.appendTo(inner)
    } else if (mq >= 1700) {
      detachElements()
      btnSelect.prependTo(inner)
      logoFull.prependTo(inner)
      navMain.appendTo(inner)
      info.appendTo(inner)
    } else {
    }

    resizing = false
  }

  function detachElements () {
    navMain.detach()
    btnSelect.detach()
    logoFull.detach()
    info.detach()
  }

  $('.btn--nav-trigger').click(function (e) {
    e.preventDefault()
    $(this).toggleClass('is-active')
  })

  var resizing = false
  moveElements()
  $(window).on('resize', function () {
    if (!resizing) {
      !window.requestAnimationFrame
        ? setTimeout(moveElements, 300)
        : window.requestAnimationFrame(moveElements)
      resizing = true
    }
  })
}

export default headerInit
