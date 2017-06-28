
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

//apply start and end date from daterange picker
function applyDateRange() {
    refreshBigChart();
    refreshProgressChart();
    refreshPieChart();
    refreshGaugeChart();
    refreshWorldMap();

    refreshRecentActivity();
    refreshTodoList();
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


    //alert(gEndDate);
    //random data
    var floatChartData = makeDateRangeArrayForBigChart(gStartDate, gEndDate, 5, 55);;
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

//set progress chart
function refreshProgressChart() {
    $('#progresschart').children().remove();
    for (var i = 0; i < apptitles.length; i++) {
        var value = getRandomDigit(5, 95);
        var element = '<div class="widget_summary"><div class="w_left w_25"><span>' + apptitles[i] + '</span></div>' +
                      '<div class="w_center w_55"><div class="progress">' + 
                      '<div class="progress-bar bg-green" role="progressbar" aria-valuenow="' + value + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + value + '%;">' +
                      '<span class="sr-only">' + value + '% Complete</span></div></div></div><div class="w_right w_20"><span>' + value * 5 + '</span></div><div class="clearfix"></div></div>';
        //alert(element);
        $('#progresschart').append(element);
    }
}

var activityTitles = [
    'Buyer\'s Stamp Duty (BSD)',
    'Special Stamp Duty (SSD)',
    'Is there any template function provided?',
    'Can I save my currently inputted data without submission?',
    'Can I submit a number of e-stamping applications in batch?',
    'Can I submit a late stamping application online?',
    'OTC derivatives regime',
    'How does Google protect my privacy and keep my information secure?',
    'Are my search queries sent to websites when I click on Google Search results?',
    'How can I remove information about myself from Google\'s search results?'
];
var activityContents = [
    'The Stamp Duty (Amendment) Ordinance 2014 (Amendment Ordinance) was gazetted on 28 February 2014. Among others, the Amendment Ordinance imposes Buyer\'s Stamp Duty (BSD) on residential property transactions with effect from 27 October 2012. ',
    'With effect from 20 November 2010, unless the transaction is exempted from Special Stamp Duty (SSD) or SSD is not applicable, any residential property acquired on or after 20 November 2010',
    'No, but you can retrieve a previously submitted application as input template.',
    'Yes, for stamping request involving agreement, assignment and tenancy agreement, you may choose to save your input data before submission by using the "Save and Quit" button.',
    'You can input as many as 50 stamping requests in one go by uploading, but the e-application has to be lodged one by one (Please click here for details).',
    'Yes, if it is NOT a case late for over 4 years and the duty and penalty will be paid online in full with no application for remission. Otherwise, please use paper application.',
    'These FAQs are prepared jointly by the HKMA and the SFC.  They are intended to help market participants better understand their obligations and responsibilities under the OTC derivatives regime',
    'We know security and privacy are important to you – and they are important to us, too. We make it a priority to provide strong security and give you confidence that your information is safe and accessible when you need it. ',
    'Google search results are a reflection of the content publicly available on the web. Search engines can’t remove content directly from websites, so removing search results from Google wouldn’t remove the content from the web.',
    'If you want to remove something from the web, you should contact the webmaster of the site the content is posted on and ask him or her to make a change.'
];
//set recent activity
function refreshRecentActivity() {
//recentactivity
    $('#recentactivity').children().remove();
    for (var i = 0; i < 5; i++) {
        var element = '<li><div class="block"><div class="block_content"><h2 class="title"><a>' + activityTitles[getRandomDigit(0, activityTitles.length - 1)] +
                      '</a></h2><div class="byline"><span>' + getRandomDigit(1, 23) + ' hours ago</span> by <a>' + usernamelist[getRandomDigit(0, usernamelist.length - 1)] + '</a></div><p class="excerpt">' + 
                      activityContents[getRandomDigit(0, activityContents.length - 1)]  + '<a>Read&nbsp;More</a></p></div></div></li>';
        $('#recentactivity').append(element);
    }

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
        var check = getRandomDigit(0, 1);
        var element;
        if (check > 0) {
            element = '<li><p><div class="icheckbox_flat-green checked" style="position: relative;">' + 
                          '<input class="flat" style="position: absolute; opacity: 0;" type="checkbox">' + 
                          '<ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div> ' +
                          todolist[selectArray[i]] + '</p></li>';
            // element = '<li><p><span class="fa fa-check-square"></span><span class="fa fa-square"></span><input type="checkbox" class="flat"> ' + todolist[selectArray[i]] + 
            //           '</p></li>';
        } else {
            element = '<li><p><div class="icheckbox_flat-green" style="position: relative;">' + 
                          '<input class="flat" style="position: absolute; opacity: 0;" type="checkbox">' + 
                          '<ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div> ' +
                          todolist[selectArray[i]] + '</p></li>';
            // element = '<li><p><input type="checkbox" class="flat"> ' + todolist[selectArray[i]] + 
            //           '</p></li>';
        }
        
        $('#todolist').append(element);

    }
    $('div.icheckbox_flat-green').click(function() {
        if ($(this).hasClass("checked")) {
            $(this).removeClass("checked");
        } else {
            $(this).addClass("checked");
        }
    });
}

//make data for pie chart
function makeDateRangeArrayForPieChart(min, max) {
    var array = [];
    for (var i = 0; i < phonelist.length; i++) {
        var unit = [];
        unit['phone'] = phonelist[i];
        unit['val'] = getRandomDigit(min, max);
        unit['color'] = piechartcolors[i % piechartcolors.length];
        array.push(unit);
    }
    return array;
}
//set pie chart1
function refreshPieChart() {
    var chartData = makeDateRangeArrayForPieChart(500, 10000);
    piechart1 = AmCharts.makeChart("piechart1", {
        "type": "pie",
        "theme": "light",

        "legend":{
            "position":"right",
            "marginRight":100,
            "valueText": "[[percents]]%",
            "autoMargins":false
        },
        "colorField": "color",
        "labelColorField": "color",
        "fontFamily": "Arial",//<font> you can change this field.
        "startEffect": "easeInSine",
        "dataProvider": chartData,
        "valueField": "val",
        "titleField": "phone",
        "labelsEnabled": false,
        "pullOutRadius": 15,
        "balloonText": "[[title]]<br><span style='font-size:12px'>[[percents]]%([[value]])</span>",
    });

}

var gagechart = undefined;

//set gauge chart
function refreshGaugeChart() {

    gagechart = AmCharts.makeChart("gaugechart", {
        //"theme":"light",
        "type": "gauge",
        "axes": [{
            "topTextFontSize": 20,
            "topTextYOffset": 20,
            "labelsEnabled": true,
            "labelOffset": -80,
            //"fontSize": 15,
            //"axisColor": "#31d6ea",
            //"axisThickness": 1,
            "axisAlpha": 0,
            "tickAlpha": 0,
            "startValue": -100,
            "endValue": 100,
            // "gridInside": true,
            // "inside": true,
            "radius": "50%",
            "valueInterval": 100,
            "tickColor": "#67b7dc",
            "startAngle": -90,
            "endAngle": 90,
            "unit": "",
            "bandOutlineAlpha": 0,
            "bands": [{
                "color": "#1ADD9C",
                "endValue": -100,
                "innerRadius": "105%",
                "radius": "170%",
                "gradientRatio": [0.5, 0, -0.5],
                "startValue": -100
            }]
        }],
        "arrows": [{
            "alpha": 1,
            "innerRadius": "50%",
            "nailRadius": 0,
            "radius": "170%"
        }]
    });

    setTimeout(showGauge, 500);
    function showGauge() {
        var value = getRandomDigit(-100, 100);//;Math.round(Math.random() * 100);
        gagechart.arrows[0].setValue(value);
        gagechart.axes[0].setTopText(value);
        // adjust darker band to new value
        gagechart.axes[0].bands[0].setEndValue(value);
    }
    

}

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
});

