/*    map    */

var myMap;
    ymaps.ready(init);
    function init (){

    myMap = new ymaps.Map("map", {
                        center: [55.704, 37.687],
                        zoom: 16,
                        behaviors: ['drag', 'dblClickZoom', 'multiTouch', 'rightMouseButtonMagnifier'],
                        type: 'yandex#map',
                        controls: ['zoomControl', 'rulerControl', 'smallMapDefaultSet']
                    });
                    
    myPlacemark = new ymaps.Placemark([55.703215, 37.687632],
    {balloonContentBody: '<img src="img/map-marker-image.jpg"><br>Москва, 2-й Южнопортовый проезд, 27'},
    {
        hideIconOnBalloonOpen: false,
        iconLayout: 'default#image',
        iconImageHref: 'img/map-marker.png',
        iconImageSize: [35, 45],
        iconImageOffset: [-17, -45]
    });
            
    myMap.geoObjects.add(myPlacemark);
}