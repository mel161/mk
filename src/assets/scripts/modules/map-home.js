/* global ymaps */
function init () {
  var myMap = new ymaps.Map('map', {
    center: [56.799972, 60.594181],
    zoom: 16.5,
    controls: ['zoomControl']
  })

  var myPlacemark = new ymaps.Placemark(
    [56.799972, 60.594181],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: './assets/images/point-home.svg',
      iconImageSize: [77, 91],
      iconImageOffset: [-30, -40]
    }
  )

  myMap.geoObjects.add(myPlacemark)
  // myMap.behaviors.disable(['scrollZoom'])
  // myMap.setBounds(myMap.geoObjects.getBounds())
}

export default init // #endregion
