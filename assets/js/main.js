$(document).ready(function() {
  $('a.item[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top - 50 }, 500);
  });
});