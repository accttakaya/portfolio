$(function () {
  $('#simtax-btn').click(function() {
    $('#simtax-modal-wrapper').fadeIn();
  });

  $('#furima-btn').click(function() {
    $('#furima-modal-wrapper').fadeIn();
  });

  $('.close-btn').click(function() {
    $('#simtax-modal-wrapper').fadeOut();
    $('#furima-modal-wrapper').fadeOut();
  })

});