$(function () {


  $('.slider__inner').slick({

    infinite: true,
    speed: 2000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: false,
    nextArrow: false,
    draggable: true,
    easing: true,
    cssEase: 'linear',
  });



  $('.action__slider').slick({

    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    easing: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    prevArrow: false,
    nextArrow: false,
  });


  $('.master__slider').slick({
    
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    easing: true,
    cssEase: 'linear',
    autoplay: true,
    prevArrow: false,
    nextArrow: false,

  });



  $('.brend__slider').slick({
    
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    easing: true,
    cssEase: 'linear',
    autoplay: true,
    prevArrow: false,
    nextArrow: false,

  });


  



  var nav = $('.header__down');

  $(window).scroll(function () {
  	if ($(this).scrollTop() > 154) {
  		nav.addClass("f-nav");
  	} else {
  		nav.removeClass("f-nav");
  	}
  });


  $('.burger').on('click', function () {
    $('.menu__down-inner ul').slideToggle();

  });




  new WOW().init();



});


