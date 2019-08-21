//Create variables for each chart

var attacksByYear = dc.barChart('#chart-one')
var attacksByCountry = dc.barChart('chart-two')



//Convert CSV file into readable format
d3.csv("assets/data/data.csv").then(function(data) {
    
    var ndx = crossfilter(data);

  });