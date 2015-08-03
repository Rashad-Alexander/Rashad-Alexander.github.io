$('.mail').on('click', function() {
    $('h1').css('display', 'none');
    $('.trigger').addClass('open');
    $('.mail').addClass('active');
    $('textarea').focus();
});

$('button').on('click', function() {
  $('.trigger').addClass('close');
  $('.close').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
    function(e) {
      $(this).css('display', 'none');
      $('svg').css('display', 'block');
      $('#line').css('display', 'block');
      var check = Snap.select('#path');

      check.animate({
          'fill': '#F2674A'
        }, 1000, mina.easeinout);
  });
});
