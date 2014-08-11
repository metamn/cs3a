$(document).ready(function() {

  // Click on menu
  $('header').click(function() {
    $('header').toggleClass('active');
  });
  
  // Mark active menu item
  $("#menu ul li").first().addClass('active');
});