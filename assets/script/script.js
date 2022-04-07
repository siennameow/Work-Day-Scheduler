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

 //write a function using a "if..else if ...else" to determine the time is past, present or future
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
console.log(userMessage)
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// get user message from local storage
function getInfo (n) {
    var userInput =localStorage.getItem("Todo-" + n);
    
    if (userInput !== null ){
        todoList = JSON.parse(userInput);
        return todoList;
    } else {
        todoList = [];
    }
    return todoList;
};

// add user message input to the local storage


function addInfo (n,m) {
    var addedList = [];
    addedList.push(m);
    localStorage.setItem("Todo-" + n, JSON.stringify(addedList));
};

function saveInfo (n) {
    var message =$(userMessage.parent().eq(n).children().eq(1)).val();
    console.log(userMessage)
    addInfo(n,message);
}
    //user input can be saved in local storage
    //add event listerner to the save btn

// WHEN I refresh the page
// THEN the saved events persist
    //render the local storage data when page loads

function renderInfo(n) {
    $(userMessage.parent().eq(n).children().eq(1)).text(getInfo);
    
}
renderInfo();


// $(saveBtn.parent().eq(n).children().eq(2)).on("click",saveInfo);


for (var i = 0; i< hour.length; i++){
    renderInfo(i);
    saveInfo(i);
    $(saveBtn.parent().eq(i).children().eq(2)).on("click",saveInfo(i));
}