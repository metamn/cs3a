$(document).ready(function() {
  
  
  // CMS
  // - the slider
  
  $('#slider-for-cms .slide').click(function() {
    var index = $('#slider-for-cms .slide').index(this) + 1;
    swipeLeft(index);
  });
  
  $('#slider-for-cms .slide').swipe({
    swipe:function(event) {
      swipeLeft(1); 
    },
    threshold: 0
  });
  
  function swipeLeft(index) {
    $('#slider-for-cms').removeClass();
    $('#slider-for-cms').addClass('left-' + index);
  }
  
  
  
  
  // UX
  // - split sentence into words
  $('#slider #ux p').blast({ delimiter: "word" });
  
  // - reveal words on click
  $('#slider #ux p span').click(function() {
    changeClass($(this));
    checkCompletion();
  });
  
  // - reveal words on hover
  $('#slider #ux p span').hover(
    function() {
      changeClass($(this));
      checkCompletion();
    }, function() {
      // do nothing on exit
    }
  );
  
  function changeClass(item) {
    item.addClass('active');
  }
  
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

