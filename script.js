var today = moment();
$('#currentDay').text(today.format("MMM Do, YYYY"));
var containerEl = $('.container');

function createDiv(hour,am){
    var divEl = $('<div>');
    divEl.addClass('container');
    divEl.css("height","70");
    var labelEl = $('<h3>');
    labelEl.addClass('col-2 d-inline align-middle');
    labelEl.text(hour+am);
    divEl.append(labelEl);
    var textEl = $('<textarea>');
    textEl.addClass('col-8 d-inline align-middle form-control h-100 '+i);
    divEl.append(textEl);
    var submitEl = $('<button>');
    submitEl.addClass('btn btn-primary d-inline col-2 align-middle h-100');
    submitEl.text('Save');
    submitEl.css('font-size','40px');
    divEl.append(submitEl);
    containerEl.append(divEl);
}

for(var i = 9; i<=17; i++){
    if(i==12){
        createDiv(12,"PM");
    }else if(i<12){
        createDiv(i,"AM");
    }else{
        createDiv(i-12,"   PM");
    }
}

containerEl.children().on('click','button',function(){
    var textArea = $(this).siblings().eq(1);
    var inputAttr = textArea.attr('class').split(" ");
    var timeID = inputAttr[(inputAttr.length-1)];
    localStorage.setItem(timeID,textArea.val());
})

for(var i = 9; i<=17; i++){
    var storedVal = localStorage.getItem(i);
    if(storedVal!=null){
        $("."+i).text(storedVal);
    }
    if(i<today.format('H')){
        $("."+i).css('background-color','grey');
        }else if(i==today.format('H')){
            $("."+i).css('background-color','#ff6666');
        }else{
            $("."+i).css('background-color','#99ff99');
        }
}
