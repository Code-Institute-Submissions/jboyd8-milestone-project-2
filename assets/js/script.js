queue()
    .defer(d3.csv, "assets/data/data.csv")
    .await(makeGraphs);






function makeGraphs(error, data) {
    var ndx = crossfilter(data);

    showAttacksByYear(ndx);
    showAttacksByCountry(ndx);
    showAttacksByReason(ndx)

    dc.renderAll();
}

function showAttacksByYear(ndx) {
    var dim = ndx.dimension(dc.pluck('Year'));
    var group = dim.group();

    dc.barChart('#chart-one')
        .width(1200)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Year')
        .yAxis().ticks(20)
}

function showAttacksByCountry(ndx) {
    var dim = ndx.dimension(dc.pluck('Country'));
    var group = dim.group();

    dc.barChart('#chart-three')
        .width(1500)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Country')
        .yAxis().ticks(20)
}

function showAttacksByReason(ndx) {
    var dim = ndx.dimension(dc.pluck('Type'));
    var group = dim.group();

    dc.pieChart
        .height(300)
        .radius(300)
        .dimension(dim)
        .group(group)
}