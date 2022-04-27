//header btns
$('.case-filter button').click(function(e){
    $('.case-filter button').removeClass('active');
    $(this).addClass('active');
});
$('.language').click(function(e){
    $('.language-list-menu,.language').toggleClass('active');
    e.stopPropagation();
    e.preventDefault();
});
$('.contact-btn').click(function(event){
    $('.contact-widget-header').toggleClass('active');
    event.stopPropagation();
    event.preventDefault();
});
$(window).click(function() {
    $('.contact-widget-header,.language-list-menu,.language').removeClass('active');
});
//Case more
$('.show-more-content').hide();
$(".show-more").on("click", function(e) {
    $('.show-more-content').delay(100).fadeIn();
    e.preventDefault();
})

//mobile menu
$('.mobile-menu').click(function(e){
    $(this).toggleClass('active');
    $('.header-right').toggleClass('active');
});

//feedback carousel
const swiper = new Swiper('.feedback-carousel', {
    slidesPerView: 1,
    centeredSlides: true,
    mode: 'horizontal',
    loop: true,
    spaceBetween: 16,
    watchOverflow: true,
    navigation: {
        nextEl: '.feedback-next',
        prevEl: '.feedback-prev',
      },
      breakpoints: {
        1280: {
          slidesPerView: 2,
          watchOverflow: true,
          spaceBetween: 40,
        },
        992: {
            slidesPerView: 2,
        }
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      }, 
  });
  //case carousel
  //modules slider
const swipermodules = new Swiper('.case-carousel', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    // Navigation arrows
    navigation: {
      nextEl: '.case-next',
      prevEl: '.case-prev',
    },
    slidesPerView: 1.2,
    centeredSlides: false,
    spaceBetween: 12,
    watchOverflow: true,
    breakpoints: {
        1280: {
          slidesPerView: 4.2,
          watchOverflow: true,
          spaceBetween: 24,
          centeredSlides: false,
        },
      },
      
  });