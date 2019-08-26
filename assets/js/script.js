
//Call queue so data only renders once it is ready.
queue()
    .defer(d3.csv, "assets/data/data.csv")
    .await(makeGraphs);

//One function where all the charts are called and the crossfilter variable is created as well as some percentage caluculations.
function makeGraphs(error, data) {
    var ndx = crossfilter(data);

    filterAttacksByYear(ndx);
    filterAttacksByType(ndx);
    filterAttacksByOutcome(ndx);
    showAttacksByYear(ndx);
    showAttacksByCountry(ndx);
    showAttacksByReason(ndx);
    showAttacksByArea(ndx);
    showAttacksByOutcome(ndx);

    dc.renderAll();

    //Create an object to store count totals of each year. I found this code on stack overflow at https://stackoverflow.com/questions/38296484/count-text-fields-from-csv-dataset-in-d3-js
    var countObj = {};

    data.forEach(function(d) {
        var year = d.Year;
        if(countObj[year] === undefined) {
            countObj[year] = 0;
        } else {
            countObj[year] = countObj[year] + 1;
        }
    });

    data.forEach(function(d) {
        var year = d.Year;
        d.Year = countObj[year];
    });

    //Code above this line was found on Stack Overflow

    //Create variables to stores the percentage values in.
    var year2000 = (countObj[2000] / 2159) * 100;
    var year2001 = (countObj[2001] / 2159) * 100;
    var year2002 = (countObj[2002] / 2159) * 100;
    var year2003 = (countObj[2003] / 2159) * 100;
    var year2004 = (countObj[2004] / 2159) * 100;
    var year2005 = (countObj[2005] / 2159) * 100;
    var year2006 = (countObj[2006] / 2159) * 100;
    var year2007 = (countObj[2007] / 2159) * 100;
    var year2008 = (countObj[2008] / 2159) * 100;
    var year2009 = (countObj[2009] / 2159) * 100;
    var year2010 = (countObj[2010] / 2159) * 100;
    var year2011 = (countObj[2011] / 2159) * 100;
    var year2012 = (countObj[2012] / 2159) * 100;
    var year2013 = (countObj[2013] / 2159) * 100;
    var year2014 = (countObj[2014] / 2159) * 100;
    var year2015 = (countObj[2015] / 2159) * 100;
    var year2016 = (countObj[2016] / 2159) * 100;
    var year2017 = (countObj[2017] / 2159) * 100;
    var year2018 = (countObj[2018] / 2159) * 100;


    //append a list to index.html with percentage values shown.
    $('#year-paragraph').append(' \
        <ul style="list-style: none;"> \
            <li>2000 = '+ year2000.toFixed(2) +'%<li> \
            <li>2001 = '+ year2001.toFixed(2) +'%<li> \
            <li>2002 = '+ year2002.toFixed(2) +'%<li> \
            <li>2003 = '+ year2003.toFixed(2) +'%<li> \
            <li>2004 = '+ year2004.toFixed(2) +'%<li> \
            <li>2005 = '+ year2005.toFixed(2) +'%<li> \
            <li>2006 = '+ year2006.toFixed(2) +'%<li> \
            <li>2007 = '+ year2007.toFixed(2) +'%<li> \
            <li>2008 = '+ year2008.toFixed(2) +'%<li> \
            <li>2009 = '+ year2009.toFixed(2) +'%<li> \
            <li>2010 = '+ year2010.toFixed(2) +'%<li> \
            <li>2011 = '+ year2011.toFixed(2) +'%<li> \
            <li>2012 = '+ year2012.toFixed(2) +'%<li> \
            <li>2013 = '+ year2013.toFixed(2) +'%<li> \
            <li>2014 = '+ year2014.toFixed(2) +'%<li> \
            <li>2015 = '+ year2015.toFixed(2) +'%<li> \
            <li>2016 = '+ year2016.toFixed(2) +'%<li> \
            <li>2017 = '+ year2017.toFixed(2) +'%<li> \
            <li>2018 = '+ year2018.toFixed(2) +'%<li> \
        </ul>');

    //Create an object to store counts of types
    var typeObj = {};

    data.forEach(function(d) {
        var type = d.Type;
        if(typeObj[type] === undefined) {
            typeObj[type] = 0;
        } else {
            typeObj[type] = typeObj[type] + 1;
        }
    });

    data.forEach(function(d) {
        var type = d.Type;
        d.Type = typeObj[type];
    });

    //Create variables to store %sof types
    var typeInvalid = (typeObj['Invalid'] / 2159) * 100;
    var typeProvoked = (typeObj['Provoked'] / 2159) * 100;
    var typeQuestionable = (typeObj['Questionable'] / 2159) * 100;
    var typeSD = (typeObj['Sea Disaster'] / 2159) * 100;
    var typeUI = (typeObj['Under investigation'] / 2159) * 100;
    var typeUnknown = (typeObj['Unknown'] / 2159) * 100;
    var typeUnprovoked = (typeObj['Unprovoked'] / 2159) * 100;
    var typeWatercraft = (typeObj['Watercraft'] / 2159) * 100;

    //append %s to html
    $('#type-paragraph').append(' \
        <ul style="list-style: none;"> \
            <li>Invalid = '+ typeInvalid.toFixed(2) +'%<li> \
            <li>Provoked = '+ typeProvoked.toFixed(2) +'%<li> \
            <li>Questionable = '+ typeQuestionable.toFixed(2) +'%<li> \
            <li>Sea Disaster = '+ typeSD.toFixed(2) +'%<li> \
            <li>Under Investigation = '+ typeUI.toFixed(2) +'%<li> \
            <li>Unknown = '+ typeUnknown.toFixed(2) +'%<li> \
            <li>Unprovoked = '+ typeUnprovoked.toFixed(2) +'%<li> \
            <li>Watercraft = '+ typeWatercraft.toFixed(2) +'%<li> \
        </ul>');


    //Create an object to store counts of outcomes
    var fatalObj = {};

    data.forEach(function(d) {
        var outcome = d.Fatal;
        if(fatalObj[outcome] === undefined) {
            fatalObj[outcome] = 0;
        } else {
            fatalObj[outcome] = fatalObj[outcome] + 1;
        }
    });

    data.forEach(function(d) {
        var outcome = d.Fatal;
        d.Fatal = fatalObj[outcome];
    });

    //variables to calculate % of each outcome
    var outcomeY = (fatalObj['Y'] / 2159) * 100;
    var outcomeN = (fatalObj['N'] / 2159) * 100;
    var outcomeUnknown = (fatalObj['Unknown'] / 2159) * 100;

    //append %s to html
    $('#fatal-paragraph').append(' \
        <ul style="list-style: none;"> \
            <li>Y = '+ outcomeY.toFixed(2) +'%<li> \
            <li>N = '+ outcomeN.toFixed(2) +'%<li> \
            <li>Unknown = '+ outcomeUnknown.toFixed(2) +'%<li> \
        </ul>');


};

function filterAttacksByYear(ndx) {
    var dim = ndx.dimension(dc.pluck('Year'));
    var group = dim.group();

    dc.selectMenu('#year-filter')
        .dimension(dim)
        .group(group)
        .promptText('Show all years')
};

function filterAttacksByType(ndx) {
    var dim = ndx.dimension(dc.pluck('Type'));
    var group = dim.group();

    dc.selectMenu('#type-filter')
        .dimension(dim)
        .group(group)
        .promptText('Show all types')
};

function filterAttacksByOutcome(ndx) {
    var dim = ndx.dimension(dc.pluck('Fatal'));
    var group = dim.group();

    dc.selectMenu('#fatal-filter')
        .dimension(dim)
        .group(group)
        .promptText('Show all outcomes')
};

function showAttacksByYear(ndx) {
    var dim = ndx.dimension(dc.pluck('Year'));
    var group = dim.group();

    dc.barChart('#chart-one')
        .width(500)
        .height(300)
        .margins({top: 10, right: 10, bottom: 30, left: 70})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .yAxis().ticks(20)
};

function showAttacksByCountry(ndx) {
    var dim = ndx.dimension(dc.pluck('Country'));
    var group = dim.group();

    dc.barChart('#chart-two')
        .width(500)
        .height(300)
        .margins({top: 10, right: 10, bottom: 30, left: 100})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .yAxis().ticks(20)
};

function showAttacksByReason(ndx) {
    var dim = ndx.dimension(dc.pluck('Type'));
    var group = dim.group();

    dc.pieChart('#chart-three')
        .height(300)
        .width(500)
        .radius(150)
        .dimension(dim)
        .group(group)
        .legend(dc.legend().x(0).y(0));
};

function showAttacksByArea(ndx) {
    var dim = ndx.dimension(dc.pluck('Area'));
    var group = dim.group();

    dc.pieChart('#chart-four')
        .height(300)
        .width(500)
        .radius(150)
        .dimension(dim)
        .group(group)
        .legend(dc.legend().x(0).y(0));
};

function showAttacksByOutcome(ndx) {
    var dim = ndx.dimension(dc.pluck('Fatal'));
    var group = dim.group();

    dc.pieChart('#chart-five')
        .height(300)
        .width(500)
        .radius(150)
        .dimension(dim)
        .group(group)
        .legend(dc.legend().x(0).y(0));
};

$(document).ready( function () {

    /*$('#table').DataTable( {
       data: (d3.csv, "assets/data/data.csv"),
       columns: [
           {title: "Case Number"},
           {title: "Date"},
           {title: "Year"},
           {title: "Type"},
           {title: "Country"},
           {title: "Area"},
           {title: "Location"},
           {title: "Activity"},
           {title: "Sex"},
           {title: "Age"},
           {title: "Injury"},
           {title: "Fatal(Y/N"},
           {title: "Time"},
           {title: "Species"}
       ]
   });*/

    $('.instruction-button').on('click', function() {
        $('.jumbotron').slideToggle('slow')
    });

    $('#year-button').on('click', function() {
        $('#year-percentages').slideToggle('slow')
    });

    $('#country-button').on('click', function() {
        $('#country-percentages').slideToggle('slow')
    });

    $('#type-button').on('click', function() {
        $('#type-percentages').slideToggle('slow')
    });

    $('#area-button').on('click', function() {
        $('#area-percentages').slideToggle('slow')
    });

    $('#fatal-button').on('click', function() {
        $('#fatal-percentages').slideToggle('slow')
    });


    //functionality for the reset button. Reset all filters and re-render charts
    $('#reset-button').on('click', function() {
        dc.filterAll();
        dc.renderAll();
    });
});