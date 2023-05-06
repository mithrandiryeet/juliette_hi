$(document).ready(function () {
    // Set initial hours value to 0
    var hours = 0;

    // Add click event listener to each hour button
    $(".btn-group").on("click", "button", function () {
        // Get the value of the clicked button
        var value = $(this).text();

        // Update the hours value
        hours = parseInt(value);

        // Update the timer display
        updateTimerDisplay();
    });

    // Function to update the timer display
    function updateTimerDisplay() {
        // Get the timer display elements
        var hoursDisplay = $(".hours");
        var minutesDisplay = $(".minutes");
        var secondsDisplay = $(".seconds");

        // Set the text content of the hours display element
        hoursDisplay.text(hours.toString().padStart(2, "0"));

        // Set the text content of the minutes and seconds display elements to "00"
        minutesDisplay.text("00");
        secondsDisplay.text("00");
    }
});

var el = document.getElementsByTagName("lastButton");

el[0].addEventListener("click", displayDate);

function displayDate() {
  
  alert("do something crazy")
}