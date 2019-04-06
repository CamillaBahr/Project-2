// Define SVG area dimensions
var svgWidth = 1500;
var svgHeight = 400;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 40,
  bottom: 30,
  left: 40
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from hours-of-tv-watched.csv
d3.csv("volcanos.csv", function(error, volcanos) {

  // Log an error if one exists
  if (error) return console.warn(error);

  // Print the volcanos
  console.log(volcanos);

  // Cast the hours value to a number for each piece of tvData
  volcanos.forEach(function(data) {
    data.explosive = +data.explosive;
  });

  var barSpacing = 7; // desired space between each bar
  var scaleY = 100; // 10x scale on rect height

  // @TODO
  // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
  var barWidth = Math.abs((chartWidth - (barSpacing * (volcanos.length - 1)))) / volcanos.length;

  // Create code to build the bar chart using the tvData.
  chartGroup.selectAll(".bar")
    .data(volcanos)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("width", d => barWidth)
    .attr("height", d => d.explosive * scaleY)
    .attr("x", (d, i) => i * (barWidth + barSpacing))
    .attr("y", d => chartHeight - d.explosive * scaleY);
});
