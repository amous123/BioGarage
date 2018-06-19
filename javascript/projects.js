/* --- sets navbar transparent at top of page --- */
$(window).scroll(function() {
if ($(document).scrollTop() >= 100) {
$("ul.topnav").removeClass('transparent');
} else {
$("ul.topnav").addClass('transparent');
}
});

/* ---- expand and retract sideBar content and overlay ---- */
$(document).ready(function(){
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
