

$(document).ready(function () {

  let button = $('.saveBtn')
  let textContainer = $('.description')

  // Displays the date at the top of the page
  let dateDisplay = dayjs().format('MMMM DD, YYYY');
  $('#currentDay').text(dateDisplay);

  // Listens for the user to click the save button
  button.click(function () {
    textContainer.each(function () {
      var text = $(this).val();
      var time = $(this).parent().attr('id');
      //saves user input to local storage
      localStorage.setItem(time, text);
    });
  })


  // displays input from local storage
    textContainer.each(function () {
    var text = $(this).parent().attr('id');
    localStorage.getItem(text);

    $(this).val(text);

  });

  // sets current hour
  let currentHour = parseInt(dayjs().hour());

  $('.time-block').each(function () {
    let timeBlock = parseInt($(this).attr('id').split('-')[1]);
    // var hour = $(this).data('hour');

    if (currentHour > timeBlock)
      $(this).addClass('past');

    if (currentHour === timeBlock)
      $(this).addClass('present');

    if (currentHour < timeBlock)
      $(this).addClass('future')

  });


  // Checks if there is input for each hour block in local storage
  $('#hour-8 .description').val(localStorage.getItem('hour-8'));
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

});