import './modules/select'
import btnGroup from './modules/btn-group'
import headerInit from './modules/header'
import mapInit from './modules/map-home'
import mapHeroInit from './modules/map-hero'
import RangeSlider from './modules/range'

jQuery(document).ready(function () {
  var rangeSliderPrice = new RangeSlider('.range--price')
  var rangeSliderArea = new RangeSlider('.range--area')

  rangeSliderPrice.onChange = function (min, max) {
    this.slider.querySelector(
      '.range__from .text'
    ).innerHTML = new Intl.NumberFormat('ru-RU').format(min)

    this.slider.querySelector(
      '.range__to .text'
    ).innerHTML = new Intl.NumberFormat('ru-RU').format(max)
  }

  rangeSliderPrice.didChanged = function (min, max) {
    this.slider.querySelector(
      '.range__from .text'
    ).innerHTML = new Intl.NumberFormat('ru-RU').format(min)

    this.slider.querySelector(
      '.range__to .text'
    ).innerHTML = new Intl.NumberFormat('ru-RU').format(max)
  }

  rangeSliderArea.onChange = function (min, max) {
    this.slider.querySelector(
      '.range__from .text'
    ).innerHTML = new Intl.NumberFormat('ru-RU').format(min)

    this.slider.querySelector(
      '.range__to .text'
    ).innerHTML = new Intl.NumberFormat('ru-RU').format(max)
  }

  rangeSliderArea.didChanged = function (min, max) {
    this.slider.querySelector(
      '.range__from .text'
    ).innerHTML = new Intl.NumberFormat('ru-RU').format(min)

    this.slider.querySelector(
      '.range__to .text'
    ).innerHTML = new Intl.NumberFormat('ru-RU').format(max)
  }

  btnGroup()
  /* global ymaps */
  ymaps.ready(mapInit)
  mapHeroInit()
  headerInit()
})
