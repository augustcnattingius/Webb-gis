
var createMap = function(){
    var hospitalLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({ 
            url: 'http://stark.nateko.lu.se:8080/geoserver/wms', 
            params: {
                'LAYERS': 'armenia:hospitals', 
                'VERSION':'1.1.1'},
            ratio: 1
        })
    });
    var villageLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({ 
            url: 'http://stark.nateko.lu.se:8080/geoserver/wms', 
            params: {
                'LAYERS': 'armenia:village',
                'VERSION':'1.1.1'},
        ratio: 1
        })
    });
    var streamsLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({ 
            url: 'http://stark.nateko.lu.se:8080/geoserver/wms', 
            params: {'LAYERS': 'armenia:streams', 'VERSION':'1.1.1'},
        ratio: 1
        })
    });
    var osmLayer = new ol.layer.Tile({
        source: new ol.source.OSM()
    });
    var map = new ol.Map({
        layers: [osmLayer,hospitalLayer,villageLayer,streamsLayer],
        target: "map",
        view: new ol.View({
            center: [4850081.779620942, 4722728.364153638, 5193861.933129619,5059946.534532629],
            zoom: "4"
        })
    });
}