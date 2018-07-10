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
})

$(document).ready(function(){
  $('.expandable').click(function(){
    $('.oneLiner').toggleClass('active');
    $('.moreContent').toggleClass('active');
  });
});
