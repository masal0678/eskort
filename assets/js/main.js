/**
 * Created by matero on 11.04.2017.
 */

$(function(){
    console.log('start');

    $('.c-slider').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        fade: true,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear'
    });

    $('.slider-2').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear'
    });

});