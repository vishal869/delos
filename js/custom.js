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