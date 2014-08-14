$(document).ready(function() {
  
  // Tooltip 
  $('.tooltip-item').click(function() {
    $('.tooltip').html($(this).find('.tooltip-text').html());
    $('.tooltip').addClass('active');
  });

  // Click to show the menu
  $('header').click(function() {
    $('header').toggleClass('active');
  });
  
});