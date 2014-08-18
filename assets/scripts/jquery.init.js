$(document).ready(function() {
  
  // Slider 
  $('#skills ul li').click(function() {
    var index = $('#skills ul li').index(this);
    $('#slider .slide').removeClass('active');
    $("#slider .slide:eq(" + index + ")").addClass('active');
  });
});

