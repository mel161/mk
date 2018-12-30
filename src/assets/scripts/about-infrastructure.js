import mapInit from './modules/map-infrastructure'

jQuery(document).ready(function () {
  /* global ymaps */
  ymaps.ready(mapInit)
})
