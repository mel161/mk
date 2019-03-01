import 'jquery-mask-plugin';

function isNumeric(value) {
  var matches = value.match(/\d+/g);
  if (matches != null) {
    return true;
  }
}

function checkError() {
  if ($('.field--name').is('.is-valid') && $('.field--phone').is('.is-valid')) {
    $('.btn--submit').prop('disabled', false);

    let formData = $('.form').serialize();

    $('.btn--submit').click(function(e) {
      e.preventDefault();
      // $.post(
      //   '/form',
      //   formData,
      //   function (formData, textStatus, jqXHR) {},
      //   'dataType'
      // ).done(function () {})
      $('.title--modal').html('Спасибо!');
      $('.modal__inner .text').toggleClass('text--hide');
      $('.modal__inner .form').addClass('form--hide');
      $('.modal__inner').addClass('modal__inner--thanks');
    });
  } else {
    $('.btn--submit').prop('disabled', true);
  }
}

function validField(value, obj) {
  const input = $(obj);
  const minLength = input.attr('minlength');

  let numeric = false;
  let required = false;
  input
    .siblings('.field__error')
    .removeClass('field__error--top')
    .parents('.field')
    .removeClass('is-valid is-error');

  if (!isNumeric(value)) {
    numeric = true;
  } else {
    numeric = false;
    input
      .siblings('.field__error--char')
      .addClass('field__error--top')
      .parents('.field')
      .removeClass('is-valid')
      .addClass('is-error');
  }
  if (!(value.length < minLength)) {
    required = true;
  } else {
    required = false;
    input
      .siblings('.field__error--required')
      .addClass('field__error--top')
      .parents('.field')
      .removeClass('is-valid')
      .addClass('is-error');
  }
  if (numeric && required) {
    input
      .siblings('.field__error')
      .removeClass('field__error--top')
      .parents('.field')
      .removeClass('is-error')
      .addClass('is-valid');

    checkError();
  }
}

function formInit() {
  let dataForm;

  $('.field__input').focus(function(e) {
    e.preventDefault();
    $(this)
      .parents('.field')
      .addClass('is-active');
  });
  $('.field__input').blur(function(e) {
    e.preventDefault();
    $(this)
      .parents('.field')
      .removeClass('is-active');
    checkError();
  });

  $('#field--name').on('blur keyup', function() {
    if ($(this).val().length !== 0) {
      validField($(this).val(), this);
    }
  });

  $('#field--number').on('blur keyup', function(e) {
    e.preventDefault();

    let value = $(this).val();

    if ($(this).prop('validity')['badInput']) {
      $(this)
        .siblings('.field__error--char')
        .addClass('field__error--top')
        .parents('.field')
        .removeClass('is-valid')
        .addClass('is-error');
    }

    if (value.length !== 0) {
      if ($(this).val().length > 0) {
        $(this)
          .siblings('.field__error')
          .removeClass('field__error--top')
          .parents('.field')
          .removeClass('is-error')
          .addClass('is-valid');
      } else {
        $(this)
          .siblings('.field__error--required')
          .addClass('field__error--top')
          .parents('.field')
          .removeClass('is-valid')
          .addClass('is-error');
      }

      if ($(this).prop('validity')['valid']) {
        $(this)
          .siblings('.field__error')
          .removeClass('field__error--top')
          .parents('.field')
          .addClass('is-valid')
          .removeClass('is-error');
      }

      checkError();
    }
  });

  var options = {
    onComplete: function(cep, event, currentField, options) {
      currentField
        .siblings('.field__error')
        .removeClass('field__error--top')
        .parents('.field')
        .removeClass('is-error')
        .addClass('is-valid');
    },
    onKeyPress: function(cep, event, currentField, options) {
      if (cep.length === 0) {
        currentField
          .siblings('.field__error--required')
          .addClass('field__error--top')
          .parents('.field')
          .removeClass('is-valid')
          .addClass('is-error');
      } else if (cep.length > 0) {
        currentField
          .siblings('.field__error--full')
          .addClass('field__error--top')
          .parents('.field')
          .removeClass('is-valid')
          .addClass('is-error');
      }
    },
    onChange: function(cep, event, currentField, options) {
      currentField
        .siblings('.field__error')
        .removeClass('field__error--top')
        .parents('.field')
        .removeClass('is-error');

      checkError();
    },
    onInvalid: function(val, e, f, invalid, options) {
      f.siblings('.field__error--char')
        .addClass('field__error--top')
        .parents('.field')
        .removeClass('is-valid')
        .addClass('is-error');
    }
  };

  $('#field--phone').mask('+7 (000) 000-00-00', options);
}

export default formInit;
