$(function () {

    $('.top-slider__inner').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpead: 2000
    });

    $(".star").rateYo({
        starWidth: "18px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true
    });

});