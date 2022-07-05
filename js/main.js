// Nav
$(document).ready(function(){
  $('.nav-button').click(function(){
    $('body').toggleClass('nav-open');
  });


  $(window).scroll(function () {

  if ($(document).scrollTop() > 100) {
      $('.js-change').addClass('onscroll-bg',100);
      

  } else {
  $('.js-change').removeClass('onscroll-bg',300);
  $('.js-change').addClass('transition');     
  
  }	
});



});




// WOW JS
new WOW().init();
var scroll = new SmoothScroll('a[href*="#"]', {
  ignore: '[data-scroll-ignore]'
});


//<!-------------------Captcha Script------------------------------>

    //Refresh Captcha
    function refreshCaptcha(){
        var img = document.images['captcha_image'];
        img.src = img.src.substring(
            0,img.src.lastIndexOf("?")
        )+"?rand="+Math.random()*1000;
    }
