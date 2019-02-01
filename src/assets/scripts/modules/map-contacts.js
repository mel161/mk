/* global ymaps */
function init() {
  var myMap = new ymaps.Map('map', {
    center: [56.816416, 60.585888],
    zoom: 16.5,
    controls: []
  })

  var myPlacemark = new ymaps.Placemark(
    [56.816416, 60.585888], {}, {
      iconLayout: 'default#image',
      iconImageHref: './assets/images/map-point.svg',
      iconImageSize: [48, 60],
      iconImageOffset: [-24, -30]
    }
  )

  myMap.geoObjects.add(myPlacemark)
  // myMap.behaviors.disable(['scrollZoom'])
  // myMap.setBounds(myMap.geoObjects.getBounds())
}

export default init // #endregion
