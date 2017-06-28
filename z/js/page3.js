var randomHighlightWordCount = 10;
var allowedUploadFileSize = 1000000;
var repeathighlightcount = 3;
//get random digit from start to end
function getRandomDigit(start, end) {
    return Math.floor((Math.random() * (end - start + 1))) + start;
}

// get random split list
function getDifferentWordRandomArray(arraylength, texts) {
    var count = 0;
    var rndarray = [];
    var i;
    while (count < arraylength) {
        var newindex = getRandomDigit(0, texts.length - 1);
        var find = false;
        if (texts[newindex] == ' ' || texts[newindex] == '') {
            find = true;
        } else {
            for (i = 0; i < rndarray.length; i++) {
                if (rndarray[i] == newindex) {
                    find = true;
                    break;
                }
            }
        }
        if (!find) {
            rndarray.push(newindex);
            count++;
        } 
    }
    return rndarray;
}

$(document).ready(function() {
    var repeathightlighttimer;
    var repeatCount = 0;
    function repeatHightlight() {
        var text = $('#text-content').text();
        var texts = text.split(' ');
        var randomWordArray = getDifferentWordRandomArray(randomHighlightWordCount, texts);
        //set highlight
        for (var i = 0; i < randomWordArray.length; i++) {
            texts[randomWordArray[i]] = '<span class="span-highlight">' + texts[randomWordArray[i]] + '</span>';
        }
        //make whole text
        $('#text-content').text('');
        for (var i = 0; i < texts.length; i++) {
            $('#text-content').append(texts[i] + ' ');
        }
        $('#text-content > .span-highlight').animate({backgroundColor:"rgba(255, 233, 62, 1)"}, 500);
        repeatCount++;
        if (repeatCount >= repeathighlightcount) {
            clearInterval(repeathightlighttimer);
            repeatCount = 0;
        }
    }
     
    //format text with selection
    function selectWord() {
        clearInterval(repeathightlighttimer);
        repeatCount = 0;
        repeathightlighttimer = setInterval(repeatHightlight, 1000);
    }

    //make below table animate
    function animateTable() {
        for (var i = 0; i < 10; i++) {
            var selectTR = '#table-container > tr:nth-child(' + (i + 1) + ')';
            for (var j = 0; j < 8; j++) {
                var selectTD = selectTR + ' > td:nth-child(' + (j + 1) + ') > span';
                var delayTime = i * 150 + j * 200;// you can change time for row(i) and col(j)
                $(selectTD).delay(delayTime).show("slide", { direction: "down" }, 300);
            }
        }
    }

    //set error message with space for initialization.
    function removeErrorMsg() {
        $("#error-msg").html("&nbsp;");
    }

    //set error message if file upload happends error.(not txt file or bigger than allowed size)
    function setErrorMsg(message) {
        $("#error-msg").text(message);
    }

    //read file and display text.
    function previewFile(file) {
        removeErrorMsg();
        var ext = file.name.substr(file.name.lastIndexOf('.'));
        if (file.size > allowedUploadFileSize) {
            setErrorMsg("This file is too big.")
        } else if (ext != ".txt") {
            setErrorMsg("Only text file is allowed to display.");
        } else {
            var reader = new FileReader();
            reader.onload = function (event) {
                var txt = event.target.result;
                $('#text-content').text(txt);
                $('#file-title').text(file.name);
            }
            reader.readAsText(file);
        }
    }

    //prepare fileupload and read file.
    function handleFileUpload(files)
    {
        var fd = new FormData();
        fd.append('file', files[0]);
        previewFile(files[0]);
        //animateTable();
    }

    //interface change for drag & drop file
    var obj = $("#upload-container");
    obj.on('dragenter', function (e) 
    {
        e.stopPropagation();
        e.preventDefault();
        $(this).css('border', '4px solid #0B85A1');
    });
    obj.on('dragover', function (e) 
    {
        e.stopPropagation();
        e.preventDefault();
    });
    obj.on('drop', function (e) 
    {
    
        $(this).css('border', '4px dotted #0B85A1');
        e.preventDefault();
        var files = e.originalEvent.dataTransfer.files;
    
        //We need to send dropped files to Server
        handleFileUpload(files);
    });

    //if you click upload file button
    $("#upload-btn").click(function() {
        //alert("btn");
        $('#file-container').trigger('click');
    });

    //handler for fileupload open dialog.
    $('#file-container').change(function () {
        //removeErrorMsg();
        
        //alert($(this).val());
        var fd = new FormData();
        var files = $(this).prop('files');
        var selectFile = files[0];
        fd.append('file', selectFile);
        previewFile(selectFile);
        //animateTable();
    });

    //initilize error message.
    removeErrorMsg();

    //hide table content
    function hideTableData() {
        for (var i = 0; i < 10; i++) {
            var selectTR = '#table-container > tr:nth-child(' + (i + 1) + ')';
            $(selectTR + ' > td > span').hide();
            $(selectTR).css("height", "38px");
        }
    }

    //validate data
    function validateData() {
        
        var txt = $('#text-content').text();
        if (txt.length > 0) {
            selectWord();
        }
        hideTableData();
        animateTable();
    }

    hideTableData();
    //table validate button handler
    $("#table-valid-btn").click(function() {
        validateData();
    });

    //text validate button handler
    $("#text-valid-btn").click(function() {
        validateData();
    });
});