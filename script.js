$(document).ready(function () {// tells engine to load 1)html & 2)css first.
// Create the function to show the real time on the top Banner

    $("#currentDay").text(moment().format("DD MMMM YYYY, hh:mm:ss a")); // use of moment.js
    

// Set up Save Button to save the schedule

    $(".saveBtn").on("click", function () {
    
        console.log(this);
        var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
        var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

        localStorage.setItem(time, text);
    })


// Create the function to save the schedule and convertion of the time 12 to 24 hours 

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

// Create teh function to run daily schedule Planner

    // First step fetch the time from moment.js

    function hourTracker() {
        var currentHour = moment().hour();

    // Create the function to run the loop along time block and make change the color on base of the event is past

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

             if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker(); //re-run function
})
