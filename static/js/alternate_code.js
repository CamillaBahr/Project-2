// set the ranges
var x = d3.scaleLinear().domain(x_domain).range([padding, width]);
var y = d3.scaleLinear().domain([0, 550]).range([height, 0]);

// Add the X Axis
svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).ticks(6));

// Add the Y Axis
svg.append("g")
    .attr("class", "axis")
    .call(d3.axisLeft(y));

 //  Text label for the x-axis
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + margin.top + 9)
    .style("text-anchor", "center")
    .text("Day Date Format")
    .text("Year");

// Text Label for y-axis
svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Number of crime incidents");