


$(function () {

  
// menu opener

$('.head-humburger').click(function () {
	

    $('.menu-collaps').toggleClass('d-none');
   $('.menu-collaps').on('click', function() {
     
       });
    
});

// login
$('#loginform').click(function(){
  $('.overlay-login').fadeToggle('slow');
  $(this).toggleClass('green');
});

$('.fa-times').click(function () {
  $('.overlay-login').fadeToggle('slow');
    
});


// search 
$('.header-form_btn').click(function () {
	$('.hd-form_input').toggleClass('d-none');
    
});


// slider

$('.popular-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow: '<button type="button" class="slick-prev"><img src="./images/prew.png"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="./images/next.png"></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '1px',
        slidesToShow: 1
      }
    }
  ]


});



// $('.box-g').mouseover(function() {
 
//    $('.gallery_desc').toggleClass('d-none');
//   // $('.gallery_desc').fadeToggle('slow', 'linear');

// });
// $('.box-g').mouseout(function() {

//    $('.gallery_desc').removeClass('d-none');
//   // $('.gallery_desc').fadeToggle('slow', 'linear');

// });




$('.partners-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
   prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '1px',
        slidesToShow: 3
      },
      breakpoint: 500,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '1px',
        slidesToShow: 2
      }
    }
  ]
});






});