import { points as groups } from './_location-points.js'

function init () {
  // Создание экземпляра карты.
  var myMap = new ymaps.Map('map', {
    center: [56.799972, 60.594181],
    zoom: 16,
    controls: []
  })

  // Контейнер для меню.
  var menu = $('#js-map-nav')

  for (var i = 0, l = groups.length; i < l; i++) {
    createMenuGroup(groups[i])
  }

  function createMenuGroup (group) {
    // Пункт меню.
    var menuItem = $(
      '<div class="card card--base"><a class="card__content link link--block" href="#">' +
        group.icon +
        '<div class="text text--large text--fw-500">' +
        group.name +
        '</div></a></div>'
    )
    // Коллекция для геообъектов группы.
    var collection = new ymaps.GeoObjectCollection(null, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: './assets/images/point-other.svg',
      // Размеры метки.
      iconImageSize: [43, 49],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-20, -25]
    })

    // Добавляем коллекцию на карту.
    myMap.geoObjects.add(collection)
    // Добавляем подменю.
    menuItem
      // .append(submenu)
      // Добавляем пункт в меню.
      .appendTo(menu)
      // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
      .find('a')
      .bind('click', function (e) {
        e.preventDefault()

        $(this)
          .parent()
          .addClass('is-active')
          .siblings()
          .removeClass('is-active')

        var result = ymaps
          .geoQuery(myMap.geoObjects)
          .setOptions('visible', false)

        myPlacemark1.options.set('visible', true)

        var objectsInsidePolygon = ymaps.geoQuery(collection.toArray())
        result.intersect(objectsInsidePolygon).setOptions('visible', true)
      })
    for (var j = 0, m = group.items.length; j < m; j++) {
      createSubMenu(group.items[j], collection)
    }

    $('#js-map-nav-show-all').click(function (e) {
      e.preventDefault()
      ymaps.geoQuery(myMap.geoObjects).setOptions('visible', true)
      $(this)
        .parent()
        .addClass('is-active')
        .siblings()
        .removeClass('is-active')
    })
  }

  function createSubMenu (item, collection) {
    // Пункт подменю.
    // Создаем метку.
    var placemark = new ymaps.Placemark(item.center, {})

    // Добавляем метку в коллекцию.
    collection.add(placemark)
  }

  // Добавляем меню в тэг BODY.
  menu.prependTo($('.map .nav'))

  var myPlacemark1 = new ymaps.Placemark(
    [56.799972, 60.594181],
    {
      // Свойства.
      hintContent: 'ЖК&nbsp;&laquo;Геометрия&raquo;'
    },
    {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: './assets/images/point-home.svg',
      // Размеры метки.
      iconImageSize: [77, 91],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-30, -40]
    }
  )

  myMap.geoObjects.add(myPlacemark1)

  // Выставляем масштаб карты чтобы были видны все группы.
  myMap.setBounds(myMap.geoObjects.getBounds())
  //   myMap.behaviors.disable(['scrollZoom'])
}

export default init
