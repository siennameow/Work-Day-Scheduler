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
                $(timeBlock.children().eq(i)).addClass("past")
        } 
            else if (hourBlock.isSame(hourNow)) {
                $(timeBlock.children().eq(i)).addClass("present")
        }      
            else { 
                $(timeBlock.children().eq(i)).addClass("future")
        }
    }
    
    // WHEN I click into a timeblock
    // THEN I can enter an event
        
    //a variable that collect user input
    var userMessage = $(".textarea")
    
    // WHEN I click the save button for that timeblock
    // THEN the text for that event is saved in local storage
    
    // function that add user message input to the local storage
    function addInfo (n) {
        var message =$(userMessage[n]).val();
        localStorage.setItem("Todo-" + (n+hour.length) +":00", message);
    }
    
    //WHEN I refresh the page
    // THEN the saved events persist
    
    //function that get user message from local storage and render it when page loads
    function renderInfo(n) {
        var userInput =localStorage.getItem("Todo-" + (n+hour.length)+":00");
        $(userMessage[n]).text(userInput); 
    }
    
    //function to add event listener to each save button
    function saveInfo(n){
        $(saveBtn[n]).on("click", function(event){
            event.preventDefault();
            addInfo(n);
    })};
    
    //every time refresh page, do a for loop to render and save Info 
    for (var i= 0;i<hour.length;i++){
        renderInfo(i);
        saveInfo(i);
    }
    
    