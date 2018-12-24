// import PerfectScrollbar from 'perfect-scrollbar'

import './modules/select'
import btnGroup from './modules/btn-group'
import mapInit from './modules/map-home'
import mapHeroInit from './modules/map-hero'

jQuery(document).ready(function () {
  btnGroup()
  /* global ymaps */
  ymaps.ready(mapInit)

  mapHeroInit()
})
