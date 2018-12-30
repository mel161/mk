// THIS IS THE RANGE SLIDER LOGIC DO NOT CHANGE !!
const RangeSlider = function (className) {
  const self = this
  let startX = 0

  let x = 0

  // retrieve touch button
  const slider = document.querySelector(className)
  const rangeInner = slider.querySelector('.range__inner')
  const handlerFrom = slider.querySelector('.range__handler--from')
  const handlerTo = slider.querySelector('.range__handler--to')
  const inputFrom = slider.querySelector('.range__input--from')
  const inputTo = slider.querySelector('.range__input--to')
  const rangeLine = slider.querySelector('.range__line')

  // get some properties
  const min = parseFloat(inputFrom.getAttribute('min'))
  const max = parseFloat(inputTo.getAttribute('max'))

  // retrieve default values
  let defaultMinValue = inputFrom.value
  let defaultMaxValue = inputTo.value

  // check values are correct
  if (defaultMinValue < min) {
    defaultMinValue = min
  }

  if (defaultMaxValue > max) {
    defaultMaxValue = max
  }

  if (defaultMaxValue < defaultMinValue) {
    defaultMaxValue = defaultMinValue
  }

  if (defaultMinValue > defaultMaxValue) {
    defaultMinValue = defaultMaxValue
  }

  var step = 0.0

  if (inputFrom.getAttribute('step') || inputTo.getAttribute('step')) {
    step = Math.abs(
      parseFloat(inputFrom.getAttribute('step') || inputTo.getAttribute('step'))
    )
  }

  // normalize flag
  var normalizeFact = -20

  self.slider = slider
  self.reset = function () {
    handlerFrom.style.left = '0px'
    handlerTo.style.left =
      rangeInner.offsetWidth - handlerFrom.offsetWidth + 'px'
    rangeLine.style.marginLeft = '0px'
    rangeLine.style.width =
      rangeInner.offsetWidth - handlerFrom.offsetWidth + 'px'
    startX = 0
    x = 0
  }

  self.setMinValue = function (minValue) {
    var ratio = (minValue - min) / (max - min)
    // var ratio = 0.3
    handlerFrom.style.left =
      Math.ceil(
        ratio *
          (rangeInner.offsetWidth - (handlerFrom.offsetWidth + normalizeFact))
      ) + 'px'
    rangeLine.style.marginLeft = handlerFrom.offsetLeft + 'px'
    rangeLine.style.width = handlerTo.offsetLeft - handlerFrom.offsetLeft + 'px'
    // slider.setAttribute('data-min-value', minValue)
    inputFrom.value = minValue
  }

  self.setMaxValue = function (maxValue) {
    var ratio = (maxValue - min) / (max - min)
    // var ratio = 0.3
    handlerTo.style.left =
      Math.ceil(
        ratio *
          (rangeInner.offsetWidth - (handlerFrom.offsetWidth + normalizeFact)) +
          normalizeFact
      ) + 'px'
    rangeLine.style.marginLeft = handlerFrom.offsetLeft + 'px'
    rangeLine.style.width = handlerTo.offsetLeft - handlerFrom.offsetLeft + 'px'
    // slider.setAttribute('data-max-value', maxValue)
    inputTo.value = maxValue
  }

  // initial reset
  self.reset()

  // usefull values, min, max, normalize fact is the width of both touch buttons
  var maxX = rangeInner.offsetWidth - handlerTo.offsetWidth
  var selectedTouch = null
  var initialValue = rangeLine.offsetWidth - normalizeFact

  // set defualt values
  self.setMinValue(defaultMinValue)
  self.setMaxValue(defaultMaxValue)

  // setup touch/click events
  function onStart (event) {
    // Prevent default dragging of selected content
    event.preventDefault()
    var eventTouch = event

    if (event.touches) {
      eventTouch = event.touches[0]
    }

    if (this === handlerFrom) {
      x = handlerFrom.offsetLeft
    } else {
      x = handlerTo.offsetLeft
    }

    startX = eventTouch.pageX - x
    selectedTouch = this
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onStop)
    document.addEventListener('touchmove', onMove)
    document.addEventListener('touchend', onStop)
  }

  function onMove (event) {
    var eventTouch = event

    if (event.touches) {
      eventTouch = event.touches[0]
    }

    x = eventTouch.pageX - startX

    if (selectedTouch === handlerFrom) {
      if (x > handlerTo.offsetLeft - selectedTouch.offsetWidth + 10) {
        x = handlerTo.offsetLeft - selectedTouch.offsetWidth + 10
      } else if (x < 0) {
        x = 0
      }

      selectedTouch.style.left = x + 'px'
    } else if (selectedTouch === handlerTo) {
      if (x < handlerFrom.offsetLeft + handlerFrom.offsetWidth - 10) {
        x = handlerFrom.offsetLeft + handlerFrom.offsetWidth - 10
      } else if (x > maxX) {
        x = maxX
      }
      selectedTouch.style.left = x + 'px'
    }

    // update line span
    rangeLine.style.marginLeft = handlerFrom.offsetLeft + 'px'
    rangeLine.style.width = handlerTo.offsetLeft - handlerFrom.offsetLeft + 'px'

    // write new value
    calculateValue()

    // call on change
    if (slider.getAttribute('on-change')) {
      var fn = new Function('min, max', slider.getAttribute('on-change'))
      fn(inputFrom.value, inputTo.value)
    }

    if (self.onChange) {
      self.onChange(inputFrom.value, inputTo.value)
    }
  }

  function onStop (event) {
    document.removeEventListener('mousemove', onMove)
    document.removeEventListener('mouseup', onStop)
    document.removeEventListener('touchmove', onMove)
    document.removeEventListener('touchend', onStop)

    selectedTouch = null

    // write new value
    calculateValue()

    // call did changed
    if (slider.getAttribute('did-changed')) {
      var fn = new Function('min, max', slider.getAttribute('did-changed'))
      fn(inputFrom.value, inputTo.value)
    }

    if (self.didChanged) {
      self.didChanged(inputFrom.value, inputTo.value)
    }
  }

  function calculateValue () {
    var newValue = (rangeLine.offsetWidth - normalizeFact) / initialValue
    var minValue = rangeLine.offsetLeft / initialValue
    var maxValue = minValue + newValue

    var minValue = minValue * (max - min) + min
    var maxValue = maxValue * (max - min) + min

    // console.log(step)
    if (step !== 0.0) {
      var multi = Math.floor(minValue / step)
      minValue = step * multi

      multi = Math.floor(maxValue / step)
      maxValue = step * multi
    }

    // slider.setAttribute('data-min-value', minValue)
    // slider.setAttribute('data-max-value', maxValue)
    inputFrom.value = minValue
    inputTo.value = maxValue
  }

  // link events
  handlerFrom.addEventListener('mousedown', onStart)
  handlerTo.addEventListener('mousedown', onStart)
  handlerFrom.addEventListener('touchstart', onStart)
  handlerTo.addEventListener('touchstart', onStart)
}

export default RangeSlider
