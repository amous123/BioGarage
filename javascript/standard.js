/* --- sets navbar transparent at top of page --- */
$(window).scroll(function() {
if ($(document).scrollTop() >= 100) {
$("ul.topnav").removeClass('transparent');
} else {
$("ul.topnav").addClass('transparent');
}
});

/* ---- loading page animation ---- */
var load;
function loadPage() {
    load = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loadingPage").style.zIndex = "10";

  /* --- initializing AOS --- */
  AOS.init();
AOS.refresh();
}


$(document).ready(function(){
/* ---- smooth scroll to top---- */
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('#scroll').fadeIn();
    } else {
        $('#scroll').fadeOut();
    }
});

/* ---- scroll to top animation colours ---- */
$('#scroll').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});
$('#scroll').mouseover(function(){
  $('#scroll span').css("border-bottom-color", "#8f001a");
});

$('#scroll').mouseout(function(){
  $('#scroll span').css("border-bottom-color", "#ffffff");
});


/* ---- storing cookies on which language is selected ---- */
var language = sessionStorage.getItem('language');
if ((language == 'EN') || (language == null)){
  switchEnglish();
}
else{
  switchFrench();
}

$('#english').click(function(){
  switchEnglish();
    sessionStorage.setItem('language', 'EN');
});
function switchEnglish() {
  if ($('.EN').hasClass('active')){
    $('.EN').toggleClass('active');
    $('.FR').toggleClass('active');
    $('#english').addClass('active');
    $('#french').removeClass('active');
  }
else{
  $('.EN').toggleClass('');
  $('.FR').toggleClass('');
}
}

$('#french').click(function(){
  switchFrench();
    sessionStorage.setItem('language', 'FR');
});
function switchFrench() {
  if ($('.EN').hasClass('active')){
    $('.EN').toggleClass('');
    $('.FR').toggleClass('');
  }
else{
  $('.EN').toggleClass('active');
  $('.FR').toggleClass('active');
  $('#english').removeClass('active');
  $('#french').addClass('active');
}
}

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

  /* ---- footer benchling logo hover ---- */
    $('#bench-1').mouseover(function(){
      $('#bench-1').css("display", "none");
      $('#bench-2').css("display", "inline-block");
    })
    $('#bench-2').mouseout(function(){
      $('#bench-1').css("display", "inline-block");
      $('#bench-2').css("display", "none");
    })

})
