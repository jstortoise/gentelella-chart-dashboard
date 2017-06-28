var usernamelist = ["Ms. Mary Jane", "Mr. John Smith", "Mr. Brad Pitt", "Ms. Anna Brown", "Mr. Jason Kidd", "Ms. Sara Graham", "Mr. John Terry", "Ms. Oliver Garry", "Mr. Tomy Stewart", "Ms. Lena Ben"];
var themelist = ["green", "aero", "blue"];
var itemnamelist = ["Camera", "Speaker", "Headphone", "USB Flash", "Microphone", "Keyboard", "Mouse", "Monitor", "MP3 Player", "MP4 Player"];
var monthlist = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var phonelist = ["IOS", "Android", "Blackberry", "Symbian", "Others"];

//<color> this is color set for pie chart, you can insert/update/delete every color in this field and rearrange them.
var piechartcolors = ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#7f7f7f", "#880015",
                    "#ed1c24", "#ff7f27", "#fff200", "#22b14c", "#00a2e8", "#3f48cc", "#a349a4", "#c3c3c3", "#b97a57", "#ffaec9",
                    "#ffc90e", "#efef4b0", "#b5e61d", "#99d9ea", "#7092be", "#c8bf27"];
var apptitles = ["MacOS", "Windows", "Fedora", "Ubuntu", "Symbian"];
var topchart;

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
    refreshHeatMap();

    refreshTodoList();
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
    for (var i = 0; i < 6; i++) {
        var elementVal = '#topval-' + (i + 1);
        var rndVal = getRandomDigit(1200, 4500);
        $(elementVal).text(Math.round(rndVal / 1000) + ',' + rndVal % 1000);
        var elementPer = '#topper-' + (i + 1);
        var upOrDown = getRandomDigit(0, 1);
        var percent = getRandomDigit(5, 80);
        var elementContent;
        if (upOrDown > 0) {
            elementContent = '<i class="fa fa-sort-asc"></i>' + percent + '% ';
        } else {
            elementContent = '<i class="fa fa-sort-desc"></i>' + percent + '% ';
        }
        $(elementPer).html(elementContent);
        if (upOrDown > 0) {
            $(elementPer).css("color", "#1ABB9C");
        } else {
            $(elementPer).css("color", "#E74C3B");
        }
        
    }

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
            "valueLineAlpha":0.5,
            "fullWidth":true,
            "cursorColor": "#1ABB9C",//<color> you can change this field later.
        },
        "graphs": [ {
            "valueField": "val1",
            "type": "smoothedLine",
            "fillAlphas": 0,
            "lineColor": "blue",//<color> you can change this field.
            "bullet": "round",
            "bulletSize": 10,
            "bulletAlpha": 0.3,
            "lineThickness": 2,
            "title": "Europe"
        }, {
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
            "title": "America"
        } ]
    } );
}

var todolist = [
    'Schedule meeting with new client',
    'Create email address for new intern',
    'Have IT fix the network printer',
    'Copy backups to offsite location',
    'Food truck fixie locavors mcsweeney',
    'Access tasks everywhere',
    'Collaborate on shared tasks',
    'Distraction-free design',
    'Achieve more by breaking big tasks',
    'Get reminded via email',
    'Create repeating due dates naturally',
    'Visualize your productivity',
    'Powerful recurring dates',
    'Plan for anything',
    'Get reminded anytime',
    'Keep your life in sync',
    'Wunderlist is the easiest way to get stuff done',
    'Five Best To-Do List Managers',
    'Google Keep is a surprising contender',
    'The Best To-Do App for iPhone',
    'The Coolest "Extra" Features in Any.DO',
    'The Best To-Do App for Windows',
    'Gear from Kinja Deals',
    'Sharing a shopping list with a partner',
    'Wunderlist makes it super easy to get stuff done',
    'Set Due Dates and Reminders and Assign to-dos',
    'On Mac, Windows & the Web App'
];

function getDifferentTodoRandomArray(length) {
    var count = 0;
    var rndarray = [];
    var i;
    while (count < length) {
        var newindex = getRandomDigit(0, todolist.length - 1);
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

//set todo list
function refreshTodoList() {
    $('#todolist').children().remove();
    var selectArray = getDifferentTodoRandomArray(10)
    for (var i = 0; i < 10; i++) {
        //var check = getRandomDigit(0, 1);
        var element = '<li><p><div class="icheckbox_flat-green" style="position: relative;">' + 
                          '<input class="flat" style="position: absolute; opacity: 0;" type="checkbox">' + 
                          '<ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div> ' +
                          todolist[selectArray[i]] + '</p></li>';
        $('#todolist').append(element);
    }
    $('div.icheckbox_flat-green').click(function() {
        if ($(this).hasClass("checked")) {
            $(this).removeClass("checked");
        } else {
            $(this).addClass("checked");
        }
        refreshTopTitles();
        refreshBigChart();
        refreshHeatMap();
    });
}

var stateList = ["US-AL",
            "US-AK",
            "US-AZ",
            "US-AR",
            "US-CA",
            "US-CO",
            "US-CT",
            "US-DE",
            "US-FL",
            "US-GA",
            "US-HI",
            "US-ID",
            "US-IL",
            "US-IN",
            "US-IA",
            "US-KS",
            "US-KY",
            "US-LA",
            "US-ME",
            "US-MD",
            "US-MA",
            "US-MI",
            "US-MN",
            "US-MS",
            "US-MO",
            "US-MT",
            "US-NE",
            "US-NV",
            "US-NH",
            "US-NJ",
            "US-NM",
            "US-NY",
            "US-NC",
            "US-ND",
            "US-OH",
            "US-OK",
            "US-OR",
            "US-PA",
            "US-RI",
            "US-SC",
            "US-SD",
            "US-TN",
            "US-TX",
            "US-UT",
            "US-VT",
            "US-VA",
            "US-WA",
            "US-WV",
            "US-WI",
            "US-WY"];
var stateNames = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

//get random names
function getDifferentStateRandomArray(length) {
    var count = 0;
    var rndarray = [];
    var i;
    while (count < length) {
        var newindex = getRandomDigit(0, stateNames.length - 1);
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

// apply usa heat map
function refreshHeatMap() {
    var heatData = [];
    heatData['map'] = "usaLow";
    heatData['areas'] = [];
    for (var i = 0; i < stateList.length; i++) {
        var stateData = [];
        stateData['id'] = stateList[i];
        stateData['value'] = getRandomDigit(10, 50);
        heatData.areas.push(stateData);
    }
    $('#countrylist').children().remove();
    var indexArray = getDifferentStateRandomArray(5);
    for (var i = 0; i < indexArray.length; i++) {
        var stateAbbr = stateList[indexArray[i]];
        var stateName = stateNames[indexArray[i]];
        var stateTemp = 0;
        for (var j = 0; j < heatData.areas.length; j++) {
            if (heatData.areas[j].id == stateAbbr) {
                stateTemp = heatData.areas[j].value;
                break;
            }
        }
        var element = '<tr><td>' + stateName + '</td><td class="fs15 fw700 text-right">' + stateTemp + '℃</td></tr>';
        $('#countrylist').append(element);
    }
    
    var map = AmCharts.makeChart( "chartdiv", {
        "type": "map",
        //"titles": [{"text":"United States Temperature Map"}],
        "theme": "light",
        "colorSteps": 10,

        "dataProvider": heatData,

        "areasSettings": {
            "autoZoom": true,
            "balloonText": "[[title]]: <strong>[[value]]</strong>℃"
        },

        "valueLegend": {
            "right": 10,
            "minValue": "low",
            "maxValue": "high"
        },

        "export": {
            //"enabled": true
        }

    } );
}

//make world map
$(document).ready(function() {
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

        }
    });
    $('#select-country').change(function() {
        applyDateRange();
    });
    $('#select-state').change(function() {
        applyDateRange();
    });
});

