mapboxgl.accessToken = 'pk.eyJ1IjoibWljaGFlbGJhbHVqYSIsImEiOiJja21ucjZxOXoxeHF5MnZsODQycGJvZW12In0.bsJIbKyYIRFJsYjDHsptlQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
	center: [-117.271271, 32.832809], // starting position
    zoom: 10 // starting zoom
});
		
// create the popup
var popup = new mapboxgl.Popup({ offset: 40 }).setText(
    '9500 Gilman Drive, La Jolla, CA 92092'
);

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';
 
// create the marker
new mapboxgl.Marker(el)
    .setLngLat([-117.271271, 32.832809])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');