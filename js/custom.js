// loader function start 

var preloader = $('#preloader');
  $(window).load(function(){
    preloader.addClass('loading').fadeOut('slow', function() { $(this).remove(); });    
  });
// loader function End 

// aos animation function start
AOS.init({
  offset: 20,
  duration: 250,
  delay: 50,
  once:true,
  easing: 'ease-out',
})
  // aos animation function end

$(window).scroll(function(){
  if ($(this).scrollTop() > 30) {
     $('.header-main-block').addClass('fixed');
  } else {
     $('.header-main-block').removeClass('fixed');
  }
}); 


$(".header-main-block .navbar-icon").click(function(){
  $(".header-main-block .navbar-icon").toggleClass("close");
  $(".block-right-header").toggleClass("active");
  $(".overflow-bg").toggleClass("active");
  $("body").toggleClass("overflow");
}) 



///slick
$('.client-testimonial').slick({
  dots: true,
  nav:false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
  