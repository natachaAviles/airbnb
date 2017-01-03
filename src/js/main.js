$(document).ready(function() {
	$('select').material_select();
	$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
});
});

$(document).ready(function(){
	$('.slider').slider({full_width: true});
});

function initMap() {
	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 7,
		center: {lat: 41.85, lng: -87.65}
	});
	directionsDisplay.setMap(map);

	var onChangeHandler = function() {
		calculateAndDisplayRoute(directionsService, directionsDisplay);
	};
	document.getElementById('start').addEventListener('change', onChangeHandler);
	document.getElementById('end').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	directionsService.route({
		origin: document.getElementById('start').value,
		destination: document.getElementById('end').value,
		travelMode: 'DRIVING'
	}, function(response, status) {
		if (status === 'OK') {
			directionsDisplay.setDirections(response);
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}

$(document).ready(function() {
	
    $('#datepicker-llegada').datepicker({
        onSelect: function () {
            //alert($(this).val());
            localStorage.setItem("lastSelectedDate", $(this).val());
        }
    });

    if (localStorage.getItem("lastSelectedDate") !== null) {
        $('#datepicker-llegada').datepicker("setDate", new Date(localStorage.getItem("lastSelectedDate")));
    }

    $('#datepicker-salida').datepicker({
        onSelect: function () {
            //alert($(this).val());
            localStorage.setItem("lastSelectedDate", $(this).val());
        }
    });

    if (localStorage.getItem("lastSelectedDate") !== null) {
        $('#datepicker-salida').datepicker("setDate", new Date(localStorage.getItem("lastSelectedDate")));
    }


	$('#huesped').change(function() {
   	 	localStorage.setItem($(this).attr('id'), $(this).val());
	})

	
});


