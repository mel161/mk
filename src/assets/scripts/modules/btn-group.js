// import 'jquery'

// $(document).ready(function () {})

function btnGroupInit () {
  $('.btn-group__item').click(function (e) {
    e.preventDefault()
    $(this).toggleClass('is-active')
  })
}

module.exports = btnGroupInit
