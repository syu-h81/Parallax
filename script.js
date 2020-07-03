$(function() {
  $(window).scroll(function(){
    var motion = $(this).scrollTop();
    $('#bg').css('background-position', '0 ' + parseInt( -motion / 5 ) + 'px');
  });
});
