queue()
    .defer(d3.csv, "assets/data/data.csv")
    .await(makeGraphs);

//Create variables for each chart

var attacksByYear = dc.barChart('#chart-one')
var attacksByCountry = dc.barChart('chart-two')



//Convert CSV file into readable format
function makeGraphs(data) {
    
    console.log(data)
    // var ndx = crossfilter(data);

    // var yearDim = ndx.dimension(dc.pluck('Year'));
    // var yearGroup = yearDim.group();

    // attacksByYear
    //     .width(300)
    //     .height(1000)
    //     .dimension(yearDim)
    //     .group(yearGroup)
    //     .x(d3.scale.linear().domain(yearDim))
    //     .xUnits(dc.units.linear)
    //     .xAxisLabel("Year")
    //     .yAxisLabel("Count")
    //     .brushOn(false)

    // dc.renderAll();
}