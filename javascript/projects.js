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

$(document).ready(function(){
  /* ---- sets home menu active for specific page---- */
  $('.menu-link-5').addClass('selectedPage');
});
