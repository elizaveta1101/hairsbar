/*------------------------------------*/
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.966912, 37.150646],
        zoom: 18,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });

    var placemark = new ymaps.Placemark(myMap.getCenter(), {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<h3 style="color: black;">Hairs Bar</h3><br>' +
            '<span class="description">Сеть кинотеатров</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<div style="color: black;">+7 (926) 888-49-11<br>г. Зеленоград, Георгиевский пр-т, 37к2</div>',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Hairs Bar'
    });
    // Добавим метку на карту.
    myMap.geoObjects.add(placemark);
    // Откроем балун на метке.
    placemark.balloon.open();
}