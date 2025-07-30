let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial-card");
const playBtn = document.querySelector(".play-btn");
let intervalId;

function showTestimonial(index) {
  testimonials.forEach((card, i) => {
    card.classList.remove("active");
    if (i === index) card.classList.add("active");
  });
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

document.querySelector(".next-btn").addEventListener("click", nextTestimonial);
document.querySelector(".prev-btn").addEventListener("click", prevTestimonial);

playBtn.addEventListener("click", () => {
  clearInterval(intervalId); // Clear if already running
  intervalId = setInterval(nextTestimonial, 3000); // Change every 3 seconds
});
