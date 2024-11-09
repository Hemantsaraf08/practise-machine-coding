const startBox = document.getElementById("star-box");
const stars = startBox.querySelectorAll("div.star");
const btn = document.getElementById("reset-btn");

let ratingSubmitted = false;

function shadeAndUnshadeStars(index) {
  //apply selected class to all preceeding stars and remove selected class from all succeeding stars;
  return () => {
    if (ratingSubmitted) return;
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add("selected");
    }
    for (let i = index + 1; i < stars.length; i++) {
      stars[i].classList.remove("selected");
    }
  };
}

function submitRatingOnClick() {
  ratingSubmitted = true;
}

startBox.addEventListener("mouseleave", () => {
  stars.forEach((star) => {
    if (ratingSubmitted) return;
    star.classList.remove("selected");
  });
});

stars.forEach((star, index) => {
  star.addEventListener("mouseover", shadeAndUnshadeStars(index));
  star.addEventListener("click", submitRatingOnClick);
});

btn.addEventListener("click", () => (ratingSubmitted = false));
