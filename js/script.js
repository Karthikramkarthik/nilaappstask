$(".toggle-password").on('click', function() {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
      input.attr("type", "text");
  } else {
      input.attr("type", "password");
  }
});


$('input').on('blur', function() {
  if ($("#loginForm").valid()) {
      $('#submit').prop('disabled', false);  
  } else {
      $('#submit').prop('disabled', 'disabled');
  }
});

var myswiper = new Swiper('#bannerslider', {
  slidesPerView: 1,
  pagination: false,
 
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(function() {

  $("form[name='registration']").validate({
   
    rules: {

   
      email: {
        required: true,
    
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    
    messages: {
   
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
 
    submitHandler: function(form) {
      form.submit();
    }
  });
});

$(window).on('load', function() { 
  
  $('.preloader').delay(350).fadeOut('slow'); 
  $('body').delay(2500).css({'overflow':'visible'});
})