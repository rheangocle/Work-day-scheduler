/*GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/

$(document).ready(function () {
  //Declare variables
  var saveBtn = $('.saveBtn');
  // var nineAm = $('#nineAm').children('h2').text();
  // var nineAmTextEl = $('#nineAm').siblings('input');
  // var tenAm = $('#tenAm').children('h2').text();
  // var tenAmTextEl = $('#tenAm').siblings('input');
  // var eleAm = $('#eleAm').children('h2').text();
  // var eleAmTextEl = $('#eleAm').siblings('input');
  // var noon = $('#noon').children('h2').text();
  // var noonTextEl = $('#noon').siblings('input');
  // var onePm = $('#onePm').children('h2').text();
  // var onePmTextEl = $('#onePm').siblings('input');
  // var twoPm = $('#twoPm').children('h2').text();
  // var twoPmTextEl = $('#twoPm').siblings('input');
  // var threePm = $('#threePm').children('h2').text();
  // var threePmTextEl = $('#threePm').siblings('input');
  // var fourPm = $('#fourPm').children('h2').text();
  // var fourPmTextEl = $('#fourPm').siblings('input');
  // var fivePm = $('#fivePm').children('h2').text();
  // var fivePmTextEl = $('#fivePm').siblings('input');

  //Display current date on jumbotron
  var currentDate = moment().format('dddd, MMM Do');
  $('#currentDay').text(currentDate);

  //Changing row color depending on time
  function timeColor() {
    //Create variable for current time
    var now = moment().hour() 
    console.log(now)
    // var textEntryEl = $('.time-block').find('h2').html().split()

    // console.log(parseInt(textEntryEl))
    
    $('.time-block-early').each(function () {
      var textEntryEl = $(this).children().html()
      console.log(parseInt(textEntryEl))
      if (parseInt(textEntryEl) == now) {
        $(this).siblings('input').addClass('bg-danger');
        $(this).siblings('input').removeClass('bg-success');
        $(this).siblings('input').removeClass('bg-secondary');
        
        //need to change  $(this).addClass('bg-success'); to $(this).siblings('input').addClass('bg-success');
      } else if (parseInt(textEntryEl) < now) {
        $(this).siblings('input').addClass('bg-secondary');
        $(this).siblings('input').removeClass('bg-success');
        $(this).siblings('input').removeClass('bg-danger');
      } else {
        $(this).siblings('input').addClass('bg-success');
        $(this).siblings('input').removeClass('bg-secondary');
        $(this).siblings('input').removeClass('bg-danger');
      }
    })

    $('.time-block-late').each(function () {
      var textEntryEl = $(this).children().html()
      console.log(parseInt(textEntryEl))
      if (parseInt(textEntryEl) == now) {
        $(this).siblings('input').addClass('bg-danger');
        $(this).siblings('input').removeClass('bg-success');
        $(this).siblings('input').removeClass('bg-secondary');
        
        //need to change  $(this).addClass('bg-success'); to $(this).siblings('input').addClass('bg-success');
      } else if (parseInt(textEntryEl) > now) {
        $(this).siblings('input').addClass('bg-secondary');
        $(this).siblings('input').removeClass('bg-success');
        $(this).siblings('input').removeClass('bg-danger');
      } else {
        $(this).siblings('input').addClass('bg-success');
        $(this).siblings('input').removeClass('bg-secondary');
        $(this).siblings('input').removeClass('bg-danger');
      }
    })
   
  }

  //call the function
  timeColor();

  //Save text entry to local storage
  saveBtn.click(function () {
    var textInput = $(this).prev().val();
    console.log(textInput)
    var time = $(this).siblings('.time-block').text().trim();
    console.log(time);

    localStorage.setItem(time, textInput);
  })
})