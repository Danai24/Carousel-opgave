const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const navigationDots = document.querySelector(".dots");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;



function init() {
  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");

  createNavigationDots();
}

init();



function createNavigationDots() {
  for (let i = 0; i < numberOfImages; i++) {
    const dot = document.createElement("div");
    dot.classList.add("single-dot");
    navigationDots.appendChild(dot);

    dot.addEventListener("click", () => {
      goToSlide(i);
    });
  }

  navigationDots.children[0].classList.add("active");
}



nextBtn.addEventListener("click", () => {
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
    return;
  }

  currentSlide++;
  goToSlide(currentSlide);
});


prevBtn.addEventListener("click", () => {
  if (currentSlide <= 0) {
    goToSlide(numberOfImages - 1);
    return;
  }

  currentSlide--;
  goToSlide(currentSlide);
});


function goToSlide(slideNumber) {
  slidesContainer.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px)";

  currentSlide = slideNumber;

  setActiveClass();
}



function setActiveClass() {
  

  let currentActive = document.querySelector(".slide-image.active");
  currentActive.classList.remove("active");
  slideImage[currentSlide].classList.add("active");


  let currentDot = document.querySelector(".single-dot.active");
  currentDot.classList.remove("active");
  navigationDots.children[currentSlide].classList.add("active");
}