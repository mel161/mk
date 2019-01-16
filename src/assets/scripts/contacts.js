import mapInit from './modules/map-contacts'
import headerInit from './modules/header'

jQuery(document).ready(function () {
  /* global ymaps */
  ymaps.ready(mapInit)
  headerInit()
})
