/**
 * Created by Sharmo on 2/10/2018.
 */




var curr_val_1 = 3;
var curr_val_2 = 3;
var curr_val_3 = 3;


$("#slider-1").slider({
    ticks: [1, 2, 3, 4, 5],
    ticks_labels: ["1", "2", "3", "4", "5"],
    ticks_snap_bounds: 1
});

$( "#slider-1" ).on( "slideStop", function() {
    curr_val_1 = $('#slider-1').data('slider').getValue();
    console.log("Slider 1 : "+curr_val_1);
    generateCode();
    if (curr_val_1 === 2)
        $('#slider-1-data .slider-selection').css('background', 'rgb(242,146,94)'); //Rgb (242,146,94)
    if (curr_val_1 === 3)
        $('#slider-1-data .slider-selection').css('background', 'rgb(239,130,71)');
    if (curr_val_1 === 4)
        $('#slider-1-data .slider-selection').css('background', 'rgb(239,118,52)');
    if (curr_val_1 === 5)
        $('#slider-1-data .slider-selection').css('background', 'rgb(239,105,33)');
});

$("#slider-2").slider({
    ticks: [1, 2, 3, 4, 5],
    ticks_labels: ["1", "2", "3", "4", "5"],
    ticks_snap_bounds: 1
});

$( "#slider-2" ).on( "slideStop", function() {
    curr_val_2 = $('#slider-2').data('slider').getValue();
    console.log("Slider 1 : "+curr_val_2);
    generateCode();
    if (curr_val_2 === 2)
        $('#slider-2-data .slider-selection').css('background', 'rgb(242,146,94)'); //Rgb (242,146,94)
    if (curr_val_2 === 3)
        $('#slider-2-data .slider-selection').css('background', 'rgb(239,130,71)');
    if (curr_val_2 === 4)
        $('#slider-2-data .slider-selection').css('background', 'rgb(239,118,52)');
    if (curr_val_2 === 5)
        $('#slider-2-data .slider-selection').css('background', 'rgb(239,105,33)');

});


$("#slider-3").slider({
    ticks: [1, 2, 3, 4, 5],
    ticks_labels: ["1", "2", "3", "4", "5"],
    ticks_snap_bounds: 1
});

$( "#slider-3" ).on( "slideStop", function() {
    curr_val_3 = $('#slider-3').data('slider').getValue();
    console.log("Slider 3 : "+curr_val_3);
    generateCode();
    if (curr_val_3 === 2)
        $('#slider-3-data .slider-selection').css('background', 'rgb(242,146,94)'); //Rgb (242,146,94)
    if (curr_val_2 === 3)
        $('#slider-3-data .slider-selection').css('background', 'rgb(239,130,71)');
    if (curr_val_2 === 4)
        $('#slider-3-data .slider-selection').css('background', 'rgb(239,118,52)');
    if (curr_val_2 === 5)
        $('#slider-3-data .slider-selection').css('background', 'rgb(239,105,33)');

});

