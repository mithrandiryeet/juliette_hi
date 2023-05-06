$(document).ready(function () {
    // Set initial hours value to 0
    var hours = 0;

    // Add click event listener 
    $(".btn-group").on("click", "button", function () {
        // Get the value of the clicked button
        var value = $(this).text();

        // Update the hours value
        hours = parseInt(value);

        // Update the timer display
        updateTimerDisplay();
    });

    // Function to update the timer 
    function updateTimerDisplay() {
        // Get timer display elements
        var hoursDisplay = $(".hours");
        var minutesDisplay = $(".minutes");
        var secondsDisplay = $(".seconds");

        
        hoursDisplay.text(hours.toString().padStart(2, "0"));

       
        minutesDisplay.text("00");
        secondsDisplay.text("00");
    }
});

var el = document.getElementsByTagName("lastButton");

el[0].addEventListener("click", displayDate);

function displayDate() {
  
  alert("do something crazy")
}
