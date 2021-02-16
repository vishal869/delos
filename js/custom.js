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