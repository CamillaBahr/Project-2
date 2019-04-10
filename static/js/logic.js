// Store our API endpoint inside queryUrl
var queryUrl = "https://data.humdata.org/dataset/a60ac839-920d-435a-bf7d-25855602699d/resource/7234d067-2d74-449a-9c61-22ae6d98d928/download/volcano.json";

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
});

function getColorE(d) {
  return d > 6 ? '#B10026' :
         d > 5 ? '#E31A1C' :
         d > 4 ? '#FC4E2A' :
         d > 3 ? '#FD8D3C' :
         d > 2 ? '#FEB24C' :
         d > 1 ? '#FED976' :
                    '#FFFFB2';
}

function getColorP(d) {
    return d > 6 ? '#084594' :
           d > 5 ? '#2171B5' :
           d > 4 ? '#4292C6' :
           d > 3 ? '#6BAED6' :
           d > 2 ? '#9ECAE1' :
           d > 1 ? '#C6DBEF' :
                      '#EFF3FF';
  }

function createFeatures(volcanoData) {

  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  var explosivevolcanoes = L.geoJSON(volcanoData, {
    pointToLayer: function (feature, latlng) {
      var popupContent = "<h3>" + feature.properties.V_Name + "</h3><hr><p>Volcanic Explosivity Index: " + feature.properties.VEI_Holoce + "</p>";
      
      function getOptions(properties) {
          if (properties.VEI_Holoce === "7") {
              return {
                  radius: (properties.VEI_Holoce * 3),
                  color: getColorE(properties.VEI_Holoce),
                  fillOpacity: 0.75,
                  fillColor: getColorE(properties.VEI_Holoce)
              };
          } else if (properties.VEI_Holoce === "6") {
              return {
                  radius: (properties.VEI_Holoce * 3),
                  color: getColorE(properties.VEI_Holoce),
                  fillOpacity: 0.75,
                  fillColor: getColorE(properties.VEI_Holoce)
              };
          } else if (properties.VEI_Holoce === "5") {
              return {
                  radius: (properties.VEI_Holoce * 3),
                  color: getColorE(properties.VEI_Holoce),
                  fillOpacity: 0.75,
                  fillColor: getColorE(properties.VEI_Holoce)
              };
          } else if (properties.VEI_Holoce === "4") {
              return {
                  radius: (properties.VEI_Holoce * 2),
                  color: getColorE(properties.VEI_Holoce),
                  fillOpacity: 0.75,
                  fillColor: getColorE(properties.VEI_Holoce)
              };
          } else if (properties.VEI_Holoce === "3") {
              return {
                  radius: (properties.VEI_Holoce * 2),
                  color: getColorE(properties.VEI_Holoce),
                  fillOpacity: 0.75,
                  fillColor: getColorE(properties.VEI_Holoce)
              };
          } else if (properties.VEI_Holoce === "2") {
              return {
                  radius: (properties.VEI_Holoce * 2),
                  color: getColorE(properties.VEI_Holoce),
                  fillOpacity: 0.75,
                  fillColor: getColorE(properties.VEI_Holoce)
              };
          } else {
              return {
                  radius: 2,
                  color: getColorE(properties.VEI_Holoce),
                  fillOpacity: 0.75,
                  fillColor: getColorE(properties.VEI_Holoce)
              };
          }
      }
      return L.circleMarker(latlng, getOptions(feature.properties)).bindPopup(popupContent);
      
      }

  });

  var popvolcanoes = L.geoJSON(volcanoData, {
    pointToLayer: function (feature, latlng) {
      var popupContent = "<h3>" + feature.properties.V_Name + "</h3><hr><p>Population Exposure Index: " + feature.properties.PEI + "</p>";
      
      function getOptions(properties) {
          if (properties.PEI === 7) {
              return {
                  radius: (properties.PEI * 3),
                  color: getColorP(properties.PEI),
                  fillOpacity: 0.75,
                  fillColor: getColorP(properties.PEI)
              };
          } else if (properties.PEI === 6) {
              return {
                  radius: (properties.PEI * 3),
                  color: getColorP(properties.PEI),
                  fillOpacity: 0.75,
                  fillColor: getColorP(properties.PEI)
              };
          } else if (properties.PEI === 5) {
              return {
                  radius: (properties.PEI * 3),
                  color: getColorP(properties.PEI),
                  fillOpacity: 0.75,
                  fillColor: getColorP(properties.PEI)
              };
          } else if (properties.PEI === 4) {
              return {
                  radius: (properties.PEI * 2),
                  color: getColorP(properties.PEI),
                  fillOpacity: 0.75,
                  fillColor: getColorP(properties.PEI)
              };
          } else if (properties.PEI === 3) {
              return {
                  radius: (properties.PEI * 2),
                  color: getColorP(properties.PEI),
                  fillOpacity: 0.75,
                  fillColor: getColorP(properties.PEI)
              };
          } else if (properties.PEI === 2) {
              return {
                  radius: (properties.PEI * 2),
                  color: getColorP(properties.PEI),
                  fillOpacity: 0.75,
                  fillColor: getColorP(properties.PEI)
              };
          } else {
              return {
                  radius: 2,
                  color: getColorP(properties.PEI),
                  fillOpacity: 0.75,
                  fillColor: getColorP(properties.PEI)
              };
          }
      }
      return L.circleMarker(latlng, getOptions(feature.properties)).bindPopup(popupContent);
      
      }

  });

  // Sending our earthquakes layer to the createMap function
  createMap(explosivevolcanoes, popvolcanoes);
}

function createMap(explosivevolcanoes, popvolcanoes) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Explosivity: explosivevolcanoes,
    Exposure: popvolcanoes
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("container", "map", {
    center: [
      18.4521, 1.4097
    ],
    zoom: 2.5,
    layers: [darkmap, explosivevolcanoes]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}
