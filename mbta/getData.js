
      function initMap() {
        var map;
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: new google.maps.LatLng(42.352271, -71.05524200000001),
          mapTypeId: 'roadmap'
        });

		var myLat = 0;
		var myLng = 0;

				if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
					navigator.geolocation.getCurrentPosition(function(position) {
						myLat = position.coords.latitude;
						myLng = position.coords.longitude;
						me = new google.maps.LatLng(myLat, myLng);
				// Update map and go there...
				map.panTo(me);
				
				// Create a marker
				marker = new google.maps.Marker({
					position: me,
					title: "Here I Am!"
				});
				marker.setMap(map);
					
				// Open info window on click of marker
				google.maps.event.addListener(marker, 'click', function() {
					infowindow.setContent(marker.title);
					infowindow.open(map, marker);
					});
				})
			 }
				else {
					 alert("Geolocation is not supported by your web browser.  What a shame!");
				 }

        var iconBase = '';
        var icons = {
          station: {
            icon: {
            	url: iconBase + 'redLineMarker.jpg',
            	scaledSize: new google.maps.Size(50, 50) // scaled size
            	   } 	
          }
        };

        var features = [
          {
            position: new google.maps.LatLng( 42.352271,-71.05524200000001),
            type: 'station'
          }, {
            position: new google.maps.LatLng(42.330154,-71.057655),
            type: 'station'
          }, {
            position: new google.maps.LatLng(42.3884, -71.11914899999999),
            type: 'station'
          }, {
            position: new google.maps.LatLng(42.373362, -71.118956),
            type: 'station'
          }, {
            position: new google.maps.LatLng(42.320685, -71.052391),
            type: 'station'
          }, {
            position: new google.maps.LatLng(42.31129, -71.0624242),
            type: 'station'
          }, {
            position: new google.maps.LatLng(42.35639457, -71.056967),
            type: 'station'
          }, {
            position: new google.maps.LatLng(42.342622, -71.029583),
            type: 'station'
          }, {
            position: new google.maps.LatLng(42.275275,-71.06573796000001),
            type: 'station'
          }, {
            position: new google.maps.LatLng(42.29312583, -71.121815),
            type: 'station'
          }, {
            position: new google.maps.LatLng(42.39674, -71.142483),
            type: 'station'
          }, {
            position: new google.maps.LatLng(42.395428,-71.08617653),
            type: 'station'
          }, {
          	position: new google.maps.LatLng(42.36249079,-71.08617653),
          	type: 'station'
		  }, {
            position: new google.maps.LatLng(42.36249079,-71.070628),
            type: 'station'
          }, {
            position: new google.maps.LatLng(42.355518, -71.060225),
            type: 'station'
          }, {
            position: new google.maps.LatLng(42.251809, -71.005409),
            type: 'station'
          }, {
            position: new google.maps.LatLng(42.233391, -71.007153),
            type: 'station'
          }, {
            position: new google.maps.LatLng(42.284652,  -71.06448899999999),
            type: 'station'
          }, {
            position: new google.maps.LatLng(42.2665139, -71.0203369),
            type: 'station'
          }, {
            position: new google.maps.LatLng(42.300093, -71.061667),
            type: 'station'
          },
          {
            position: new google.maps.LatLng(42.365486, -71.103802),
            type: 'station'
          },
          {
            position: new google.maps.LatLng(42.2078543, -71.0011385),
            type: 'station'
          }
        ];


        var redLineLoc = [{lat:42.395428, lng:-71.142483},{lat:42.39674, lng:-71.121815},{lat:42.3884, lng: -71.11914899999999},{lat:42.373362,lng:-71.118956},{lat:42.365486, lng: -71.103802},{lat:42.36249079, lng:-71.08617653},{lat: 42.361166,lng:-71.070628},{lat:42.355518,lng:-71.060225},{lat: 42.352271,lng: -71.05524200000001},{lat: 42.330154,lng: -71.057655}];

         var redLine = new google.maps.Polyline({
          path: redLineLoc,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        redLine.setMap(map)

        // Create markers.
        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        });
      }




function getData(){
var requestURL = 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=[place-sstat]';
var request = new XMLHttpRequest();


request.onreadystatechange = function () {
  if(request.readyState === 4 && request.status === 200) {
  	console.log("got here");
     var theData = JSON.parse(request.responseText);

  }
};
request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();
}