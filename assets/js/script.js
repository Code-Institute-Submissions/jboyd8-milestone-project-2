queue()
    .defer(d3.csv, "assets/data/data.csv")
    .await(makeGraphs);






function makeGraphs(error, data) {
    var ndx = crossfilter(data);

    showAttacksByYear(ndx);

    dc.renderAll();
}

function showAttacksByYear(ndx) {
    var dim = ndx.dimension(dc.pluck('Year'));
    var group = dim.group();

    dc.barChart('#chart-one')
        .width(1000)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel('Year')
        .yAxis().ticks(20)
}