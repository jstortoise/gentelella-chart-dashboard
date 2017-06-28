
var countrycodelist = ["af","al","ao","ag","ar","am","au","at","az","bs","bh","bd","bb","by","be","bz","bj","bt","bo","ba","bw","br","bn","bg","bf","bi","kh","cm","ca","cv","cf","td","cl","cn","co","km","cd","cg","cr","ci","hr","cy","cz","dk","dj","dm","do","ec","eg","sv","gq","er","ee","et","fj","fi","fr","ga","gm","ge","de","gh","gr","gd","gt","gn","gw","gy","ht","hn","hk","hu","is","in","id","ir","iq","ie","il","it","jm","jp","jo","kz","ke","ki","kr","kp","kw","kg","la","lv","lb","ls","lr","ly","lt","lu","mk","mg","mw","my","mv","ml","mt","mr","mu","mx","md","mn","me","ma","mz","mm","na","np","nl","nz","ni","ne","ng","no","om","pk","pa","pg","py","pe","ph","pl","pt","qa","ro","ru","rw","ws","st","sa","sn","rs","sc","sl","sg","sk","si","sb","za","es","lk","kn","lc","vc","sd","sr","sz","se","ch","sy","tw","tj","tz","th","tl","tg","to","tt","tn","tr","tm","ug","ua","ae","gb","us","uy","uz","vu","ve","vn","ye","zm","zw"];
var countrycodename = {
    "af": "Afghanistan",
    "al": "Albania",
    "ao": "Angola",
    "ag": "Antigua and Barbuda",
    "ar": "Argentina",
    "am": "Armenia",
    "au": "Austrialia",
    "at": "Austria",
    "az": "Azerbaijan",
    "bs": "Bahamas",
    "bh": "Bahrain",
    "bd": "Bangladesh",
    "bb": "Barbados",
    "by": "Belarus",
    "be": "Belgium",
    "bz": "Belize",
    "bj": "Benin",
    "bt": "Bhutan",
    "bo": "Bolivia",
    "ba": "Bosnia and Herzegovina",
    "bw": "Botswana",
    "br": "Brazil",
    "bn": "Brunei Darussalam",
    "bg": "Bulgaria",
    "bf": "Burkina Faso",
    "bi": "Burundi",
    "kh": "Cambodia",
    "cm": "Cameroon",
    "ca": "Canada",
    "cv": "Cape Verde",
    "cf": "Central African Republic",
    "td": "Chad",
    "cl": "Chile",
    "cn": "China",
    "co": "Colombia",
    "km": "Comoros",
    "cd": "Congo",
    "cg": "Congo",
    "cr": "Costa Rica",
    "ci": "Cote d'IVoire",
    "hr": "Croatia",
    "cy": "Cyprus",
    "cz": "Czech Republic",
    "dk": "Denmark",
    "dj": "Djbouti",
    "dm": "Dominica",
    "do": "Dominican Republic",
    "ec": "Ecuador",
    "eg": "Egypt",
    "sv": "El Salvador",
    "gq": "Equatorial Guinea",
    "er": "Eritrea",
    "ee": "Estonia",
    "et": "Ethiopia",
    "fj": "Fiji",
    "fi": "Finland",
    "fr": "France",
    "ga": "Gabon",
    "gm": "Gambia",
    "ge": "Georgia",
    "de": "Germany",
    "gh": "Ghana",
    "gr": "Greece",
    "gd": "Grenada",
    "gt": "Guatemala",
    "gn": "Guinea",
    "gw": "Guinea-Bissau",
    "gy": "Guyana",
    "ht": "Haiti",
    "hn": "Honduras",
    "hk": "Hong Kong",
    "hu": "Hungary",
    "is": "Iceland",
    "in": "India",
    "id": "Indonesia",
    "ir": "Iran",
    "iq": "Iraq",
    "ie": "Ireland",
    "il": "Israel",
    "it": "Italy",
    "jm": "Jamaica",
    "jp": "Japan",
    "jo": "Jordan",
    "kz": "Kazakhstan",
    "ke": "Kenya",
    "ki": "Kiribati",
    "kr": "South Korea",
    "kp": "North Korea",
    "kw": "Kuwait",
    "kg": "Kyrgyz Republic",
    "la": "Lao People's Democratic Republic",
    "lv": "Latvia",
    "lb": "Lebanon",
    "ls": "Lesotho",
    "lr": "Liberia",
    "ly": "Libya",
    "lt": "Lithuania",
    "lu": "Luxembourg",
    "mk": "Macedonia",
    "mg": "Madagascar",
    "mw": "Malawi",
    "my": "Malaysia",
    "mv": "Maldives",
    "ml": "Mali",
    "mt": "Malta",
    "mr": "Mauritania",
    "mu": "Mauritius",
    "mx": "Mexico",
    "md": "Moldova",
    "mn": "Mongolia",
    "me": "Montenegro",
    "ma": "Morocco",
    "mz": "Mozambique",
    "mm": "Myanmar",
    "na": "Namibia",
    "np": "Nepal",
    "nl": "Netherlands",
    "nz": "New Zealand",
    "ni": "Nicaragua",
    "ne": "Niger",
    "ng": "Nigeria",
    "no": "Norway",
    "om": "Oman",
    "pk": "Pakistan",
    "pa": "Panama",
    "pg": "Ppua New Guinea",
    "py": "Paraguay",
    "pe": "Peru",
    "ph": "Philippines",
    "pl": "Poland",
    "pt": "Portugal",
    "qa": "Qatar",
    "ro": "Romania",
    "ru": "Russia Federations",
    "rw": "Rwanda",
    "ws": "Samoa",
    "st": "Sao Tome and Principe",
    "sa": "Saudi Arabia",
    "sn": "Senegal",
    "rs": "Serbia",
    "sc": "Seychelles",
    "sl": "Sierra Leone",
    "sg": "Singapore",
    "sk": "Slovakia",
    "si": "Slovenia",
    "sb": "Solomon Islands",
    "za": "South Africa",
    "es": "Spain",
    "lk": "Sri Lanka",
    "kn": "Saint Kitts and Nevis",
    "lc": "Saint Lucia",
    "vc": "Saint Vincent and Grenadines",
    "sd": "Sudan",
    "sr": "Suriname",
    "sz": "Swaziland",
    "se": "Sweden",
    "ch": "Switzerland",
    "sy": "Syrian Arab Republic",
    "tw": "Taiwan",
    "tj": "Tajikistan",
    "tz": "Tanzania",
    "th": "Thailand",
    "tl": "Timor-Leste",
    "tg": "Togo",
    "to": "Tonga",
    "tt": "Trinidad and Tobago",
    "tn": "Tunisia",
    "tr": "Turkey",
    "tm": "Turkmenistan",
    "ug": "Uganda",
    "ua": "Ukraine",
    "ae": "United Arab Emirates",
    "gb": "United Kingdom",
    "us": "United States",
    "uy": "Uruguay",
    "uz": "Uzbekistan",
    "vu": "Vanuatu",
    "ve": "Venezuela",
    "vn": "Viet Nam",
    "ye": "Yemen",
    "zm": "Zambia",
    "zw": "Zimbabwe"
};
var usernamelist = ["Ms. Mary Jane", "Mr. John Smith", "Mr. Brad Pitt", "Ms. Anna Brown", "Mr. Jason Kidd", "Ms. Sara Graham", "Mr. John Terry", "Ms. Oliver Garry", "Mr. Tomy Stewart", "Ms. Lena Ben"];
var themelist = ["green", "aero", "blue"];
var itemnamelist = ["Camera", "Speaker", "Headphone", "USB Flash", "Microphone", "Keyboard", "Mouse", "Monitor", "MP3 Player", "MP4 Player"];
var monthlist = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//<color> this is color set for pie chart, you can insert/update/delete every color in this field and rearrange them.
var piechartcolors = ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#7f7f7f", "#880015",
                    "#ed1c24", "#ff7f27", "#fff200", "#22b14c", "#00a2e8", "#3f48cc", "#a349a4", "#c3c3c3", "#b97a57", "#ffaec9",
                    "#ffc90e", "#efef4b0", "#b5e61d", "#99d9ea", "#7092be", "#c8bf27"];
var topchart;
var bottomchart1;
var bottomchart2;
var bottomchart3;
var middlechart;
var piechart1;
var piechart2;
var piechart3;
var piechart4;

//get random digit from start to end
function getRandomDigit(start, end) {
    return Math.floor((Math.random() * (end - start + 1))) + start;
}

// get random country list
function getDifferentCountryRandomArray(length) {
    var count = 0;
    var rndarray = [];
    var i;
    while (count < length) {
        var newindex = getRandomDigit(0, countrycodelist.length - 1);
        var find = false;
        for (i = 0; i < rndarray.length; i++) {
            if (rndarray[i] == newindex) {
                find = true;
                break;
            }
        }
        if (!find) {
            rndarray.push(newindex);
            count++;
        } 
    }
    return rndarray;
}

//get random digit list
function getRandomDigitArray(length, start, end) {
    var rndarray = [];
    for (var i = 0; i < length; i++) {
        var value = getRandomDigit(start, end);
        rndarray.push(value);
    }
    return rndarray;
}

//get sum of digit array
function getSumOfArray(digitarray) {
    var sum = 0;
    for (var i = 0; i < digitarray.length; i++) {
        sum += digitarray[i];
    }
    return sum;
}

//get max of digit array
function getMaxOfArray(digitarray) {
    var max = digitarray[0];
    for (var i = 1; i < digitarray.length; i++) {
        if (max < digitarray[i]) {
            max = digitarray[i];
        }
    }
    return max;
}

//get min of digit array
function getMinOfArray(digitarray) {
    var min = digitarray[0];
    for (var i = 1; i < digitarray.length; i++) {
        if (min > digitarray[i]) {
            min = digitarray[i];
        }
    }
    return min;
}


//apply start and end date from daterange picker
function applyDateRange() {
    refreshTopTitles();
    refreshBigChart();
    refreshSmallChart1();
    refreshSmallChart2();
    refreshSmallChart3();
    refreshMiddleChart();
    refreshPieChart();
    refreshWorldMap();
    refreshTopSales();
    refreshTopItems();
}

//get random names
function getDifferentNameRandomArray(length) {
    var count = 0;
    var rndarray = [];
    var i;
    while (count < length) {
        var newindex = getRandomDigit(0, usernamelist.length - 1);
        var find = false;
        for (i = 0; i < rndarray.length; i++) {
            if (rndarray[i] == newindex) {
                find = true;
                break;
            }
        }
        if (!find) {
            rndarray.push(newindex);
            count++;
        } 
    }
    return rndarray;
}

//refresh top sales profiles
function refreshTopSales() {
    $('#topsales').children().remove();
    var namecount = 5;
    var namelist = getDifferentNameRandomArray(namecount);
    for (var i = 0; i < namecount; i++) {
        var theme = themelist[getRandomDigit(0, themelist.length - 1)];
        var text = '<li class="media event"><a class="pull-left border-' + theme + ' profile_thumb"><i class="fa fa-user ' + theme + '"></i></a>' + 
                    '<div class="media-body"><a class="title" href="#">' + usernamelist[namelist[i]] + '</a><p><strong>$' + getRandomDigit(1000, 3000) + 
                    '. </strong> Agent Avarage Sales </p><p> <small>' + getRandomDigit(10, 50) + ' Sales Today</small></p></div></li>';
        $('#topsales').append(text);
    }
}

//get random names
function getDifferentItemRandomArray(length) {
    var count = 0;
    var rndarray = [];
    var i;
    while (count < length) {
        var newindex = getRandomDigit(0, itemnamelist.length - 1);
        var find = false;
        for (i = 0; i < rndarray.length; i++) {
            if (rndarray[i] == newindex) {
                find = true;
                break;
            }
        }
        if (!find) {
            rndarray.push(newindex);
            count++;
        } 
    }
    return rndarray;
}

//refresh top sales profiles
function refreshTopItems() {
    $('#topitems').children().remove();
    var itemcount = 5;
    var itemlist = getDifferentItemRandomArray(itemcount);
    for (var i = 0; i < itemcount; i++) {
        var text = '<article class="media event">' + 
                    '<a class="pull-left date">' + 
                    '<p class="month">' + monthlist[getRandomDigit(0, 11)] + '</p>' +
                    '<p class="day">' + getRandomDigit(1, 30) + '</p>' + 
                    '</a>' +
                    '<div class="media-body">' + 
                    '<a class="title" href="#">' + itemnamelist[itemlist[i]] + '</a>' + 
                    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' + 
                    '</div>' + 
                    '</article>';
        $('#topitems').append(text);
    }
}

//make daterage from gStartDate, gEndDate

function makeDateRangeArrayForTopTitle(startDate, endDate, min, max) {
    var curDate = moment(startDate);
    var dateRangeArray = [];
    var count = 0;
    do {
        var unitDate = [];
        unitDate['day'] = curDate.format('YYYY-MM-DD');
        unitDate['val'] = getRandomDigit(min, max);
        dateRangeArray.push(unitDate);
        curDate = moment(curDate).add(1, 'day');
        count++;
    } while (curDate.format('YYYY-MM-DD') <= endDate.format('YYYY-MM-DD'));
    return dateRangeArray;
}

//set top titles
function refreshTopTitles() {
    var dateRangeArray = makeDateRangeArrayForTopTitle(gStartDate, gEndDate, 5, 55);
    var digitarray = [];
    for (var i = 0; i < dateRangeArray.length; i++) {
        digitarray.push(dateRangeArray[i]['val']);
    }

    var sum = getSumOfArray(digitarray);
    var max = getMaxOfArray(digitarray);
    var min = getMinOfArray(digitarray);
    var ave = Math.round(sum / digitarray.length);

    $('#toptitle1 > h3').text("Total");
    $('#toptitle1 > .count').text(sum);

    $('#toptitle2 > h3').text("Maximum");
    $('#toptitle2 > .count').text(max);

    $('#toptitle3 > h3').text("Minimum");
    $('#toptitle3 > .count').text(min);

    $('#toptitle4 > h3').text("Average");
    $('#toptitle4 > .count').text(ave);
}

function makeDateRangeArrayForBigChart(startDate, endDate, min, max) {
    var curDate = moment(startDate);
    var dateRangeArray = [];
    var count = 0;
    do {
        var unitDate = [];
        unitDate['day'] = curDate.format('YYYY-MM-DD');
        unitDate['val1'] = getRandomDigit(min, max);
        unitDate['val2'] = getRandomDigit(min, max);
        dateRangeArray.push(unitDate);
        curDate = moment(curDate).add(1, 'day');
        count++;
    } while (curDate.format('YYYY-MM-DD') <= endDate.format('YYYY-MM-DD'));
    return dateRangeArray;
}

//set am line chart
function refreshBigChart() {
    //random data
    var floatChartData = makeDateRangeArrayForBigChart(gStartDate, gEndDate, 5, 55);
    //alert(floatChartData);
    topchart = AmCharts.makeChart( "placeholder33x", {
        "type": "serial",
        "titles": [
            {
                "text": "Chart Title1",
                "size": 15
            }
        ],
        fontFamily: "Arial",//<font> you can change this field.
        addClassNames: true,
        classNamePrefix: "amcharts",
        startDuration: 0.8,
        "dataProvider": floatChartData,
        "categoryField": "day",
        startEffect: "bounce",
        "categoryAxis": {
            "autoGridCount": true,
            "gridPosition": "start",
            "labelRotation": 45
        },
        "valueAxes": [{
            "minimum": 0,
            "maximum": 60,
        }],
        "legend": {
            "equalWidths": false,
            "position": "bottom",
            "align": "center",
            "useGraphSettings": false,
            "markerSize": 10,
            "markerType": "square",
        },
        "chartCursor": {
            "categoryBalloonDateFormat": "YYYY",
            "cursorAlpha": 0,
            //"valueLineEnabled":true,
            //"valueLineBalloonEnabled":true,
            "valueLineAlpha":0.5,
            "fullWidth":true,
            "cursorColor": "#1ABB9C",//<color> you can change this field later.
        },
        "graphs": [ {
            //id: "g1",
            "valueField": "val1",
            "type": "smoothedLine",
            "fillAlphas": 0,
            "lineColor": "blue",//<color> you can change this field.
            //"balloonText": '<span class="text-blue">' + [[day]] + ':' + [[val]] + '</span>',
            "bullet": "round",
            "bulletSize": 10,
            "bulletAlpha": 0.3,
            "lineThickness": 2,
            // "balloonFunction": function(graphDataItem, graph) {
            //     var value = graphDataItem.values.value;
            //     //var category = graphDataItem.cate
            //     return '<span class="text-blue">' + [[day]] + ':' + value + '</span>';
            // },
            //"ballonText": '<span class="text-blue">' + [[day]] + ':' + [[val]] + '</span>',
            //"animationPlayed": false,
            "title": "Europe"
        }, {
            //id: "g2",
            "valueField": "val2",
            "type": "smoothedLine",
            "fillAlphas": 0,
            "lineColor": "red",//<color> you can change this field.
            "balloonText": " ",
            "bullet": "round",
            "bulletSize": 10,
            "bulletAlpha": 0.3,
            "lineThickness": 2,
            "balloonFunction": function(graphDataItem, graph) {
                var value = graphDataItem.values.value;
                return '<span class="text-red">' + value + '</span>';
            },
            //"animationPlayed": true,
            "title": "America"
        } ]
    } );
}

//make data for small chart
function makeDateRangeArrayForSmallChart(startDate, endDate, min, max) {
    var curDate = moment(startDate);
    var dateRangeArray = [];
    var count = 0;
    do {
        var unitDate = [];
        unitDate['day'] = curDate.format('YYYY-MM-DD');
        unitDate['val'] = getRandomDigit(min, max);
        dateRangeArray.push(unitDate);
        curDate = moment(curDate).add(1, 'day');
        count++;
    } while (curDate.format('YYYY-MM-DD') <= endDate.format('YYYY-MM-DD'));
    return dateRangeArray;
}

//set small chart1
function refreshSmallChart1() {
    var chartData = makeDateRangeArrayForSmallChart(gStartDate, gEndDate, 5, 100);
    bottomchart1 = AmCharts.makeChart("sparkline11", {
        "type": "serial",
        "theme":"light",
        "titles": [
            {
                "text": "Chart Title2",
                "size": 15
            }
        ],
        "fontFamily": "Arial",//<font> you can change this field.
        "dataProvider": chartData,
        "gridAboveGraphs": true,
        "startDuration": 1,
        startEffect: "bounce",
        "graphs": [ {
            //id: "g3",
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "fillAlphas": 0.8,//<alpha> you can change this field.
            "lineAlpha": 0.8,//<alpha> you can change this field.
            "type": "column",
            "valueField": "val",
            "fillColors": "red",//<color> you can change this field.
            "lineColor": "#666666",//<color> you can change this field.
            //"animationPlayed": false,
        } ],
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "day",
        "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 20,
            "labelRotation": 45
        },
        "export": {
            "enabled": true
        }
    });
}

//set small chart
function refreshSmallChart2() {
    //random data
    var chartData = makeDateRangeArrayForSmallChart(gStartDate, gEndDate, 5, 100);
    bottomchart2 = AmCharts.makeChart( "sparkline22", {
        "type": "serial",
        "titles": [
            {
                "text": "Chart Title3",
                "size": 15
            }
        ],
        "fontFamily": "Arial",//<font> you can change this field.
        addClassNames: true,
        classNamePrefix: "amcharts",
        startDuration: 0.5,
        "dataProvider": chartData,
        "categoryField": "day",
        startEffect: "easeInSine",
        "categoryAxis": {
            "autoGridCount": true,
            "gridPosition": "start",
            "labelRotation": 45
        },
        "valueAxes": [{
            "minimum": 0,
            "maximum": 110,
        }],
        "legend": {
            "equalWidths": false,
            "position": "bottom",
            "align": "center",
            "useGraphSettings": false,
            "markerSize": 10,
            "markerType": "square",
        },
        "chartCursor": {
            "categoryBalloonDateFormat": "YYYY",
            "cursorAlpha": 0,
            //"valueLineEnabled":true,
            //"valueLineBalloonEnabled":true,
            "valueLineAlpha":0.5,
            "fullWidth":true,
            "cursorColor": "#aa2929",//<color> you can change this field later.
        },
        "graphs": [ {
            "valueField": "val",
            "type": "line",
            "fillAlphas": 0,
            "lineColor": "#22aa22",//<color> you can change this field.
            "bullet": "round",
            "bulletSize": 10,
            "bulletAlpha": 0.3,
            "lineThickness": 2,
            "title": "World"
        }]
    } );
}

//set small chart3
function refreshSmallChart3() {
    var chartData = makeDateRangeArrayForSmallChart(gStartDate, gEndDate, 5, 500);
    bottomchart3 = AmCharts.makeChart("sparkline33", {
        "type": "serial",
        "theme":"light",
        "titles": [
            {
                "text": "Chart Title4",
                "size": 15
            }
        ],
        "fontFamily": "Arial",//<font> you can change this field.
        "dataProvider": chartData,
        "gridAboveGraphs": true,
        "startDuration": 1,
        startEffect: "easeOutSine",
        "graphs": [ {
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "fillAlphas": 0.8,//<alpha> you can change this field.
            "lineAlpha": 0.8,//<alpha> you can change this field.
            "type": "column",
            "valueField": "val",
            "lineColor": "#555555",//<color> you can change this field.
            "fillColors": "#ff00ff",//<color> you can change this field.
            //"animationPlayed": false,
        } ],
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "day",
        "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 20,
            "labelRotation": 45
        },
        "export": {
            "enabled": true
        }
    });
}

//set middle chart
function refreshMiddleChart() {
    var chartData = makeDateRangeArrayForSmallChart(gStartDate, gEndDate, 5, 100);
    middlechart = AmCharts.makeChart("middlechart", {
        "type": "serial",
        "theme":"light",
        "titles": [
            {
                "text": "Chart Title5",
                "size": 15
            }
        ],
        "fontFamily": "Arial",//<font> you can change this field.
        "dataProvider": chartData,
        "gridAboveGraphs": true,
        "startDuration": 1,
        startEffect: "bounce",
        "graphs": [ {
            //id: "g3",
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "fillAlphas": 0.8,//<alpha> you can change this field.
            "lineAlpha": 1,//<alpha> you can change this field.
            "type": "column",
            "valueField": "val",
            "lineColor": "#444444",//<color> you can change this field.
            "fillColors": "#00aaaa",//<alpha> you can change this field.
            //"animationPlayed": false,
        } ],
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "day",
        "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 20,
            "labelRotation": 45
        },
        "export": {
            "enabled": true
        }
    });
}

//make data for pie chart
function makeDateRangeArrayForPieChart(startDate, endDate, min, max) {
    var curDate = moment(startDate);
    var dateRangeArray = [];
    var count = 0;
    do {
        var unitDate = [];
        unitDate['day'] = curDate.format('YYYY-MM-DD');
        unitDate['val'] = getRandomDigit(min, max);
        unitDate['color'] = piechartcolors[count % piechartcolors.length];
        dateRangeArray.push(unitDate);
        curDate = moment(curDate).add(1, 'day');
        count++;
    } while (curDate.format('YYYY-MM-DD') <= endDate.format('YYYY-MM-DD'));
    return dateRangeArray;
}
//set pie chart1
function refreshPieChart() {
    var chartData = makeDateRangeArrayForPieChart(gStartDate, gEndDate, 5, 100);
    piechart1 = AmCharts.makeChart("piechart1", {
        "type": "pie",
        "theme": "light",
        "titles": [
            {
                "text": "Chart Title6",
                "size": 15
            }
        ],
        "colorField": "color",
        "labelColorField": "color",
        "fontFamily": "Arial",//<font> you can change this field.
        "startEffect": "easeInSine",
        "dataProvider": chartData,
        "valueField": "val",
        "titleField": "day",
        "labelsEnabled": false,
        "pullOutRadius": 15,
        "balloonText": "[[title]]<br><span style='font-size:12px'>[[percents]]%([[value]])</span>",
        //"depth3D": 15,
        //"angle": 15,
        //"gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
        //"radius": "42%",
        //"innerRadius": "40%",
    });
    chartData = makeDateRangeArrayForPieChart(gStartDate, gEndDate, 5, 100);
    piechart2 = AmCharts.makeChart("piechart2", {
        "type": "pie",
        "theme": "light",
        "titles": [
            {
                "text": "Chart Title7",
                "size": 15
            }
        ],
        "colorField": "color",
        "labelColorField": "color",
        "fontFamily": "Arial",//<font> you can change this field.
        "startEffect": "bounce",
        "dataProvider": chartData,
        "valueField": "val",
        "titleField": "day",
        "labelsEnabled": false,
        "pullOutRadius": 15,
        "depth3D": 15,
        //"angle": 15,
        //"gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
        //"radius": "42%",
        "innerRadius": "40%",
        "balloonText": "[[title]]<br><span style='font-size:12px'>[[percents]]%([[value]])</span>",
    });
    chartData = makeDateRangeArrayForPieChart(gStartDate, gEndDate, 5, 100);
    piechart3 = AmCharts.makeChart("piechart3", {
        "type": "pie",
        "theme": "light",
        "titles": [
            {
                "text": "Chart Title8",
                "size": 15
            }
        ],
        "colorField": "color",
        "labelColorField": "color",
        "fontFamily": "Arial",//<font> you can change this field.
        "startEffect": "easeOutSine",
        "dataProvider": chartData,
        "valueField": "val",
        "titleField": "day",
        "labelsEnabled": false,
        "pullOutRadius": 15,
        //"depth3D": 15,
        //"angle": 15,
        "gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
        //"radius": "42%",
        "innerRadius": "60%",
        "balloonText": "[[title]]<br><span style='font-size:12px'>[[percents]]%([[value]])</span>",
    });
    chartData = makeDateRangeArrayForPieChart(gStartDate, gEndDate, 5, 100);
    piechart4 = AmCharts.makeChart("piechart4", {
        "type": "pie",
        "theme": "light",
        "titles": [
            {
                "text": "Chart Title9",
                "size": 15
            }
        ],
        "colorField": "color",
        "labelColorField": "color",
        "fontFamily": "Arial",//<font> you can change this field.
        "startEffect": "elastic",
        "dataProvider": chartData,
        "valueField": "val",
        "titleField": "day",
        "labelsEnabled": false,
        "pullOutRadius": 30,
        //"depth3D": 15,
        "angle": 15,
        //"gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
        //"radius": "42%",
        //"innerRadius": "40%",
        "balloonText": "[[title]]<br><span style='font-size:12px'>[[percents]]%([[value]])</span>",
    });
}

// function refreshWorldMapInfo() {

// }

//set world map
function refreshWorldMap() {
    var countrydata = {"af":"0","al":"0","ao":"0","ag":"0","ar":"0","am":"0","au":"0","at":"0","az":"0","bs":"0","bh":"0","bd":"0","bb":"0","by":"0","be":"0","bz":"0","bj":"0","bt":"0","bo":"0","ba":"0","bw":"0","br":"0","bn":"0","bg":"0","bf":"0","bi":"0","kh":"0","cm":"0","ca":"0","cv":"0","cf":"0","td":"0","cl":"0","cn":"0","co":"0","km":"0","cd":"0","cg":"0","cr":"0","ci":"0","hr":"0","cy":"0","cz":"0","dk":"0","dj":"0","dm":"0","do":"0","ec":"0","eg":"0","sv":"0","gq":"0","er":"0","ee":"0","et":"0","fj":"0","fi":"0","fr":"0","ga":"0","gm":"0","ge":"0","de":"0","gh":"0","gr":"0","gd":"0","gt":"0","gn":"0","gw":"0","gy":"0","ht":"0","hn":"0","hk":"0","hu":"0","is":"0","in":"0","id":"0","ir":"0","iq":"0","ie":"0","il":"0","it":"0","jm":"0","jp":"0","jo":"0","kz":"0","ke":"0","ki":"0","kr":"0","kp":"0","kw":"0","kg":"0","la":"0","lv":"0","lb":"0","ls":"0","lr":"0","ly":"0","lt":"0","lu":"0","mk":"0","mg":"0","mw":"0","my":"0","mv":"0","ml":"0","mt":"0","mr":"0","mu":"0","mx":"0","md":"0","mn":"0","me":"0","ma":"0","mz":"0","mm":"0","na":"0","np":"0","nl":"0","nz":"0","ni":"0","ne":"0","ng":"0","no":"0","om":"0","pk":"0","pa":"0","pg":"0","py":"0","pe":"0","ph":"0","pl":"0","pt":"0","qa":"0","ro":"0","ru":"0","rw":"0","ws":"0","st":"0","sa":"0","sn":"0","rs":"0","sc":"0","sl":"0","sg":"0","sk":"0","si":"0","sb":"0","za":"0","es":"0","lk":"0","kn":"0","lc":"0","vc":"0","sd":"0","sr":"0","sz":"0","se":"0","ch":"0","sy":"0","tw":"0","tj":"0","tz":"0","th":"0","tl":"0","tg":"0","to":"0","tt":"0","tn":"0","tr":"0","tm":"0","ug":"0","ua":"0","ae":"0","gb":"0","us":"0","uy":"0","uz":"0","vu":"0","ve":"0","vn":"0","ye":"0","zm":"0","zw":"0"};

    var countrylist = getDifferentCountryRandomArray(20);

    for (var i = 0; i < countrylist.length; i++) {
        countrydata[countrycodelist[countrylist[i]]] = getRandomDigit(50, 500).toString();
    }

    var getcountrycount = 0;
    var getcountryarray = [];
    var startcountry = 0;
    // alert(countrydata.length);
    while (getcountrycount < 5 && startcountry < countrycodelist.length) {
        if (countrydata[countrycodelist[startcountry]] > 0) {
            getcountryarray[getcountrycount++] = countrycodelist[startcountry];
        }
        startcountry++;
    }

    //alert(getcountryarray);

    $('#countrylist').children().remove();
    for (var i = 0; i < getcountryarray.length; i++) {
        var element = '<tr><td>' + countrycodename[getcountryarray[i]] + '</td><td class="fs15 fw700 text-right">' + getRandomDigit(5, 95) + '%</td></tr>';
        $('#countrylist').append(element);
    }
    
    
    $('#world-map-gdp').children().remove();
    $('#world-map-gdp').vectorMap({
        backgroundColor: null,
        color: '#ffffff',
        hoverOpacity: 0.7,
        selectedColor: '#666666',
        enableZoom: true,
        showTooltip: true,
        scaleColors: ['#C8EEFF', '#006491'],
        values: countrydata,
        normalizeFunction: 'polynomial',
        onLabelShow: function (event, label, code) {
            if(countrydata[code] > 0)
                label.append(': '+ countrydata[code]);
            else
                label.append(': 0');
        },
    });
    // var mymap = new jvm.WorldMap({
    //     container: $('#world-map-gdp'),
    //     backgroundColor: null,
    //     color: '#ffffff',
    //     hoverOpacity: 0.7,
    //     selectedColor: '#666666',
    //     enableZoom: true,
    //     showTooltip: true,
    //     scaleColors: ['#C8EEFF', '#006491'],
    //     values: countrydata,
    //     normalizeFunction: 'polynomial',
    //     onLabelShow: function (event, label, code) {
    //         if(countrydata[code] > 0)
    //             label.append(': '+ countrydata[code]);
    //         else
    //             label.append(': 0');
    //     },
    //     // onRegionClick: function (event, code) {
    //     //     alert(mymap.getRegionName(code));
    //     // }
    // });
    //alert(mymap.getRegionName('US'));

}

//make world map
$(document).ready(function() {

    var topElement;
    var bottomElement;
    $('#bottomelement1').click(function() {
        //$(this).css("height", "280px");
        var bottomElement = $('#bottomelement1 > div').remove();
        var topElement = $('#topelement > div').remove();
        //alert(bottomElement);

        $('#topelement').append(bottomElement);
        $('#bottomelement1').append(topElement);
        var temp = topchart;
        topchart = bottomchart1;
        bottomchart1 = temp;
        topchart.animateAgain();
        bottomchart1.animateAgain();
    });
    $('#bottomelement2').click(function() {
        //$(this).css("height", "280px");
        var bottomElement = $('#bottomelement2 > div').remove();
        var topElement = $('#topelement > div').remove();
        //alert(bottomElement);

        $('#topelement').append(bottomElement);
        $('#bottomelement2').append(topElement);
        var temp = topchart;
        topchart = bottomchart2;
        bottomchart2 = temp;
        topchart.animateAgain();
        bottomchart2.animateAgain();
    });
    $('#bottomelement3').click(function() {
        //$(this).css("height", "280px");
        var bottomElement = $('#bottomelement3 > div').remove();
        var topElement = $('#topelement > div').remove();
        //alert(bottomElement);

        $('#topelement').append(bottomElement);
        $('#bottomelement3').append(topElement);
        var temp = topchart;
        topchart = bottomchart3;
        bottomchart3 = temp;
        topchart.animateAgain();
        bottomchart3.animateAgain();
    });
    $('#searchbutton').click(function() {
        //alert($('#searchinput').val());
        if ($('#searchinput').val().length > 0) {
            //alert($('#searchinput').val());
            applyDateRange();
            //topchart.titles.text = "aaa";
            if (topchart.titles.length > 0) {
                topchart.titles.pop();
            }
            topchart.addTitle($('#searchinput').val(), 15);
            topchart.validateNow();

            if (bottomchart1.titles.length > 0) {
                bottomchart1.titles.pop();
            }
            bottomchart1.addTitle($('#searchinput').val(), 15);
            bottomchart1.validateNow();

            if (bottomchart2.titles.length > 0) {
                bottomchart2.titles.pop();
            }
            bottomchart2.addTitle($('#searchinput').val(), 15);
            bottomchart2.validateNow();

            if (bottomchart3.titles.length > 0) {
                bottomchart3.titles.pop();
            }
            bottomchart3.addTitle($('#searchinput').val(), 15);
            bottomchart3.validateNow();           
            
            if (middlechart.titles.length > 0) {
                
                middlechart.titles.pop();
            }
            middlechart.addTitle($('#searchinput').val(), 15);
            middlechart.validateNow();

            if (piechart1.titles.length > 0) {
                piechart1.titles.pop();
            }
            piechart1.addTitle($('#searchinput').val(), 15);
            piechart1.validateNow();

            if (piechart2.titles.length > 0) {
                piechart2.titles.pop();
            }
            piechart2.addTitle($('#searchinput').val(), 15);
            piechart2.validateNow();

            if (piechart3.titles.length > 0) {
                piechart3.titles.pop();
            }
            piechart3.addTitle($('#searchinput').val(), 15);
            piechart3.validateNow();

            if (piechart4.titles.length > 0) {
                piechart4.titles.pop();
            }
            piechart4.addTitle($('#searchinput').val(), 15);
            piechart4.validateNow();

        }
    });
});

