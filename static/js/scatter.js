var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Step 2: Create an SVG wrapper,
// append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
// =================================
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Load data 
d3.csv("data/volcanos.csv", function(error, volcanoData) {
  if (error) return console.warn(error);

  console.log(volcanoData);

  // log a list of names
  var names = volcanoData.map(data => data.name);
  console.log("names", names);

  var latitude = volcanoData.map(data => data.latitude);
  console.log("latitude", latitude);

  var longitude = volcanoData.map(data => data.longitude);
  console.log("longitude", longitude);

var active = volcanoData.map(data => data.active);
  console.log("active", active);

 var explosive = volcanoData.map(data => data.explosive);
  console.log("explosive", explosive);

 var year = volcanoData.map(data => data.startyear);
  console.log("startyear", year);

var months = volcanoData.map(data => data.startmonth);
console.log("startmonth", months);


  // Format the data
  volcanoData.forEach(function(data) {
    for (i = 0, len = volcanoData.length, text = ""; i < len; i++) { 
  text += volcanoData[i] + "<br>";
}
    volcanoData.forEach(function(data)) {
        for volcanoData.startyear == 2011;
        Plotly.plot(volcanoData.explosive)
    }
 volcanoData.forEach(function(data)) {
        for volcanoData.startyear == 2012;
        Plotly.plot(volcanoData.explosive)
    }
 volcanoData.forEach(function(data)) {
        for volcanoData.startyear == 2013;
        Plotly.plot(volcanoData.explosive)
    }
 volcanoData.forEach(function(data)) {
        for volcanoData.startyear == 2014;
        Plotly.plot(volcanoData.explosive)
    }
 volcanoData.forEach(function(data)) {
        for volcanoData.startyear == 2015;
        Plotly.plot(volcanoData.explosive)
    }
 volcanoData.forEach(function(data)) {
        for volcanoData.startyear == 2016;
        Plotly.plot(volcanoData.explosive)
    }
 volcanoData.forEach(function(data)) {
        for volcanoData.startyear == 2017;
        Plotly.plot(volcanoData.explosive)
    }
 volcanoData.forEach(function(data)) {
        for volcanoData.startyear == 2018;
        Plotly.plot(volcanoData.explosive)
    }
  });





 