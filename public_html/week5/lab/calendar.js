
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function () {

    let d = new Date();
    let mth = d.getMonth() + 1;
    let yr = d.getFullYear();

    $('#month').val(mth);
    $('#year').val(yr);
    showCalendar(mth, yr);

    $('#month,#year').change(function (e) {
        showCalendar($('#month').val(), $('#year').val());
    });

});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth() + 1, 0).getDate();
}


function showCalendar(mth, yr) {

    let firstDayOfMonth = `${mth}/1/${yr}`;
    let d = new Date(firstDayOfMonth);
    let numberOfDaysInMonth = daysInMonth(d);
    let firstDayOfWeek = d.getDay();
    let str = ' ';


    /* this is where you'll generate the grid, for now I will just show first day of week */

    str = '<ul>';
    str += `<li>Number of days in the month: ${numberOfDaysInMonth} </li>`;
    str += `<li>First day of the week: ${firstDayOfWeek} (${daysOfTheWeek[firstDayOfWeek]})</li>`;
    str += '</ul>';

    str += '<div class ="row">'

    for (let day = 1; day <= (numberOfDaysInMonth + firstDayOfWeek); day++) {
        if (day > firstDayOfWeek) {

            str += '<div class = "day" >' + (day - firstDayOfWeek);

            str += '</div>';
        } else {
            str += '<div class = "day">'
            str += '</div> '

        }

        if (day % 7 === 0) {
            str += '</div>'
            str += '<div class ="row">'
        }

    }
    str += '</div>'

    $('#results').html(str);

    $('.day').click(change);
}

function change() {

    let color = $(this).css("background-color");
    console.log(color)

    if (color === 'rgba(0, 0, 0, 0)') {
        $(this).css("background-color", "green")
    } else if (color === "rgb(0, 128, 0)")
    {
        $(this).css("background-color", "red");
    } else if (color === "rgb(255, 0, 0)")
    {
        $(this).css("background-color", "transparent");
    }
}

$('#yes').on('click', function () {
    $('.day').css('background-color', 'green')
})
$('#no').on('click', function () {
    $('.day').css('background-color', 'red')
})

function green() {

    $(this).css("background-color", "green")
}

function red() {
    $(this).css("background-color", "red")
}






