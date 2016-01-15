'use strict'

var markers = [
			{ position: { lat: 54.007390455736164, lng: 27.291980981826782 }, name: "zaslaue val" },
			{ position: { lat: 53.99572748028057, lng: 27.278371453285217 }, name: "zaslaue zamecak" },
			{ position: { lat: 53.9068853347172, lng: 27.55274534225464 }, name: "minsk zamak" },
			{ position: { lat: 53.828835219028015, lng: 27.336146235466003 }, name: "menka haradzicsa" },
			{ position: { lat: 54.33480565239216, lng: 26.872606873512268 }, name: "maladzecna zamak" },
			{ position: { lat: 53.96370450798363, lng: 27.051402926445007 }, name: "rakau zamak" },
			{ position: { lat: 54.30938200860351, lng: 26.2817645072937 }, name: "kreva zamak" },
			{ position: { lat: 54.25153998601657, lng: 26.020184755325317 }, name: "halsany zamak" },
			{ position: { lat: 53.222691726652855, lng: 26.691863536834717 }, name: "niasviz zamak" },
			{ position: { lat: 53.45113732683276, lng: 26.472914814949036 }, name: "mir zamak" },
			{ position: { lat: 52.86080360766753, lng: 24.89604949951172 }, name: "ruzhany zamak" },
			{ position: { lat: 53.15337836657127, lng: 24.477667808532715 }, name: "vaukavyski zamak" },
			{ position: { lat: 52.366703697442375, lng: 23.36819887161255 }, name: "vysokae zamak" },
			{ position: { lat: 53.15337836657127, lng: 24.477667808532715 }, name: "vaukavyski zamak" },
		];

var map;
function initMap() {

	var infoWindow = new google.maps.InfoWindow();
	setTimeout(function() {
		map = new google.maps.Map($(".slide .image")[0], {
			center: {lat: 53.89867439403615, lng: 27.555084228515625},
			zoom: 10
		});

		google.maps.event.addListener(map, 'click', function(event) {
			console.dir(event.latLng);
			console.log(event.latLng.lat());
			console.log(event.latLng.lng());
			map.setCenter(event.latLng);
			infoWindow.close();
		});

		

		for(let i = 0; i < markers.length; i++) {
			let marker = new google.maps.Marker({
				position: markers[i].position,
				map: map,
				title: markers[i].name
			});

			google.maps.event.addListener(marker, 'click', function(event) {
				console.dir(event);
				infoWindow.setPosition(marker.getPosition());
				infoWindow.setContent(marker.title);
				infoWindow.open(map);
				map.setZoom(16);
				map.setCenter(event.latLng);
			})
			console.dir(marker);
		}
	});
}