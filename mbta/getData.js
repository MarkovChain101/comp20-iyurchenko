// infomap = new google.map.InfoMap
 function initMap() {
        var map;

        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: new google.maps.LatLng(42.352271, -71.05524200000001),
          mapTypeId: 'roadmap'
        });



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
            name: 'South Station',
            station_id: 'place-sstat',
            position: new google.maps.LatLng(42.352271,-71.05524200000001),
            type: 'station'
          }, {
            name: 'Andrews',
            station_id: 'place-andrw',
            position: new google.maps.LatLng(42.330154,-71.057655),
            type: 'station'
          }, {
            name: 'Porter Square',
            station_id: 'place-portr',
            position: new google.maps.LatLng(42.3884, -71.11914899999999),
            type: 'station'
          }, {
            name: 'Harvard Square',
            station_id: 'place-harsq',
            position: new google.maps.LatLng(42.373362, -71.118956),
            type: 'station'
          }, {
            name: 'JFK/UMass',
            station_id: 'place-jfk',
            position: new google.maps.LatLng(42.320685, -71.052391),
            type: 'station'
          }, {
            name: 'Savin Hill',
            station_id: 'place-shmnl',
            position: new google.maps.LatLng(42.31129,  -71.053331),
            type: 'station'

          }, 
          {
            name: 'Park Street',
            station_id: 'place-pktrm',
            position: new google.maps.LatLng(42.35639457,  -71.0624242),
            type: 'station'
          },
          {
            name: 'Broadway',
            station_id: 'place-brdway',
            position: new google.maps.LatLng(42.342622, -71.056967),
            type: 'station'
          },
          {
            name: 'North Quincy',
            station_id: 'place-nqncy',
            position: new google.maps.LatLng(42.275275, -71.029583),
            type: 'station'
          },
          {
            name: 'Shawmut',
            station_id: 'place-smmnl',
            position: new google.maps.LatLng(42.29312583, -71.06573796000001),
            type: 'station'
          },
          {
            name: 'Davis Square',
            station_id: 'place-davis',
            position: new google.maps.LatLng(42.39674, -71.121815),
            type: 'station'
          }, {
            name: 'Alewife',
            station_id: 'place-alfcl',
            position: new google.maps.LatLng(42.395428, -71.142483),
            type: 'station'
          }, {
            name: 'Kendall/MIT',
            station_id: 'place-knncl',
            position: new google.maps.LatLng(42.36249079,-71.08617653),
            type: 'station'
          }, {
            name: 'Charles/MGH',
            station_id: 'place-chmnl',
            position: new google.maps.LatLng(42.361166, -71.070628),
            type: 'station'
          }, {
            name: 'Downtown Crossing',
            station_id: 'place-dwnxg',
            position: new google.maps.LatLng(42.355518, -71.060225),
            type: 'station'
          }, {
            name: 'Quincy Center',
            station_id: 'place-qnctr',
            position: new google.maps.LatLng(42.251809,-71.005409),
            type: 'station'
          }, {
            name: 'Quincy Adams',
            station_id: 'place-qamnl',
            position: new google.maps.LatLng(42.233391,-71.007153),
            type: 'station'
      }, {
        name: 'Ashmont',
        station_id: 'place-asmnl',
            position: new google.maps.LatLng(42.284652,-71.06448899999999),
            type: 'station'
          }, {
            name: 'Wollaston',
            station_id: 'place-wlsta',
            position: new google.maps.LatLng(42.2665139, -71.0203369),
            type: 'station'
          }, {
            name: 'Fields Corner',
            station_id: 'place-fldcr',
            position: new google.maps.LatLng(42.300093, -71.061667),
            type: 'station'
          }, {
            name: 'Central Square',
            station_id: 'place-cntsq',
            position: new google.maps.LatLng(42.365486, -71.103802),
            type: 'station'
          }, {
            name: 'Braintree',
            station_id: 'place-brntn',
            position: new google.maps.LatLng(42.2078543, -71.0011385),
            type: 'station'
          }
        ];



        var redLineLoc = [{lat:42.395428, lng:-71.142483},{lat:42.39674, lng:-71.121815},{lat:42.3884, lng: -71.11914899999999},{lat:42.373362,lng:-71.118956},{lat:42.365486, lng: -71.103802},{lat:42.36249079, lng:-71.08617653},{lat: 42.361166,lng:-71.070628},{lat:42.355518,lng:-71.060225},{lat: 42.352271,lng: -71.05524200000001},{lat: 42.330154,lng: -71.057655},{lat: 42.342622,lng:  -71.0624242}, {lat: 42.330154,lng: -71.057655}, {lat: 42.320685, lng: -71.052391}, {lat: 42.39674, lng: -71.121815}, {lat:42.2665139, lng: -71.0203369}, {lat:42.233391, lng: -71.007153}, {lat: 42.2078543, lng: -71.0011385}];
        var branch = [{lat:42.320685, lng: -71.052391}, {lat: 42.31129,  lng: -71.053331}, {lat: 42.300093, lng: -71.061667}, {lat: 42.29312583, lng: -71.06573796000001}]; 
        //finish red line 
         var redLine = new google.maps.Polyline({
          path: redLineLoc,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        redLine.setMap(map)
        var redLine2 = new google.maps.Polyline({
          path: branch,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        redLine2.setMap(map)

        // Create markers.
        features.forEach(function(feature) {
          var infowindow = new google.maps.InfoWindow();
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map,
            infowindow: infowindow
          });
          google.maps.event.addListener(marker, "click", function(){
          
            var stop_id = feature.station_id;
            var curPosition = feature.position;
            var requestURL = 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=' + stop_id;
            var request = new XMLHttpRequest();
            request.open('GET', requestURL, true);

            request.onreadystatechange = function () {
              if(request.readyState === 4 && request.status === 200) {
               // console.log(request.readyState);
                 var theData = JSON.parse(request.responseText);
                 schedData = theData.data;

                  var arrivalTimes = [];
                 for(var data in schedData){
                arrivalTimes.push(schedData[data].attributes.arrival_time);
                      }
                        stringData = "Arrival Times: <br>";
                        
                        arrivalTimes.forEach(function(data){
                           stringData += data.substring(11,16) + '<br>';
                        })

                  var DepartureTimes = [];
                 for(var data in schedData){
                DepartureTimes.push(schedData[data].attributes.departure_time);
                console.log(schedData[data].attributes.departure_time);
                      }
                        stringData += " Departure Times: <br>";
                        
                        DepartureTimes.forEach(function(data){
                           stringData += data.substring(11,16) + '<br>';
                        })

                      infowindow.setContent(stringData);

                      // curMarker = new google.maps.Marker({
                      //   position: curPosition
                      // });

                      infowindow.open(map,marker);
                      // console.log()
                       // infowindow.open(map,curMarker);
                // console.log("afterParse");
                // console.log(schedData[data].attributes.arrival_time);
             
              }
              else if(request.readyState === 4 && request.status === 404){
                alert("Error loading data");  
              }


            };

            request.send();
          });
          //console.log("ooo");
          //add listener, do request, get data
        });

        var myLat = 0;
    var myLng = 0;
    var me = new google.maps.LatLng(myLat, myLng)
        if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
          navigator.geolocation.getCurrentPosition(function(position) {

            myLat = position.coords.latitude;
            myLng = position.coords.longitude;
            me = new google.maps.LatLng(myLat, myLng);
            //console.log(me);
                var smallestDistance = google.maps.geometry.spherical.computeDistanceBetween(me, features[0].position);
                //console.log(smallestDistance);
                var closestFeature = features[0].name;
                var closestLatLng = features[0].position;
        features.forEach(function(feature) {
                // console.log(feature.position);
                console.log(feature.name);
                // console.log(feature);
                console.log(google.maps.geometry.spherical.computeDistanceBetween(me, feature.position));
                if(google.maps.geometry.spherical.computeDistanceBetween(me, feature.position) < smallestDistance){
                  smallestDistance = google.maps.geometry.spherical.computeDistanceBetween(me, feature.position);
                  closestFeature = feature.name;
                  closestLatLng = feature.position;
        }});
    var closePos = new google.maps.MVCArray([
        closestLatLng, 
        me
    ]);

        //console.log(closePos);
          var closeLine = new google.maps.Polyline({
          path: closePos,
          geodesic: true,
          strokeColor: '#0000FF',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        closeLine.setMap(map);
        // Update map and go there...
        map.panTo(me);
        //console.log(smallestDistance);    
        // Create a marker
        marker = new google.maps.Marker({
          position: me,
          title: "The closest Station is: " + closestFeature +  " which is " + smallestDistance/1600 + "miles away",
          closestStation: closestFeature,
          curClosestDistance: smallestDistance/1600
        });
        marker.setMap(map);
          
        // Open info window on click of marker
        google.maps.event.addListener(marker, 'click', function() {
          var infowindow = new google.maps.InfoWindow;
          infowindow.setContent(marker.title);
          // infowindow.open(this, marker);
          });
        }
       
      )}  else {
           alert("Geolocation is not supported by your web browser.  What a shame!");
         }
 
          //marker.addListener("click", getData("place-sstat"));
    
          //add listener, do request, get data
        }





