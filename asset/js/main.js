$(document).ready(function() {
    
    $(window).scroll(function(){

        var sticky = $('.menu'),
            scroll = $(window).scrollTop();


        if (scroll >= 60) {
            sticky.addClass('fixed');
        }
        else {
            sticky.removeClass('fixed');
        }

        var skills = $('#skills').offset().top;
        var tools = $('#tools').offset().top;
        var experience = $('#experience').offset().top;
        var formation = $('#formation').offset().top;
        var creation = $('#creation').offset().top;
        var contact = $('#contact').offset().top;

        if (scroll >= skills && scroll < tools) {
            $('.menu li').removeClass('active');
            $('.menu li#active-skills').addClass('active');

        } else if (scroll >= tools && scroll < experience) {
            $('.menu li').removeClass('active');
            $('.menu li#active-tools').addClass('active');

        } else if (scroll >= experience && scroll < formation) {
            $('.menu li').removeClass('active');
            $('.menu li#active-experience').addClass('active');

        } else if (scroll >= formation && scroll < creation) {
            $('.menu li').removeClass('active');
            $('.menu li#active-formation').addClass('active');

        } else if (scroll >= creation && scroll < contact) {
            $('.menu li').removeClass('active');
            $('.menu li#active-creation').addClass('active');

        }  else if (scroll >= contact) {
            $('.menu li').removeClass('active');
            $('.menu li#active-contact').addClass('active');

        } else {

            $('.menu li').removeClass('active');
            $('.menu li#active-profil').addClass('active');
        }
    });

});


$(window).on('load', function() {
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})
