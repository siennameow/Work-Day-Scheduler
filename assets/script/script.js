// Acceptance Criteria
// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
    //set timmer using moment.js
    var timeHeading = moment().format("LLLL");
    var timeBlock =$(".time-block");
    var hourNow =moment().minutes(0).seconds(0).milliseconds(0);
    var saveBtn = $(".saveBtn");
    
    $("#currentDay").text(timeHeading);
    
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
    //standard 9am-5pm & create rows in html.
    
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    
var hour = $(".hour");
//make the first timeblock row shows 9:00am, so always start from the hour(8) of the current day.
var hourStart = moment().hour(8).minutes(0).seconds(0).milliseconds(0);
    
//function using a "if..else if ...else" to determine the time is past, present or future
for (var i = 0; i < hour.length; i++ ) {
    var hourBlock = hourStart.add(1,"h")
    //using .isBefore .isSame and .isAfter to compare the timeblock row to current time.
    if (hourBlock.isBefore(hourNow)) {
        //add css class to the timeblock row respectively
            $(timeBlock[i]).addClass("past")
    } 
    else if (hourBlock.isSame(hourNow)) {
            $(timeBlock[i]).addClass("present")
    }      
         else { 
            $(timeBlock[i]).addClass("future")
    }
}
    
// WHEN I click into a timeblock
// THEN I can enter an event
        
//a variable that collect user input
var userMessage = $(".textarea")
    
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

//function to save user message from local storage 
function saveInfo(n){
    //add event listener to each save button
    $(saveBtn[n]).on("click", function(event){
        event.preventDefault();
            
        //add user message input to the local storage
        var message =$(userMessage[n]).val();
        if( message!== "" ) {
        localStorage.setItem("Todo-" + (n+hour.length) +":00", message);
    } 
})};

//WHEN I refresh the page
// THEN the saved events persist

//function that get user message from local storage and render it when page loads
for (var i= 0;i<hour.length;i++){
    var userInput =localStorage.getItem("Todo-" + (i+hour.length)+":00");
    $(userMessage[i]).text(userInput); 
    saveInfo(i);
}
    
    