  // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
    // Создание карты.
    var myMap = new ymaps.Map("myMap", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.7, 37.60],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 10,
  });
  }

  // Создание геообъекта с типом точка (метка).
  // var myGeoObject = new ymaps.GeoObject({
  //   geometry: {
  //     type: "Point", // тип геометрии - точка
  //     coordinates: [55.7, 37.60] // координаты точки
  //   }
  // });

  // var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
  //   iconLayout: 'default#image',
  //   iconImageSize: [30, 42],
  //   iconImageOffset: [-3, -42],
  //   });
  //   // Размещение геообъекта на карте.
  //   myMap.geoObjects.add(myPlacemark);
  // };
  // }

  let adressBtn = document.querySelector('.contacts__adress-cross');
  let adressBlock = document.querySelector('.contacts__adress')


  adressBtn.addEventListener('click', () => {
    adressBlock.classList.add('remove');
  })

  function burgerActivate() {
    const burger = document.querySelector('.burger');
    const closeMenu = document.querySelector('.burger__close');
    const burgerMenu = document.querySelector('.header__nav-burger');

    burger.addEventListener('click', () => {
      burgerMenu.classList.add('header__nav-active')
    })

    closeMenu.addEventListener('click', () => {
      burgerMenu.classList.remove('header__nav-active');
    })
  }

  burgerActivate()


  function searchActivate() {
    const searchBtn = document.querySelector('.header__right-btn');
    const headerInput = document.querySelector('.header__input');
    const deleteBtn = document.querySelector('.header__cross');

    searchBtn.addEventListener('click', () => {
      headerInput.classList.add('header__input-active');
      searchBtn.style.opacity = 0;
    });

    deleteBtn.addEventListener('click', () => {
      headerInput.classList.remove('header__input-active');
      searchBtn.style.opacity = 1;
    });
  };

  searchActivate();
