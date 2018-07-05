$(document).ready(function(){
  /* ---- sets home menu active for specific page---- */
  $('#menu-link-5').removeClass('selectedPage');
  });



// W3C's JS Code for an accordion
var acc = document.getElementsByClassName("accordion");
var i;

  // Open the first accordion
  var firstAccordion = acc[0];
  var firstPanel = firstAccordion.nextElementSibling;
   firstAccordion.classList.add("active");
  firstPanel.style.maxHeight = firstPanel.scrollHeight + "px";

  // Open the second accordion
  var firstAccordion = acc[2];
  var firstPanel = firstAccordion.nextElementSibling;
   firstAccordion.classList.add("active");
  firstPanel.style.maxHeight = firstPanel.scrollHeight + "px";


// Add onclick listener to every accordion element
for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function(){
    // For toggling purposes detect if the clicked section is already "active"
    var isActive = this.classList.contains("active");

    // Toggle the clicked section using a ternary operator
    isActive ? this.classList.remove("active") : this.classList.add("active");
    // Toggle the panel element
    var panel = this.nextElementSibling;
    var maxHeightValue = getStyle(panel, "maxHeight");
    if (maxHeightValue !== "0px") {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
}
// Cross-browser way to get the computed height of a certain element. Credit to @CMS on StackOverflow (http://stackoverflow.com/a/2531934/7926565)
function getStyle(el, styleProp) {
  var value, defaultView = (el.ownerDocument || document).defaultView;
  // W3C standard way:
  if (defaultView && defaultView.getComputedStyle) {
    // sanitize property name to css notation
    // (hypen separated words eg. font-Size)
    styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
  } else if (el.currentStyle) { // IE
    // sanitize property name to camelCase
    styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
      return letter.toUpperCase();
    });
    value = el.currentStyle[styleProp];
    // convert other units to pixels on IE
    if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
      return (function(value) {
        var oldLeft = el.style.left,
        oldRsLeft = el.runtimeStyle.left;
        el.runtimeStyle.left = el.currentStyle.left;
        el.style.left = value || 0;
        value = el.style.pixelLeft + "px";
        el.style.left = oldLeft;
        el.runtimeStyle.left = oldRsLeft;
        return value;
      })(value);
    }
    return value;
  }
}
