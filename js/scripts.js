
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
let modal = document.getElementById("my_modal");
let btn = document.getElementById("btn_modal_window");
let span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
   modal.style.display = "block";
}

span.onclick = function () {
   modal.style.display = "none";
}

window.onclick = function (event) {
   if (event.target == modal) {
       modal.style.display = "none";
   }
}

});


document.getElementById("header__burger").onclick = function() {open()};

function open() {
    document.getElementById("header__menu").classList.toggle("show");
}
