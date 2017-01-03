 $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});

  	$("#range").ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: 0,
            max: 50000,
            from: 6000,
            to: 50000,
            type: 'double',
            step: 1,
            prefix: "$",
            grid: true,
     });


  });




