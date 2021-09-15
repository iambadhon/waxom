$(function () {

    //=============================preloader section start=============================//
    $(window).on("load", function () {
        $(".preloader").delay(500).fadeOut(1000);
    });
    //=============================preloader section end=============================//

    //=============================back to top section end=============================//
    $(".back_to_top").click(function () {
        $("html,css").animate({
            scrollTop: 0,
        }, 2000);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop()

        if (scrolling > 100) {
            $(".back_to_top").fadeIn(800);
        } else {
            $(".back_to_top").fadeOut(800);
        }

        if (scrolling > 200) {
            $("#nav").addClass("nav_sticky");
        } else {
            $("#nav").removeClass("nav_sticky");
        }
    });

    //=============================back to top section end=============================//

    //=============================slick slider section end=============================//

    $('.recent_post_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false,
        centerMode: true,
    });

    $('.banner_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        nextArrow: ".next",
        prevArrow: ".prev",
    });

    //=============================slick slider section end=============================//

    //=============================hislider start=============================//

    $('.img-area').hiSlide({
        interval: 4000,
        speed: 1000
    });

    //=============================hislider end=============================//

    //=============================lightbox section start=============================//

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        "showImageNumberLabel": false,
        "disableScrolling": true,
    });

    //=============================lightbox section end=============================//

    //=============================countup section start=============================//

    $('.counter').counterUp({
        delay: 50,
        time: 2000,
    });

    //=============================countup section end=============================//

    //=============================mixitup section start=============================//

    var mixer = mixitup(".project_main");


    //=============================mixitup section end=============================//

    //=============================animation scroll start=============================//

    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500, );
                return false;
            }
        }
    });

    //=============================animation scroll end=============================//



});