/* ---- changes tabs ---- */
(function($) {
var tabs =  $("#tabs li");
var projects =  $(".projectContent");
tabs.click(function() {
  var content = ($(this).attr('id'));
  tabs.removeClass("active");
  $(this).addClass("active");
  content = content.replace('tab', '#project');
  projects.removeClass("active");
  $(content).addClass("active");

});

})(jQuery);

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    var navBarHeight = $('#topnav').height();
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - navBarHeight
        }, 1000);
    }
});

$(document).ready(function(){
  /* ---- sets home menu active for specific page---- */
  $('.menu-link-5').addClass('selectedPage');

  $('#tab1').click(function(){
    $('.oneLiner').toggleClass('active');
    $('.moreContent').toggleClass('active');
  });
});
