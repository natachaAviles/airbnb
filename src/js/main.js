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


