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
//Mixitup init
var containerEl = document.querySelector('.case-container');
var mixer = mixitup(containerEl);
//non required input fix
window.addEventListener('load', function() {
    var inp = document.querySelectorAll('input');
    for (var i = 0; i < inp.length; i++) {
      inp[i].addEventListener('change', function() {
        this.setAttribute("data-value", this.value);
      })
    }
  })