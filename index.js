$( document ).ready(function() {

// Animation of Hamburgermenu

    $('.hamburgermenu').on('click', function() {
	    $(this).next().toggleClass('active');
	});

// Animation of Image Carousell

 
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 300, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 300, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });


// Animation of Moving Googlemaps APIs

    $(window).scroll(function(){

        console.log($(window).scrollTop());

        if ($(window).scrollTop() >700 && $(window).scrollTop() <=1300){

                $("#googlemaps_1").css({
                "top": "31%",
                "position": "fixed",
                "display": "inline",
                });
                 $("#googlemaps_2").css({
                "display": "none",
                });

        } else if ($(window).scrollTop() >1300){

                $("#googlemaps_1").css({
                 "display": "none"
                });

        } else {

                $("#googlemaps_1").css({
                 "position": "static"
                });
        }});

    $(window).scroll(function(){

        console.log($(window).scrollTop());

        if ($(window).scrollTop() >1300 && $(window).scrollTop() <=2000){

                $("#googlemaps_2").css({
                "top": "31%",
                "position": "fixed",
                "display": "inline",
                });

        } else if ($(window).scrollTop() >2000){

                $("#googlemaps_2").css({
                 "display": "none"
                });

        } else {

                $("#googlemaps_2").css({
                 "position": "static",
                 "display": "none"
                });
        }});


    $(window).scroll(function(){

        console.log($(window).scrollTop());

        if ($(window).scrollTop() >2000 && $(window).scrollTop() <=2600){

                $("#googlemaps_3").css({
                "top": "31%",
                "position": "fixed",
                "display": "inline",
                });

        } else if ($(window).scrollTop() >2600){

                $("#googlemaps_3").css({
                 "display": "none"
                });

        } else {

                $("#googlemaps_3").css({
                 "position": "static",
                 "display": "none"
                });
        }});

    $(window).scroll(function(){

        console.log($(window).scrollTop());

        if ($(window).scrollTop() >2600 && $(window).scrollTop() <=3200){

                $("#googlemaps_4").css({
                "top": "31%",
                "position": "fixed",
                "display": "inline",
                });

        } else if ($(window).scrollTop() >3200){

                $("#googlemaps_4").css({
                 "display": "none"
                });

        } else {

                $("#googlemaps_4").css({
                 "position": "static",
                 "display": "none"
                });
        }});

    $(window).scroll(function(){

        console.log($(window).scrollTop());

        if ($(window).scrollTop() >3200 && $(window).scrollTop() <=3600){

                $("#googlemaps_5").css({
                "top": "31%",
                "position": "fixed",
                "display": "inline",
                });

        } else if ($(window).scrollTop() >3600){

                $("#googlemaps_5").css({
                 "display": "none"
                });

        } else {

                $("#googlemaps_5").css({
                 "position": "static",
                 "display": "none"
                });
    }}); 
    
});