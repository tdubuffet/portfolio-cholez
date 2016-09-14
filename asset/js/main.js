$(document).ready(function() {


    console.log('coucou')
    $(window).scroll(function(){

        var sticky = $('.menu'),
            scroll = $(window).scrollTop();


        if (scroll >= 60) {
            sticky.addClass('fixed');
        }
        else {
            sticky.removeClass('fixed');
        }
    });

});