$(document).ready(function () {
    // time variables
    var currentHour = new Date().getHours();
    var currentDateAndTime = Date(Date.now());
    $("#currentDay").text(currentDateAndTime);
    

    document.onload = updateTime();
    document.onload = getValueText();

    // loops over time-blocks to set past, present, or future classes which determines css styling
    function updateTime() {
        
        $('.time-block').each(function () {
            var hour = parseInt($(this).attr('id').split('-')[1])
            // console.log(hour);
            if (hour < currentHour) {
                $(this).addClass('past');
            } else if (hour === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).addClass('future');
            }
        })
    }
})



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