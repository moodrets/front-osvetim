export async function initContactsMap() {
    v2()

    async function v3() {
        await ymaps3.ready;

        const {YMap, YMapDefaultSchemeLayer, YMapMarker} = ymaps3;
        const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

        const marker = new YMapDefaultMarker({
            coordinates: [37.95, 55.9], 
            title: 'Marker inc #0'
        });

        const map = new YMap(
            document.getElementById('contacts-map'),
            {
                location: {
                    center: [37.588144, 55.733842],
                    zoom: 14
                }
            }
        );

        map.addChild(new YMapDefaultSchemeLayer());
        map.addChild(marker);
    }

    async function v2() {
        ymaps.ready(() => {
            const map = new ymaps.Map('contacts-map', {
                center: [59.944220, 30.354145],
                zoom: 12,
                controls: []
            });

            const addressMarker = new ymaps.Placemark([59.944220, 30.354145], {
                balloonContent: '',
                iconCaption: ''
            }, {
                iconLayout: 'default#imageWithContent',
                iconImageOffset: [-15, -15],
                iconImageHref: 'img/geo-marker.svg',
                iconImageSize: [30, 30],
            })

            map.geoObjects.add(addressMarker);

            // disables
            map.behaviors.disable('scrollZoom');
            map.behaviors.disable('drag');
        });
    }
}