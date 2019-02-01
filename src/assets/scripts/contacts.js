import mapInit from './modules/map-contacts'
import headerInit from './modules/header'
import scrollInit from './modules/scroll'
import modalInit from './modules/modal'
import formInit from './modules/form'

jQuery(document).ready(function () {
  /* global ymaps */
  ymaps.ready(mapInit)
  headerInit()
  scrollInit()
  modalInit()
  formInit()
})
