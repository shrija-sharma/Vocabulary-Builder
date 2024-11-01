let container = document.querySelector(".container")
let layer = document.querySelectorAll(".layer")
const button = document.querySelector("#button")
// container.onmousemove = function (e) {
//     let x = e.pageX;
//     let y = e.pageY;
//     layer[0].style.transform = 'translate(' + x / 10 + 'px,' + y / 10 + 'px)';
//     layer[1].style.transform = 'translate(' + x / 10 + 'px,' + y / 10 + 'px)';
//     layer[2].style.transform = 'translate(' + x / 10 + 'px,' + y / 10 + 'px)';
//     layer[3].style.transform = 'translate(' + x / 10 + 'px,' + y / 10 + 'px)';
//     layer[4].style.transform = 'translate(' + x / 10 + 'px,' + y / 10 + 'px)';
//     layer[5].style.transform = 'translate(' + x / 10 + 'px,' + y / 10 + 'px)';
//     layer[6].style.transform = 'translate(' + x / 10 + 'px,' + y / 10 + 'px)';
// }

function getParallaxUrl(){
    window.location = "../html/parallax.html"
}

function getQuoteUrl(){
    window.location = "../html/quote.html"
}