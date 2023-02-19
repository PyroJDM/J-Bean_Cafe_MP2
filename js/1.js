document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.querySelector("#CarouselHero");
  var captions = carousel.querySelectorAll(".carousel-caption");

  carousel.addEventListener("slide.bs.carousel", function () {
    captions.forEach(function (caption) {
      caption.setAttribute("data-aos", caption.getAttribute("data-aos"));
    });
  });
});
