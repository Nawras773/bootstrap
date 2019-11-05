function myFunction2() {
document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
if (!e.target.matches('.dropbtn')) {
var myDropdown = document.getElementById("myDropdown");
if (myDropdown.classList.contains('show')) {
myDropdown.classList.remove('show');
  }
}
}
function besteplek() {


}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
function myFunctionzoeken() {
  location.href = "../zoeken/zoeken.html";
}
function myFunctionOverOns() {
  location.href = "../OverOns/overons.html";
}
function myFunctionHome() {
  location.href = "../home/home.html";
}
function myFunctionContent() {
  location.href = "../Contcten/contcten.html";
}
function myFunctionVakantiebestemmingen() {
  location.href = "../Vakantiebestemmingen/Vakantiebestemmingen.html";
}
