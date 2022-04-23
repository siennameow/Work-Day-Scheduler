# Work-Day-Scheduler
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/siennameow/Work-Day-Scheduler/blob/main/LICENSE)

## Description 📝 

Successful people constantly evaluate what they're spending their time on. Don’t let your tasks overwhelm you. Daily planning can help you save precious time and focus on your most critical goals. With Work Day Scheduler, the ultimate daily planner, you can quickly run through your daily to-do’s and prioritize them so you’re focused only on the things that matter.

Use this tool to write down today’s tasks by hour and save them as todos. You can also edit or delete the task when you complete. Each timeblock is color coded to indicate whether it is in the past, present, or future. This way, you’ll stay focused on your mission critical goals and win the challenges you really care about.

The webpage is easy for you to access through one link : https://siennameow.github.io/Work-Day-Scheduler/ and is designed to work with different screen sizes as you need.

Plan your day in seconds. Run your day, don’t let it run you!


## Table of Contents 📖

* [Webpage Preview ⭐](#webpage-preview-)
* [Code-Snippet 💻](#code-snippet-)
* [Custom-Features 📋](#custom-features-)
* [Usage 💡](#usage-)
* [Skill-Improved 📚](#skill-improved-)
* [Technologies 🔧](#technologies-)
* [Authors 👩](#authors-)
* [Credits 🙌](#credits-)

## Webpage Preview ⭐
 
 
 ![Work Day Scheduler](https://user-images.githubusercontent.com/101283174/162354325-7bdad536-41ee-4526-afb6-15eca08440eb.gif)



## Custom Features 📋

⚡️ Business hour from 9-5\
⚡️ Timeblocks for each hour\
⚡️ Different color to show past, present and future\
⚡️ Save to your local storage and view it anytime\
⚡️ Delete your todos & clear your local storage

## Code-Snippet 💻

JavaScript

Function to set timeblock to different color using Moment.js

Use ".isBefore" ".isSame" and ".isAfter" to compare the timeblock row time to current time.

```JavaScript
for (var i = 0; i < hour.length; i++ ) {

    var hourBlock = hourStart.add(1,"h")
    
    if (hourBlock.isBefore(hourNow)) {
        //add css class to the timeblock row respectively
            $(eventColumn[i]).addClass("past")
    } 
    else if (hourBlock.isSame(hourNow)) {
            $(eventColumn[i]).addClass("present")
    }      
         else { 
            $(eventColumn[i]).addClass("future")
    }
}
```


Function to add row in the container section and append with buttons, textarea and hours.

This function is built with a for lop and avoids hard coding in html.

```JavaScript
for (var i = 0; i < hourLength; i++ ){
    var eventColumn = $("<div>");
    eventColumn.addClass("row  time-block");
        
    var hour = $("<div>")
    hour.addClass("hour col-1");
    hour.text((i+hourLength) + ":00")

    var userMessage = $("<textarea>");
    userMessage.addClass("textarea col-9 description");

    var saveBtn = $("<button>");
    saveBtn.addClass("saveBtn col-1");

    var iconSave =$("<i>");
    iconSave.addClass("far fa-save");

    var deleteBtn = $("<button>");
    deleteBtn.addClass("deleteBtn col-1");
        
    var iconDelete = $("<i>");
    iconDelete.addClass("fas fa-trash-alt");


    saveBtn.append(iconSave);
    deleteBtn.append(iconDelete)
    eventColumn.append(hour);
    eventColumn.append(userMessage);
    eventColumn.append(saveBtn);
    eventColumn.append(deleteBtn)
    $(".container").append(eventColumn);
}
```


## Usage 💡

The link of the webpage is: https://siennameow.github.io/Work-Day-Scheduler/

- Step 1: Load the webpage. You'll see today's day and current time.
- Step 2 :You'll see the past hour timeblock in color grey, the present timeblock in yellow, and the future timeblock in green.
- Step 3 :Write down your event plan in the text area.
- Step 4 :Click save button (icon of a file) and your event will save to the local storage.
- Step 5 :You can edit or change your event in the textarea and save it using save button.
- Step 6 :Clear the local record by simply hit the delete button with icon of trash bin.


Bonus:
If you accidentally erase the textarea and hit save button, don't worry. When you refresh the page, your task will be shown on the webpage, until you click the delete button.

## Skill Improved 📚
✔️ Third party APIs\
✔️ Moment.js\
✔️ Bootstrap\
✔️ Google Fonts\
✔️ Font Awesome\
✔️ jQuery


## Technologies 🔧

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [jQuery](https://jquery.com/)
* [Moment.js](https://momentjs.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Font Awesome](https://fontawesome.com/)
* [Google Fonts](https://fonts.google.com//)

## License 📜
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/siennameow/Work-Day-Scheduler/blob/main/LICENSE)

## Authors 👩

* **Sienna Li** 

- [Portfolio](#)
- [Github](https://github.com/siennameow)
- [LinkedIn](https://www.linkedin.com/in/hexuanli/)


## Credits 🙌

Thanks to the following people who helped me in this project:
- Jerome Chenette
- Manuel Nunes
- Vince Lee
