import mapInit from './modules/map-infrastructure'
import headerInit from './modules/header'
import scrollInit from './modules/scroll'
import modalInit from './modules/modal'
import formInit from './modules/form'

jQuery(document).ready(function () {
  scrollInit()
  /* global ymaps */
  ymaps.ready(mapInit)
  headerInit()
  modalInit()
  formInit()
})
