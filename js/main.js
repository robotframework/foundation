$(document).ready(function() {
  var elementHeight = $('.aboutTextContainer').height();

  $('#aboutImage').css('height', elementHeight);

  $(window).resize(function() {
    var elementHeight = $('.aboutTextContainer').height();
    $('#aboutImage').css('height', elementHeight);
  });

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 400, 'swing');
  });

  $('nav').affix({ 'offset': $('nav').offset().top })
});
