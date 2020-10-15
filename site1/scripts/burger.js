

document.getElementById("header__burger").onclick = function() {open()};

function open() {
    document.getElementById("header__burger").classList.toggle("active");
    document.getElementById("header__nav").classList.toggle("show");
}
