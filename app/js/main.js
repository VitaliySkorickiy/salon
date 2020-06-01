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
    responsive: [{
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
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
    responsive: [{
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
      }
    }, ]
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
    responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
      }
    },
   ]

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



  $('.colladg__item').ripples({ 
    resolution: 512, 
    dropRadius: 20, //px 
    perturbance: 0.04, 
    }); 




  new WOW().init();



});