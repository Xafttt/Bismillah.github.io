const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelector(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLink.forEach((element) => {
  element.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
});

// Map.html
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const images = document.querySelector(".carousel").children;
const totalImages = images.length;
let index = 0;

prev.addEventListener("click", () => {
  console.log("prev");
  nextImage("next");
});

next.addEventListener("click", () => {
  console.log("next");
  nextImage("prev");
});

function nextImage(direction) {
  if (direction == "next") {
    index++;
    if (index == totalImages) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("main");
  }
  images[index].classList.add("main");
}
