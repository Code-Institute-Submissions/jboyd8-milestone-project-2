
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
        .width(700)
        .height(300)
        .margins({top: 10, right: 10, bottom: 30, left: 70})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .yAxis().ticks(20)
}

function showAttacksByCountry(ndx) {
    var dim = ndx.dimension(dc.pluck('Country'));
    var group = dim.group();

    dc.barChart('#chart-two')
        .width(700)
        .height(300)
        .margins({top: 10, right: 10, bottom: 30, left: 100})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .legend(dc.legend().x(10).y(10).itemHeight(15).gap(0))
        .yAxis().ticks(20)
}

function showAttacksByReason(ndx) {
    var dim = ndx.dimension(dc.pluck('Type'));
    var group = dim.group();

    dc.pieChart('#chart-three')
        .height(300)
        .width(700)
        .radius(150)
        .dimension(dim)
        .group(group)
        .legend(dc.legend().x(0).y(0));
}

function showAttacksByArea(ndx) {
    var dim = ndx.dimension(dc.pluck('Area'));
    var group = dim.group();

    dc.pieChart('#chart-four')
        .height(300)
        .width(700)
        .radius(150)
        .dimension(dim)
        .group(group)
        .legend(dc.legend().x(0).y(0));
}

function showAttacksByOutcome(ndx) {
    var dim = ndx.dimension(dc.pluck('Fatal (Y/N)'));
    var group = dim.group();

    dc.pieChart('#chart-five')
        .height(300)
        .width(700)
        .radius(150)
        .dimension(dim)
        .group(group)
        .legend(dc.legend().x(0).y(0));
}

$(document).ready( function () {
    $('#table_id').DataTable();

    $('.instruction-button').on('click', function() {
        $('.jumbotron').slideToggle('slow')
    })
});