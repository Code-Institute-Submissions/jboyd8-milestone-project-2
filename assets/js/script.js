
//Call queue so data only renders once it is ready.
queue()
    .defer(d3.csv, "assets/data/data.csv")
    .await(makeGraphs);

//One function where all the charts are called and the crossfilter variable is created.
function makeGraphs(error, data) {
    var ndx = crossfilter(data);

    showAttacksByYear(ndx);
    showAttacksByCountry(ndx);
    showAttacksByReason(ndx);
    showAttacksByArea(ndx);
    showAttacksByOutcome(ndx);

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
        .xAxisLabel('Year')
        .yAxis().ticks(20)
}

function showAttacksByCountry(ndx) {
    var dim = ndx.dimension(dc.pluck('Country'));
    var group = dim.group();

    dc.barChart('#chart-two')
        .width(1000)
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

    dc.pieChart('#chart-three')
        .height(300)
        .radius(300)
        .dimension(dim)
        .group(group)
}

function showAttacksByArea(ndx) {
    var dim = ndx.dimension(dc.pluck('Area'));
    var group = dim.group();

    dc.pieChart('#chart-four')
        .height(300)
        .radius(300)
        .dimension(dim)
        .group(group)
}

function showAttacksByOutcome(ndx) {
    var dim = ndx.dimension(dc.pluck('Fatal (Y/N)'));
    var group = dim.group();

    dc.pieChart('#chart-five')
        .height(300)
        .radius(300)
        .dimension(dim)
        .group(group)
}