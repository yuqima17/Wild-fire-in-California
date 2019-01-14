

require([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic"
], function(Map, MapView,Graphic) {
  var map = new Map({
    basemap: "streets"
  });

  var view = new MapView({
    container: "viewDiv",  // Reference to the DOM node that will contain the view
    map: map               // References the map object created in step 3
  });
  var point = {
        type: "point", // autocasts as new Point()
        longitude: -49.97,
        latitude: 41.73
      };
  var markerSymbol = {
        type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
        color: [226, 119, 40],
        outline: { // autocasts as new SimpleLineSymbol()
          color: [255, 255, 255],
          width: 2
        }
      };
         var pointGraphic = new Graphic({
        geometry: point,
        symbol: markerSymbol
      });
       view.graphics.add(pointGraphic);
      
});