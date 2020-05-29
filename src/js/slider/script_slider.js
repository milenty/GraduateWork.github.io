$(document).ready(function(){
    $('.slider').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      slidesToScroll: 1,
      speed:100,
      easing: 'linear',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });
});