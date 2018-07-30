$(document).ready(function(){
  /* ---- sets home menu active for specific page---- */
  $('.menu-link-3').addClass(' selectedPage');
});

var widgetCSS = "" +
"body{font-family: arial; }" +
".timeline-Widget { background-color: #f2f2f2 !important;}" +
".timeline-Header{background-color: white; border-top-left-radius: 10px; border-top-right-radius: 10px;}" +
".timeline-Header-title{color: #8f001a !important;}" +
".timeline-Header-byline{ color: #8f001a; }" +
".timeline-Footer { background-color: #ffffff; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; }" +
"a{ color: #8f001a !important; }" +
"a:hover{ color: #3b94d9 !important}" +
".TweetAuthor-name {color: #2d2d2c !important;}" +
".timeline-Viewport{ height: 65vh; }" +
".timeline-Tweet-text{color: #8f001a; }";

function paint(){
  var w = document.getElementById("twitter-widget-0").contentDocument;

  var s = document.createElement("style");
  s.innerHTML = widgetCSS;
  s.type = "text/css";
  w.head.appendChild(s);
  loadPage();
}

function inputLang(){
  var input1;
  var input2;
  var i;
  var inputs = document.getElementsByClassName("formInput");
  for(i=0; i<inputs.length; i=i+2){
    input1 = document.getElementsByClassName("formInput")[i].value;
    input2 = document.getElementsByClassName("formInput")[i+1].value;
    if ($('#english').hasClass('active')){
      document.getElementsByClassName("formInput")[i+1].value = input1;
    }
    else{
      document.getElementsByClassName("formInput")[i].value = input2;
    }
  }
}

// Predefined code for using Google Maps Static Javascript API
function initMap() {
  var uluru = {lat: 45.423722, lng: -75.683634};

  var style2 = [
    {
      "featureType": "all",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "saturation": 36
        },
        {
          "color": "#000000"
        },
        {
          "lightness": 40
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#232323"
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 17
        },
        {
          "weight": 1.2
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f2f2f2"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#c4c4c4"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f2f2f2"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 21
        },
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#f2f2f2"
        },
        {
          "lightness": "0"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f2f2f2"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 18
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#575757"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#232323"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#999999"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 19
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 17
        }
      ]
    }
  ];
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru,
    styles: style2
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
