/* javascript code for slideshow */
var slideIndex = 1;
showSlides(slideIndex); /* show first slide */

function plusSlides(n) {
    showSlides(slideIndex += n); /* show next slide */
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { /* goes back to first slide if next is pressed on 5th slide */
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length /* goes to last slide if previous is pressed on 1st slide */
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}