var bill = document.getElementsByClassName("bill");
var people = document.getElementsByClassName("people");
var five = document.getElementsByClassName("five");
var ten = document.getElementsByClassName("ten");
var fifteen = document.getElementsByClassName("fifteen");
var twentyfive = document.getElementsByClassName("twentyfive");
var fifty = document.getElementsByClassName("fifty");
var custom = document.getElementsByClassName("custom");
var percent = document.getElementsByClassName("percent");
var input = document.getElementsByName("input");

// console.log("bill is " + bill/people );

input.keypress(function(e){
    if (e.which === 13) {
        
        if ($(this).val() === "" ) {
            alert("Please add an input");
            return;
                }
        console.log("bill is " + bill/people );

    }
});