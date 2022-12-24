let previousId;
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.getAttribute("data-text") != previousId) {
          previousId = entry.target.getAttribute("data-text");
          bgText.textContent = previousId;
          gsap.fromTo(".background", { autoAlpha: 0 }, { autoAlpha: 1 });
        }
      }
    });
  },
  { threshold: [0.5] }
);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => {
  observer.observe(element);
});

const bgText = document.querySelector(".background");
