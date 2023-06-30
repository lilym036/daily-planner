
var status = $(".time-block");
var userInput = $(".description");
var saveBtn = $(".saveBtn");
// This sets the day and date on the header
$("#currentDay").text(dayjs().format("dddd, MMM D, YYYY"));

$(function () {
  // This starts an event delegation... when save button is clicked something happens
 $(".saveBtn").on("click", function () {
  var savedTime = $(this).parent().attr("id");
  var textValue = $(this).siblings(".description").val();
  console.log(textValue);

  localStorage.setItem(savedTime, textValue) ;

  // var retrieveText= JSON.parse(localStorage.getItem(savedTime));
  
})
// This function handles the time blocks and changes the colors according to the time
function changeColor() {
  var currentTime = dayjs().hour();
  console.log(currentTime);

  $(".time-block").each(function () {
    var compareTime = parseInt($(this).attr("id").split("-")[1]);

    if (compareTime < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (compareTime === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
// this retrieves items from local storage if any
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

changeColor();
})
