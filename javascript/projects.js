/* --- sets navbar transparent at top of page --- */
$(window).scroll(function() {
if ($(document).scrollTop() >= 100) {
$("ul.topnav").removeClass('transparent');
} else {
$("ul.topnav").addClass('transparent');
}
});

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
  $('#menu-link-5').addClass('selectedPage');

/* ---- smooth scroll to top---- */
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('#scroll').fadeIn();
    } else {
        $('#scroll').fadeOut();
    }
});
$('#scroll').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

/* ---- expand and retract sideBar content and overlay ---- */
  $('#sitemenu-icon').click(function(){
    $('#sitemenu-icon').toggleClass('active');
    $('#overlay').toggleClass('active');
    $('#blurContain').toggleClass('active');
    $('#menuoverlay').toggleClass('active');
    $('#logoHolder').toggleClass('active');
    $('ul.topnav').toggleClass('active');
  })
  $('#overlay').click(function(){
    $('#sitemenu-icon').toggleClass('active');
    $('#overlay').toggleClass('active');
    $('#blurContain').toggleClass('active');
    $('#menuoverlay').toggleClass('active');
    $('#logoHolder').toggleClass('active');
    $('ul.topnav').toggleClass('active');
  })
})

$(document).ready(function(){
  $('.expandable').click(function(){
    $('.oneLiner').toggleClass('active');
    $('.moreContent').toggleClass('active');
  });
});
