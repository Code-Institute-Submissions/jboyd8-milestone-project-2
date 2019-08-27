
/* Call queue so data only renders once it is ready. 
    Also allows us to access the data in the CSV */
queue()
    .defer(d3.csv, "assets/data/data.csv")
    .await(makeGraphs);

/* One function where all the charts are called and the crossfilter 
    variable is created as well as the percentage caluculations.
*/
function makeGraphs(error, data) {
    /*Create a filter to pass to the chart function 
      so that the charts are interactive */
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

    calculateYearPercentages(data);
    calculateCountryPercentages(data);
    calculateTypePercentages(data);
    calculateAreaPercentages(data);
    calculateFatalPercentages(data);
}

/* Create an object to store the data in fromt he CSV. Then iterate thorugh the
    object in order to store the number of occurences for each year. Then store
    each year as a percentage in a variable and append it to the HTML.
    I found this code on stack overflow at 
    https://stackoverflow.com/questions/38296484/count-text-fields-from-csv-dataset-in-d3-js . 
    It has been adjusted to suit my needs. Not including the variables and the jQuery to manipulate the DOM */
function calculateYearPercentages(data) {
    var countObj = {};

    data.forEach(function (d) {
        var year = d.Year;
        if (countObj[year] === undefined) {
            countObj[year] = 0;
        } else {
            countObj[year] = countObj[year] + 1;
        }
    });

    data.forEach(function (d) {
        var year = d.Year;
        d.Year = countObj[year];
    });

    //Create variables to stores the percentage values in.
    var year2000 = (countObj[2000] / 1868) * 100;
    var year2001 = (countObj[2001] / 1868) * 100;
    var year2002 = (countObj[2002] / 1868) * 100;
    var year2003 = (countObj[2003] / 1868) * 100;
    var year2004 = (countObj[2004] / 1868) * 100;
    var year2005 = (countObj[2005] / 1868) * 100;
    var year2006 = (countObj[2006] / 1868) * 100;
    var year2007 = (countObj[2007] / 1868) * 100;
    var year2008 = (countObj[2008] / 1868) * 100;
    var year2009 = (countObj[2009] / 1868) * 100;
    var year2010 = (countObj[2010] / 1868) * 100;
    var year2011 = (countObj[2011] / 1868) * 100;
    var year2012 = (countObj[2012] / 1868) * 100;
    var year2013 = (countObj[2013] / 1868) * 100;
    var year2014 = (countObj[2014] / 1868) * 100;
    var year2015 = (countObj[2015] / 1868) * 100;
    var year2016 = (countObj[2016] / 1868) * 100;
    var year2017 = (countObj[2017] / 1868) * 100;
    var year2018 = (countObj[2018] / 1868) * 100;


    //append a list to index.html with percentage values shown.
    $('#year-paragraph').append(' \
        <ul style="list-style: none;"> \
            <li>2000 = '+ year2000.toFixed(2) + '%<li> \
            <li>2001 = '+ year2001.toFixed(2) + '%<li> \
            <li>2002 = '+ year2002.toFixed(2) + '%<li> \
            <li>2003 = '+ year2003.toFixed(2) + '%<li> \
            <li>2004 = '+ year2004.toFixed(2) + '%<li> \
            <li>2005 = '+ year2005.toFixed(2) + '%<li> \
            <li>2006 = '+ year2006.toFixed(2) + '%<li> \
            <li>2007 = '+ year2007.toFixed(2) + '%<li> \
            <li>2008 = '+ year2008.toFixed(2) + '%<li> \
            <li>2009 = '+ year2009.toFixed(2) + '%<li> \
            <li>2010 = '+ year2010.toFixed(2) + '%<li> \
            <li>2011 = '+ year2011.toFixed(2) + '%<li> \
            <li>2012 = '+ year2012.toFixed(2) + '%<li> \
            <li>2013 = '+ year2013.toFixed(2) + '%<li> \
            <li>2014 = '+ year2014.toFixed(2) + '%<li> \
            <li>2015 = '+ year2015.toFixed(2) + '%<li> \
            <li>2016 = '+ year2016.toFixed(2) + '%<li> \
            <li>2017 = '+ year2017.toFixed(2) + '%<li> \
            <li>2018 = '+ year2018.toFixed(2) + '%<li> \
        </ul>');
}

/* Create an object to store the data in fromt he CSV. Then iterate thorugh the
    object in order to store the number of occurences for each country. Then store
    each year as a percentage in a variable and append it to the HTML.
    I found this code on stack overflow at 
    https://stackoverflow.com/questions/38296484/count-text-fields-from-csv-dataset-in-d3-js . 
    It has been adjusted to suit my needs. Not including the variables and the jQuery to manipulate the DOM */
function calculateCountryPercentages(data) {
    var countryObj = {};

    data.forEach(function (d) {
        var country = d.Country;
        if (countryObj[country] === undefined) {
            countryObj[country] = 0;
        } else {
            countryObj[country] = countryObj[country] + 1;
        }
    });

    data.forEach(function (d) {
        var country = d.Country;
        d.Country = countryObj[country];
    });

    //Create variables to stores the percentage values in.
    var australia = (countryObj.AUSTRALIA / 1868) * 100;
    var bahamas = (countryObj.BAHAMAS / 1868) * 100;
    var brazil = (countryObj.BRAZIL / 1868) * 100;
    var egypt = (countryObj.EGYPT / 1868) * 100;
    var newCaledonia = (countryObj['NEW CALEDONIA'] / 1868) * 100;
    var newZealand = (countryObj['NEW ZEALAND'] / 1868) * 100;
    var reunion = (countryObj.REUNION / 1868) * 100;
    var southAfrica = (countryObj['SOUTH AFRICA'] / 1868) * 100;
    var mexico = (countryObj.MEXICO / 1868) * 100;
    var usa = (countryObj.USA / 1868) * 100;

    //append %s to html
    $('#country-paragraph').append(' \
        <ul style="list-style: none;"> \
            <li>Australia = '+ australia.toFixed(2) + '%<li> \
            <li>Bahamas = '+ bahamas.toFixed(2) + '%<li> \
            <li>Brazil = '+ brazil.toFixed(2) + '%<li> \
            <li>Egypt = '+ egypt.toFixed(2) + '%<li> \
            <li>Mexico = '+ mexico.toFixed(2) + '%<li> \
            <li>New Caledonia = '+ newCaledonia.toFixed(2) + '%<li> \
            <li>New Zealand = '+ newZealand.toFixed(2) + '%<li> \
            <li>Reunion = '+ reunion.toFixed(2) + '%<li> \
            <li>South Africa = '+ southAfrica.toFixed(2) + '%<li> \
            <li>USA = '+ usa.toFixed(2) + '%<li> \
        </ul>');

    /* Used below to push object items to array and then sort so 
        I could pick out top ten countries

    var sortObj = []
    for (country in countryObj) {
        sortObj.push([country, countryObj[country]]);
    };

    sortObj.sort(function(a, b) {
        return a[1] - b[1];
    });

    console.log(sortObj); */
}

/* Create an object to store the data in fromt he CSV. Then iterate thorugh the
    object in order to store the number of occurences for each type. Then store
    each year as a percentage in a variable and append it to the HTML.
    I found this code on stack overflow at 
    https://stackoverflow.com/questions/38296484/count-text-fields-from-csv-dataset-in-d3-js . 
    It has been adjusted to suit my needs. Not including the variables and the jQuery to manipulate the DOM */
function calculateTypePercentages(data) {
    //Create an object to store counts of types
    var typeObj = {};

    data.forEach(function (d) {
        var type = d.Type;
        if (typeObj[type] === undefined) {
            typeObj[type] = 0;
        } else {
            typeObj[type] = typeObj[type] + 1;
        }
    });

    data.forEach(function (d) {
        var type = d.Type;
        d.Type = typeObj[type];
    });

    //Create variables to store %s of types
    var typeInvalid = (typeObj.Invalid / 1868) * 100;
    var typeProvoked = (typeObj.Provoked / 1868) * 100;
    var typeQuestionable = (typeObj.Questionable / 1868) * 100;
    var typeSD = (typeObj['Sea Disaster'] / 1868) * 100;
    var typeUI = (typeObj['Under investigation'] / 1868) * 100;
    var typeUnknown = (typeObj.Unknown / 1868) * 100;
    var typeUnprovoked = (typeObj.Unprovoked / 1868) * 100;
    var typeWatercraft = (typeObj.Watercraft / 1868) * 100;

    //append %s to html
    $('#type-paragraph').append(' \
        <ul style="list-style: none;"> \
            <li>Invalid = '+ typeInvalid.toFixed(2) + '%<li> \
            <li>Provoked = '+ typeProvoked.toFixed(2) + '%<li> \
            <li>Questionable = '+ typeQuestionable.toFixed(2) + '%<li> \
            <li>Sea Disaster = '+ typeSD.toFixed(2) + '%<li> \
            <li>Under Investigation = '+ typeUI.toFixed(2) + '%<li> \
            <li>Unknown = '+ typeUnknown.toFixed(2) + '%<li> \
            <li>Unprovoked = '+ typeUnprovoked.toFixed(2) + '%<li> \
            <li>Watercraft = '+ typeWatercraft.toFixed(2) + '%<li> \
        </ul>');
}

/* Create an object to store the data in fromt he CSV. Then iterate thorugh the
    object in order to store the number of occurences for each area. Then store
    each year as a percentage in a variable and append it to the HTML.
    I found this code on stack overflow at 
    https://stackoverflow.com/questions/38296484/count-text-fields-from-csv-dataset-in-d3-js . 
    It has been adjusted to suit my needs. Not including the variables and the jQuery to manipulate the DOM */
function calculateAreaPercentages(data) {
    //Create object to store counts of areas
    var areaObj = {};

    data.forEach(function (d) {
        var area = d.Area;
        if (areaObj[area] === undefined) {
            areaObj[area] = 0;
        } else {
            areaObj[area] = areaObj[area] + 1;
        }
    });

    data.forEach(function (d) {
        var area = d.Area;
        d.Area = areaObj[area];
    });

    //Create vars to hold % values of areas - only top 10
    var florida = (areaObj.Florida / 1868) * 100;
    var newSouthWales = (areaObj['New South Wales'] / 1868) * 100;
    var hawaii = (areaObj.Hawaii / 1868) * 100;
    var california = (areaObj.California / 1868) * 100;
    var westernAustralia = (areaObj['Western Australia'] / 1868) * 100;
    var areaUnknown = (areaObj.Unknown / 1868) * 100;
    var southCarolina = (areaObj['South Carolina'] / 1868) * 100;
    var queensland = (areaObj.Queensland / 1868) * 100;
    var northCarolina = (areaObj['North Carolina'] / 1868) * 100;
    var westernCapeProvince = (areaObj['Western Cape Province'] / 1868) * 100;

    //Append %s to html
    $('#area-paragraph').append(' \
        <ul style="list-style: none;"> \
            <li>Florida, USA = '+ florida.toFixed(2) + '%<li> \
            <li>New South Wales, AUS = '+ newSouthWales.toFixed(2) + '%<li> \
            <li>Hawaii, USA = '+ hawaii.toFixed(2) + '%<li> \
            <li>California, USA = '+ california.toFixed(2) + '%<li> \
            <li>Western Australia, AUS = '+ westernAustralia.toFixed(2) + '%<li> \
            <li>Unknown = '+ areaUnknown.toFixed(2) + '%<li> \
            <li>South Carolina, USA = '+ southCarolina.toFixed(2) + '%<li> \
            <li>Queensland, AUS = '+ queensland.toFixed(2) + '%<li> \
            <li>North Carolina, USA = '+ northCarolina.toFixed(2) + '%<li> \
            <li>Western Cape Province, SA = '+ westernCapeProvince.toFixed(2) + '%<li> \
        </ul> \
        <small>Note: Only showing top 10</small>');
}

/* Create an object to store the data in fromt he CSV. Then iterate thorugh the
    object in order to store the number of occurences for each outcome. Then store
    each year as a percentage in a variable and append it to the HTML.
    I found this code on stack overflow at 
    https://stackoverflow.com/questions/38296484/count-text-fields-from-csv-dataset-in-d3-js . 
    It has been adjusted to suit my needs. Not including the variables and the jQuery to manipulate the DOM */
function calculateFatalPercentages(data) {
    //Create an object to store counts of outcomes
    var fatalObj = {};

    data.forEach(function (d) {
        var outcome = d.Fatal;
        if (fatalObj[outcome] === undefined) {
            fatalObj[outcome] = 0;
        } else {
            fatalObj[outcome] = fatalObj[outcome] + 1;
        }
    });

    data.forEach(function (d) {
        var outcome = d.Fatal;
        d.Fatal = fatalObj[outcome];
    });

    //variables to calculate % of each outcome
    var outcomeY = (fatalObj.Y / 1868) * 100;
    var outcomeN = (fatalObj.N / 1868) * 100;
    var outcomeUnknown = (fatalObj.Unknown / 1868) * 100;

    //append %s to html
    $('#fatal-paragraph').append(' \
        <ul style="list-style: none;"> \
            <li>Y = '+ outcomeY.toFixed(2) + '%<li> \
            <li>N = '+ outcomeN.toFixed(2) + '%<li> \
            <li>Unknown = '+ outcomeUnknown.toFixed(2) + '%<li> \
        </ul>');
}

/*Create a dropdown box which allows the user to
    filter the data by year */
function filterAttacksByYear(ndx) {
    var dim = ndx.dimension(dc.pluck('Year'));
    var group = dim.group();

    dc.selectMenu('#year-filter')
        .dimension(dim)
        .group(group)
        .promptText('Show all years');
}

/*Create a dropdown box which allows the user to
    filter the data by type */
function filterAttacksByType(ndx) {
    var dim = ndx.dimension(dc.pluck('Type'));
    var group = dim.group();

    dc.selectMenu('#type-filter')
        .dimension(dim)
        .group(group)
        .promptText('Show all types');
}

/*Create a dropdown box which allows the user to
    filter the data by outcome */
function filterAttacksByOutcome(ndx) {
    var dim = ndx.dimension(dc.pluck('Fatal'));
    var group = dim.group();

    dc.selectMenu('#fatal-filter')
        .dimension(dim)
        .group(group)
        .promptText('Show all outcomes');
}

/*Create a bar chart to show the amount of attacks
    by year */
function showAttacksByYear(ndx) {
    var dim = ndx.dimension(dc.pluck('Year'));
    var group = dim.group();

    dc.barChart('#chart-one')
        .width(500)
        .height(300)
        .margins({ top: 10, right: 10, bottom: 55, left: 40 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .yAxis().ticks(20);
}

/*Create a bar chart to show the amount of attacks
    by country */
function showAttacksByCountry(ndx) {
    var dim = ndx.dimension(dc.pluck('Country'));
    var group = dim.group();

    dc.barChart('#chart-two')
        .width(500)
        .height(300)
        .margins({ top: 10, right: 10, bottom: 55, left: 40 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .yAxis().ticks(20);
}

/*Create a pie chart to show the amount of attacks
    by type */
function showAttacksByReason(ndx) {
    var dim = ndx.dimension(dc.pluck('Type'));
    var group = dim.group();

    dc.pieChart('#chart-three')
        .height(350)
        .width(500)
        .radius(150)
        .dimension(dim)
        .group(group)
        .legend(dc.legend().x(0).y(0));
}

/*Create a pie chart to show the amount of attacks
    by area */
function showAttacksByArea(ndx) {
    var dim = ndx.dimension(dc.pluck('Area'));
    var group = dim.group();

    dc.pieChart('#chart-four')
        .height(350)
        .width(500)
        .radius(150)
        .dimension(dim)
        .group(group)
        //.legend(dc.legend().x(0).y(0))
        .cap(10)
        .externalLabels(25)
        .drawPaths(true)
        .minAngleForLabel(0.1);
}

/*Create a pie chart to show the amount of attacks
    by outcome */
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
}

$(document).ready(function () {
    /* 6 functions below all to create
        a slide toggle and reveal information
        after clicking on a button */
    $('.instruction-button').on('click', function () {
        $('.jumbotron').slideToggle('slow');
    });

    $('#year-button').on('click', function () {
        $('#year-percentages').slideToggle('slow');
    });

    $('#country-button').on('click', function () {
        $('#country-percentages').slideToggle('slow');
    });

    $('#type-button').on('click', function () {
        $('#type-percentages').slideToggle('slow');
    });

    $('#area-button').on('click', function () {
        $('#area-percentages').slideToggle('slow');
    });

    $('#fatal-button').on('click', function () {
        $('#fatal-percentages').slideToggle('slow');
    });


    /* Reset all filters and re-render charts */
    $('#reset-button').on('click', function () {
        dc.filterAll();
        dc.renderAll();
    });
});