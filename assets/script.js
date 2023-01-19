//wrapped the code in a call to jquery
$(document).ready(function() {
  console.log("the browser has finished rendering all the elements in the html.");
});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //save button will saves the user input in the time box into local storage.
  
  $(".saveBtn").on("click", saveInput());

  function saveInput(){

  }

  let currentTime = dayjs().hour();
  console.log(currentTime)
//going to use .each funtion to remove the background colors for each hour,
//then apply the correct ones using an if statement
$(".time-block").each(function() {
  const hourBlock = parseInt($(this).attr("id"));

  $(this).removeClass("past", "present", "future")

  console.log(hourBlock)
  
   if (hourBlock < currentTime){
    $(this).addClass("past")
   }
   else if (hourBlock === currentTime){
    $(this).addClass("present")
   }
   else {
    $(this).addClass("future")
   }
});

  


  

  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  


//formatting date using day.js. displaying in header.
const todaysDate = dayjs();
$('#currentDay').text(todaysDate.format('MMM D, YYYY'));


