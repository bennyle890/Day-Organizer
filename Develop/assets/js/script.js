document.onload = getValueText();

// Date and Time
function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

        if(hou == 0){
            hou = 12;
        }
        if(hou >12){
            hou = hou - 12;
            pe = "PM";
        }

        Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n; 
        }

        var months = ["January", "Februrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
        var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];

}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}

function getValueText() {
    if (localStorage.key !== null) {
        var hr8 = localStorage.getItem('hr-8');
        $('#hr-8').children('textarea').val(hr8);

        var hr9 = localStorage.getItem('hr-9');
        $('#hr-9').children('textarea').val(hr9);

        var hr10 = localStorage.getItem('hr-10');
        $('#hr-10').children('textarea').val(hr10);

        var hr11 = localStorage.getItem('hr-11');
        $('#hr-11').children('textarea').val(hr11);

        var hr12 = localStorage.getItem('hr-12');
        $('#hr-12').children('textarea').val(hr12);
        
        var hr1 = localStorage.getItem('hr-1');
        $('#hr-1').children('textarea').val(hr1);

        var hr2 = localStorage.getItem('hr-2');
        $('#hr-2').children('textarea').val(hr2);

        var hr3 = localStorage.getItem('hr-3');
        $('#hr-3').children('textarea').val(hr3);

        var hr4 = localStorage.getItem('hr-4');
        $('#hr-4').children('textarea').val(hr4);

        var hr5 = localStorage.getItem('hr-5');
        $('#hr-5').children('textarea').val(hr5);
    }
}

$('.save-button').on('click', function(event) {
    event.preventDefault();
    var element = event.target;

    if (element.matches('button') === true) {
        var hourBlock = $(element).parent().attr('id');
        var valueText = $(element).siblings('textarea').val().trim();

        localStorage.setItem(hourBlock, valueText);
        getValueText();
    }
})