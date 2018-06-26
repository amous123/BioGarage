/* --- sets navbar transparent at top of page --- */
$(window).scroll(function() {
if ($(document).scrollTop() >= 100) {
$("ul.topnav").removeClass('transparent');
} else {
$("ul.topnav").addClass('transparent');
}
});

/* ---- sets home menu active for specific page---- */
$(document).ready(function(){
  $('#menu-link-4').addClass('selectedPage');
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

/* --- functions to show and hide camera icon --- */
function fa1(){document.getElementById('fa1').style.opacity = '1';}
function fa2(){document.getElementById('fa2').style.opacity = '1';}
function fa3(){document.getElementById('fa3').style.opacity = '1';}
function fa4(){document.getElementById('fa4').style.opacity = '1';}
function fa1C(){document.getElementById('fa1').style.opacity = '0';}
function fa2C(){document.getElementById('fa2').style.opacity = '0';}
function fa3C(){document.getElementById('fa3').style.opacity = '0';}
function fa4C(){document.getElementById('fa4').style.opacity = '0';}

/* --- functions to open modal that displays photos --- */
function openModal() {
  document.getElementById('myModal').style.display = "block";
  document.getElementById("topnav").style.display = "none";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
  document.getElementById('topnav').style.display = "unset";
}

function plusSlides(n) {
  showSlides(gallerySlideIndex += n);
}

function currentSlide(n) {
  showSlides(gallerySlideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo2");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {gallerySlideIndex = 1}
  if (n < 1) {gallerySlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[gallerySlideIndex-1].style.display = "block";
  dots[gallerySlideIndex-1].className += " active";
  captionText.innerHTML = dots[gallerySlideIndex-1].alt;
}
