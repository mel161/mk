function isNumeric (value) {
  return /^-{0,1}\d+$/.test(value)
}

function validField (value, obj) {
  //   const minLenght = $(obj).attr('minlength')
  //   $(obj)
  //     .parents('.field')
  //     .toggleClass('is-error', value.length < minLenght)

  //   if ($(obj).attr('name') === 'name') {
  //     $(obj)
  //       .siblings('.field__error--char')
  //       .addClass('.field__error--top', Number.isInteger(value))
  //   }
  const input = $(obj)
  const minLength = input.attr('minlength')

  switch (input.attr('name')) {
    case 'name':
      console.log('name')

      console.log(isNumeric(value))

      let numeric = false
      let required = false

      input
        .siblings('.field__error')
        .removeClass('field__error--top')
        .parents('.field')
        .removeClass('is-valid is-error')

      if (!isNumeric(value)) {
        numeric = true
      } else {
        numeric = false
        input
          .siblings('.field__error--char')
          .addClass('field__error--top')
          .parents('.field')
          .removeClass('is-valid')
          .addClass('is-error')
      }
      if (!(value.length < minLength)) {
        required = true
      } else {
        required = false
        input
          .siblings('.field__error--required')
          .addClass('field__error--top')
          .parents('.field')
          .removeClass('is-valid')
          .addClass('is-error')
      }

      console.log(numeric)
      console.log(required)

      if (numeric && required) {
        input
          .siblings('.field__error')
          .removeClass('field__error--top')
          .parents('.field')
          .removeClass('is-error')
          .addClass('is-valid')
      }

      //   if (isNumeric(value)) {
      //     input
      //       .parents('.field')
      //       .removeClass('is-valid')
      //       .addClass('is-error')
      //     console.log('numbers in name')
      //   } else {
      //     input
      //       .parents('.field')
      //       .removeClass('is-error')
      //       .addClass('is-valid')
      //   }

      //   if (value.length < minLength) {
      //     input
      //       .parents('.field')
      //       .removeClass('is-valid')
      //       .addClass('is-error')
      //     console.log('small name')
      //   } else {
      //     input
      //       .parents('.field')
      //       .removeClass('is-error')
      //       .addClass('is-valid')
      //   }
      break

    case 'phone':
      console.log('phone')
      break

    case 'number':
      console.log('number')
      break

    default:
      console.log('default')
      break
  }
}

function formInit () {
  $('.field__input').focus(function (e) {
    e.preventDefault()
    $(this)
      .parents('.field')
      .addClass('is-active')
  })
  $('.field__input').blur(function (e) {
    e.preventDefault()
    $(this)
      .parents('.field')
      .removeClass('is-active')
  })

  $('.field__input').on('blur keyup', function () {
    validField($(this).val(), this)
  })
}

export default formInit

// if (!$('.flats').length) {
//   $('.section--callback .btn').on('click', function (e) {
//     e.preventDefault()
//     var t = $(this).parents('.section--callback')

//     t.find('.field__input')
//       .not('.field__input--phone')
//       .toggleClass(
//         'err',
//         t
//           .find('.field__input')
//           .not('.field__input--phone')
//           .val().length < 2
//       )
//     t.find('.field__input--phone').toggleClass(
//       'err',
//       t.find('.field__input--phone').val().length < 17
//     )

//     if (
//       t.find('.field__input--phone').val().length < 17 ||
//       t
//         .find('.field__input')
//         .not('.field__input--phone')
//         .val().length < 2
//     ) {
//       return false
//     }

//     $.post('/form', {
//       _token: $('meta[name="csrf-token"]').attr('content'),
//       name: t
//         .find('.field__input')
//         .not('.field__input--phone')
//         .val(),
//       phone: t.find('.field__input--phone').val()
//     }).done(function () {
//       // $('.popup-callback').fadeOut();
//       // $('.popup-success').fadeIn();
//       $('.section__form, .section__btn').hide()
//       $('.section__text--callback p').text(
//         'Спасибо за заявку, мы свяжемся с вами как можно быстрее.'
//       )
//     })
//     return false
//   })
// }
