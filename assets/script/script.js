// Acceptance Criteria
// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
    //set timmer using moment.js

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
    //standard 9am-5pm & create rows in html.

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    //create variables for each (past, present ,future)
    //write a function using a "if..else if ...else" to determine the time is past, present or future
    //add css class to the determined variables respectively

// WHEN I click into a timeblock
// THEN I can enter an event
    //a variable that collect user input

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
    //user input can be saved in local storage
    //add event listerner to the save btn

// WHEN I refresh the page
// THEN the saved events persist
    //render the local storage data when page loads
