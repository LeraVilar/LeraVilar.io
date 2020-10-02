
$(document).ready(function(){
    $('.coments__slider').slick({
        dots:false,
        slidesToShow: 2,
        autoplay:true,
        speed: 1000,
        autoplaySpeed: 1000,
        responsive: [
    {
      breakpoint: 1070,
      settings: {
       slidesToShow: 1,
       
     }
 }]
	});

});


document.getElementById("header__burger").onclick = function() {open()};

function open() {
    document.getElementById("header__menu").classList.toggle("show");
}