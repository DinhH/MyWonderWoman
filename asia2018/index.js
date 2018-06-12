"use strict"

//Sets the wedding date!!!
var countDownDate = new Date("December 7, 2018 19:00:00").getTime();

// Update the count down every 1 second
//Use getelementby ID or it will keep writing it
var x = setInterval(function() {

// Get todays date and time. Live in the now
var now = new Date().getTime();

// Find the distance between now an the count down date in milliseconds
var distance = countDownDate - now;

// Convert time back to days, hours, minutes and seconds using remainders of milliseconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Output the result in an element with id="demo" so it doesn't just fill up the page like an idiot
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "You done got married already";
    }
}, 1000);
