$(document).ready(function () {
  //Declare variables
  var saveBtn = $('.saveBtn');

  //Display current date on jumbotron
  var currentDate = moment().format('dddd, MMM Do');
  $('#currentDay').text(currentDate);

  //Changing row color depending on time
  function timeColor() {
    //Create variable for current time
    var now = moment().hour()
    //console.log(now)

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
      var textEntryEl = parseInt($(this).children().html()) + 12
      console.log(parseInt(textEntryEl))
      if (textEntryEl == now) {
        $(this).siblings('input').addClass('bg-danger');
        $(this).siblings('input').removeClass('bg-success');
        $(this).siblings('input').removeClass('bg-secondary');
        //need to change  $(this).addClass('bg-success'); to $(this).siblings('input').addClass('bg-success');
      } else if (textEntryEl > now) {
        $(this).siblings('input').addClass('bg-success');
        $(this).siblings('input').removeClass('bg-secondary');
        $(this).siblings('input').removeClass('bg-danger');
      } else {
        $(this).siblings('input').addClass('bg-success');
        $(this).siblings('input').removeClass('bg-secondary');
        $(this).siblings('input').removeClass('bg-danger');
      }
    })

  }

  //Calling the function
  timeColor();

  //Save text entry to local storage
  saveBtn.click(function () {
    var textInput = $(this).prev().val();
    //console.log(textInput)
    var time = $(this).siblings('.time-block').text().trim();
    //console.log(time);

    localStorage.setItem(time, textInput);
  })
})