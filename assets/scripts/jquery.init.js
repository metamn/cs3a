$(document).ready(function() {
  
  // UX
  // - split sentence into words
  $('#slider #ux p').blast({ delimiter: "word" });
  
  // - reveal words on click
  $('#slider #ux p span').click(function() {
    $(this).addClass('active');
    checkCompletion();
  });
  
  // - reveal words on hover
  $('#slider #ux p span').hover(function() {
    $(this).addClass('active');
    checkCompletion();
  }); 
  
  // - final effect when all words revealed
  function checkCompletion() {
    var count = $('#slider #ux p span').not('.active').length;
    if (count == 0) {
      $('#slider #ux p').addClass('done');
    }
  }
  
  
  // Values
  // - the Slider 
  $('#skills ul li').click(function() {
    var index = $('#skills ul li').index(this);
    $('#slider .slide').removeClass('active');
    $("#slider .slide:eq(" + index + ")").addClass('active');
  });
});

