var wwd = new WorldWind.WorldWindow("canvasOne");


var layers = [

    // Imagery layers.

    { layer: new WorldWind.BMNGLayer(), enabled: true },

    { layer: new WorldWind.BMNGLandsatLayer(), enabled: true },

    { layer: new WorldWind.BingAerialWithLabelsLayer(), enabled: true },


    // Add atmosphere layer on top of all base layers.


    { layer: new WorldWind.StarFieldLayer(), enabled: true },


    // WorldWindow UI layers.

    { layer: new WorldWind.CompassLayer(), enabled: true },

    { layer: new WorldWind.CoordinatesDisplayLayer(wwd), enabled: true },

    { layer: new WorldWind.ViewControlsLayer(wwd), enabled: true }

];



for (var l = 0; l < layers.length; l++) {

    layers[l].layer.enabled = layers[l].enabled;

    wwd.addLayer(layers[l].layer);

}

var atmosphereLayer = new WorldWind.AtmosphereLayer();
wwd.addLayer(atmosphereLayer);

var timeStamp = Date.now();
setInterval(function () {
    timeStamp += 180 * 1000;
    atmosphereLayer.time = new Date(timeStamp);
    wwd.redraw();
}, 64);





function Marker() {
    var placemarkLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(placemarkLayer);

    var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);

    placemarkAttributes.imageOffset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION, 0.3,
        WorldWind.OFFSET_FRACTION, 0.0);

    placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION, 0.5,
        WorldWind.OFFSET_FRACTION, 1.0);

    placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/pushpins/plain-red.png";

    var position = new WorldWind.Position(70.0, -106.0, 100.0);
    var placemark = new WorldWind.Placemark(position, false, placemarkAttributes);
    placemark.label = "Placemark2\n" +
        "Lat " + placemark.position.latitude.toPrecision(4).toString() + "\n" +
        "Lon " + placemark.position.longitude.toPrecision(5).toString();
    placemark.alwaysOnTop = true;

    var element = document.createElement("input");
    element.setAttribute("type", "button");
    element.setAttribute("value", "invert");
    element.setAttribute("name", "button3");
    element.setAttribute("onclick", "foo()");
    document.flotta.appendChild(element);

    placemarkLayer.addRenderable(placemark);
}

function truecolor() {

    var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
    var layerName = "VIIRS_543D";

    var createLayer = function (xmlDom) {
        var wms = new WorldWind.WmsCapabilities(xmlDom);
        var wmsLayerCapabilities = wms.getNamedLayer(layerName);
        var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(wmsLayer);
    };

    var logError = function (jqXhr, text, exception) {
        console.log("There was a failure retrieving the capabilities document: " +
            text +
            " exception: " + exception);
    };
    $.get(serviceAddress).done(createLayer).fail(logError);
}


function aerosol() {

    var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
    var layerName = "MODAL2_M_AER_OD";

    var createLayer = function (xmlDom) {
        var wms = new WorldWind.WmsCapabilities(xmlDom);
        var wmsLayerCapabilities = wms.getNamedLayer(layerName);
        var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(wmsLayer);
    };

    var logError = function (jqXhr, text, exception) {
        console.log("There was a failure retrieving the capabilities document: " +
            text +
            " exception: " + exception);
    };
    $.get(serviceAddress).done(createLayer).fail(logError);
}

function seatemp() {

    var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
    var layerName = "AVHRR_SST_M";

    var createLayer = function (xmlDom) {
        var wms = new WorldWind.WmsCapabilities(xmlDom);
        var wmsLayerCapabilities = wms.getNamedLayer(layerName);
        var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(wmsLayer);
    };

    var logError = function (jqXhr, text, exception) {
        console.log("There was a failure retrieving the capabilities document: " +
            text +
            " exception: " + exception);
    };
    $.get(serviceAddress).done(createLayer).fail(logError);
}


function landtemp() {

    var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
    var layerName = "MOD_LSTD_CLIM_M";

    var createLayer = function (xmlDom) {
        var wms = new WorldWind.WmsCapabilities(xmlDom);
        var wmsLayerCapabilities = wms.getNamedLayer(layerName);
        var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(wmsLayer);
    };

    var logError = function (jqXhr, text, exception) {
        console.log("There was a failure retrieving the capabilities document: " +
            text +
            " exception: " + exception);
    };
    $.get(serviceAddress).done(createLayer).fail(logError);
}


function afire() {

    var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
    var layerName = "MOD14A1_M_FIRE";

    var createLayer = function (xmlDom) {
        var wms = new WorldWind.WmsCapabilities(xmlDom);
        var wmsLayerCapabilities = wms.getNamedLayer(layerName);
        var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(wmsLayer);
    };

    var logError = function (jqXhr, text, exception) {
        console.log("There was a failure retrieving the capabilities document: " +
            text +
            " exception: " + exception);
    };
    $.get(serviceAddress).done(createLayer).fail(logError);
}


function aleaf() {

    var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
    var layerName = "MOD15A2_M_LAI";

    var createLayer = function (xmlDom) {
        var wms = new WorldWind.WmsCapabilities(xmlDom);
        var wmsLayerCapabilities = wms.getNamedLayer(layerName);
        var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(wmsLayer);
    };

    var logError = function (jqXhr, text, exception) {
        console.log("There was a failure retrieving the capabilities document: " +
            text +
            " exception: " + exception);
    };
    $.get(serviceAddress).done(createLayer).fail(logError);
}


function aveg() {

    var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
    var layerName = "MOD_NDVI_M";

    var createLayer = function (xmlDom) {
        var wms = new WorldWind.WmsCapabilities(xmlDom);
        var wmsLayerCapabilities = wms.getNamedLayer(layerName);
        var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(wmsLayer);
    };

    var logError = function (jqXhr, text, exception) {
        console.log("There was a failure retrieving the capabilities document: " +
            text +
            " exception: " + exception);
    };
    $.get(serviceAddress).done(createLayer).fail(logError);
}


function popul() {

    var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
    var layerName = "SEDAC_POP";

    var createLayer = function (xmlDom) {
        var wms = new WorldWind.WmsCapabilities(xmlDom);
        var wmsLayerCapabilities = wms.getNamedLayer(layerName);
        var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(wmsLayer);
    };

    var logError = function (jqXhr, text, exception) {
        console.log("There was a failure retrieving the capabilities document: " +
            text +
            " exception: " + exception);
    };
    $.get(serviceAddress).done(createLayer).fail(logError);
}

function bathy() {

    var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
    var layerName = "GEBCO_BATHY";

    var createLayer = function (xmlDom) {
        var wms = new WorldWind.WmsCapabilities(xmlDom);
        var wmsLayerCapabilities = wms.getNamedLayer(layerName);
        var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(wmsLayer);
    };

    var logError = function (jqXhr, text, exception) {
        console.log("There was a failure retrieving the capabilities document: " +
            text +
            " exception: " + exception);
    };
    $.get(serviceAddress).done(createLayer).fail(logError);
}





function southa() {
    var polygonLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(polygonLayer);

    var polygonAttributes = new WorldWind.ShapeAttributes(null);
    polygonAttributes.interiorColor = new WorldWind.Color(0, 1, 1, 0.5);
    polygonAttributes.outlineColor = WorldWind.Color.BLUE;
    polygonAttributes.drawOutline = true;
    polygonAttributes.applyLighting = true;
    polygonAttributes.drawVerticals = true;


    var boundaries = [];
    boundaries.push(new WorldWind.Position(-55.0, -70.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-53.0, -74.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-48.0, -75.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-18.0, -70.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-14.0, -75.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-5.0, -81.0, 1000000.0));
    boundaries.push(new WorldWind.Position(12.0, -73.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-5.0, -34.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-21.0, -40.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-25.0, -47.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-28.0, -48.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-38.0, -57.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-42.0, -63.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-52.0, -68.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-54.0, -65.0, 1000000.0));


    var polygon = new WorldWind.Polygon(boundaries, polygonAttributes);
    polygon.extrude = true;
    polygonLayer.addRenderable(polygon);
}


function africa() {
    var polygonLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(polygonLayer);

    var polygonAttributes = new WorldWind.ShapeAttributes(null);
    polygonAttributes.interiorColor = new WorldWind.Color(0, 1, 1, 0.5);
    polygonAttributes.outlineColor = WorldWind.Color.BLUE;
    polygonAttributes.drawOutline = true;
    polygonAttributes.applyLighting = true;
    polygonAttributes.drawVerticals = true;

    var boundaries = [];
    boundaries.push(new WorldWind.Position(-35.0, 20.0, 1400000.0));
    boundaries.push(new WorldWind.Position(-15.0, 11.0, 1400000.0));
    boundaries.push(new WorldWind.Position(-10.0, 13.0, 1400000.0));
    boundaries.push(new WorldWind.Position(-1.0, 8.0, 1400000.0));
    boundaries.push(new WorldWind.Position(3.0, 9.0, 1400000.0));
    boundaries.push(new WorldWind.Position(4.0, 6.0, 1400000.0));
    boundaries.push(new WorldWind.Position(4.0, -7.0, 1400000.0));
    boundaries.push(new WorldWind.Position(12.0, -16.0, 1400000.0));
    boundaries.push(new WorldWind.Position(22.0, -16.0, 1400000.0));
    boundaries.push(new WorldWind.Position(35.0, -5.0, 1400000.0));
    boundaries.push(new WorldWind.Position(37.0, 10.0, 1400000.0));
    boundaries.push(new WorldWind.Position(34.0, 10.0, 1400000.0));
    boundaries.push(new WorldWind.Position(30.0, 19.0, 1400000.0));
    boundaries.push(new WorldWind.Position(33.0, 21.0, 1400000.0));
    boundaries.push(new WorldWind.Position(30.0, 32.0, 1400000.0));
    boundaries.push(new WorldWind.Position(15.0, 39.0, 1400000.0));
    boundaries.push(new WorldWind.Position(10.0, 44.0, 1400000.0));
    boundaries.push(new WorldWind.Position(12.0, 51.0, 1400000.0));
    boundaries.push(new WorldWind.Position(9.40, 50.84, 1400000.0));
    boundaries.push(new WorldWind.Position(2.0, 46.0, 1400000.0));
    boundaries.push(new WorldWind.Position(-6.0, 39.0, 1400000.0));
    boundaries.push(new WorldWind.Position(-15.0, 40.80, 1400000.0));
    boundaries.push(new WorldWind.Position(-20.0, 34.80, 1400000.0));
    boundaries.push(new WorldWind.Position(-24.23, 35.37, 1400000.0));
    boundaries.push(new WorldWind.Position(-25.70, 32.80, 1400000.0));
    boundaries.push(new WorldWind.Position(-29.70, 31.80, 1400000.0));
    boundaries.push(new WorldWind.Position(-34.0, 27.0, 1400000.0));
    boundaries.push(new WorldWind.Position(-34.29, 22.0, 1400000.0));


    var polygon = new WorldWind.Polygon(boundaries, polygonAttributes);
    polygon.extrude = true;
    polygonLayer.addRenderable(polygon);
}


function aus() {
    var polygonLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(polygonLayer);

    var polygonAttributes = new WorldWind.ShapeAttributes(null);
    polygonAttributes.interiorColor = new WorldWind.Color(0, 1, 1, 0.5);
    polygonAttributes.outlineColor = WorldWind.Color.BLUE;
    polygonAttributes.drawOutline = true;
    polygonAttributes.applyLighting = true;
    polygonAttributes.drawVerticals = true;

    var boundaries = [];
    boundaries.push(new WorldWind.Position(-37.0, 150.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-39.0, 146.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-37.70, 140.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-35.0, 135.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-31.50, 131.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-35.0, 116.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-22.0, 114.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-19.0, 121.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-14.0, 127.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-15.0, 129.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-14.0, 129.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-11.0, 132.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-12.0, 137.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-15.0, 135.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-17.60, 140.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-10.60, 142.40, 1000000.0));
    boundaries.push(new WorldWind.Position(-19.0, 146.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-25.0, 153.0, 1000000.0));
    boundaries.push(new WorldWind.Position(-28.50, 153.50, 1000000.0));



    var polygon = new WorldWind.Polygon(boundaries, polygonAttributes);
    polygon.extrude = true;
    polygonLayer.addRenderable(polygon);
}


function asia() {
    var polygonLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(polygonLayer);

    var polygonAttributes = new WorldWind.ShapeAttributes(null);
    polygonAttributes.interiorColor = new WorldWind.Color(0, 1, 1, 0.5);
    polygonAttributes.outlineColor = WorldWind.Color.BLUE;
    polygonAttributes.drawOutline = true;
    polygonAttributes.applyLighting = true;
    polygonAttributes.drawVerticals = true;


    var boundaries = [];
    boundaries.push(new WorldWind.Position(24.0, 118.0, 2200000.0));
    boundaries.push(new WorldWind.Position(9.0, 106.0, 2200000.0));
    boundaries.push(new WorldWind.Position(8.0, 77.0, 2200000.0));
    boundaries.push(new WorldWind.Position(25.0, 66.0, 2200000.0));
    boundaries.push(new WorldWind.Position(12.50, 44.50, 2200000.0));
    boundaries.push(new WorldWind.Position(31.50, 34.50, 2200000.0));
    boundaries.push(new WorldWind.Position(68.0, 37.0, 2200000.0));
    boundaries.push(new WorldWind.Position(71.0, 134.0, 2200000.0));
    boundaries.push(new WorldWind.Position(66.0, -171.0, 2200000.0));
    boundaries.push(new WorldWind.Position(35.0, 140.0, 2200000.0));
    boundaries.push(new WorldWind.Position(30.0, 122.0, 2200000.0));




    var polygon = new WorldWind.Polygon(boundaries, polygonAttributes);
    polygon.extrude = true;
    polygonLayer.addRenderable(polygon);
}

function eu() {
    var polygonLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(polygonLayer);

    var polygonAttributes = new WorldWind.ShapeAttributes(null);
    polygonAttributes.interiorColor = new WorldWind.Color(0, 1, 1, 0.5);
    polygonAttributes.outlineColor = WorldWind.Color.BLUE;
    polygonAttributes.drawOutline = true;
    polygonAttributes.applyLighting = true;
    polygonAttributes.drawVerticals = true;


    var boundaries = [];
    boundaries.push(new WorldWind.Position(36.0, 33.0, 2000000.0));
    boundaries.push(new WorldWind.Position(36.0, -9.0, 2000000.0));
    boundaries.push(new WorldWind.Position(59.0, -7.0, 2000000.0));
    boundaries.push(new WorldWind.Position(71.0, 28.0, 2000000.0));
    boundaries.push(new WorldWind.Position(69.50, 35.50, 2000000.0));
    



    var polygon = new WorldWind.Polygon(boundaries, polygonAttributes);
    polygon.extrude = true;
    polygonLayer.addRenderable(polygon);
}



function northa() {
    var polygonLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(polygonLayer);

    var polygonAttributes = new WorldWind.ShapeAttributes(null);
    polygonAttributes.interiorColor = new WorldWind.Color(0, 1, 1, 0.5);
    polygonAttributes.outlineColor = WorldWind.Color.BLUE;
    polygonAttributes.drawOutline = true;
    polygonAttributes.applyLighting = true;
    polygonAttributes.drawVerticals = true;


    var boundaries = [];
    boundaries.push(new WorldWind.Position(7.0, -78.0, 2000000.0));
    boundaries.push(new WorldWind.Position(20.0, -106.0, 2000000.0));
    boundaries.push(new WorldWind.Position(40.0, -124.0, 2000000.0));
    boundaries.push(new WorldWind.Position(60.0, -140.0, 2000000.0));
    boundaries.push(new WorldWind.Position(55.0, -163.0, 2000000.0));
    boundaries.push(new WorldWind.Position(70.0, -165.0, 2000000.0));
    boundaries.push(new WorldWind.Position(69.0, -136.0, 2000000.0));
    boundaries.push(new WorldWind.Position(81.0, -14.0, 2000000.0));
    boundaries.push(new WorldWind.Position(70.0, -21.0, 2000000.0));
    boundaries.push(new WorldWind.Position(60.0, -43.0, 2000000.0));
    boundaries.push(new WorldWind.Position(62.0, -49.70, 2000000.0));
    boundaries.push(new WorldWind.Position(76.0, -60.0, 2000000.0));
    boundaries.push(new WorldWind.Position(74.50, -80.0, 2000000.0));
    boundaries.push(new WorldWind.Position(47.60, -52.50, 2000000.0));
    boundaries.push(new WorldWind.Position(31.0, -81.0, 2000000.0));
    boundaries.push(new WorldWind.Position(25.0, -80.0, 2000000.0));
    boundaries.push(new WorldWind.Position(25.50, -81.80, 2000000.0));
    boundaries.push(new WorldWind.Position(30.0, -84.0, 2000000.0));
    boundaries.push(new WorldWind.Position(28.0, -97.0, 2000000.0));
    boundaries.push(new WorldWind.Position(8.60, -77.30, 2000000.0));




    var polygon = new WorldWind.Polygon(boundaries, polygonAttributes);
    polygon.extrude = true;
    polygonLayer.addRenderable(polygon);
}


function clearmap() {

    window.location.reload();

}

