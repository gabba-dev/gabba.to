document.addEventListener("DOMContentLoaded", function () {
  // Random theme selection with special theme being rare (1/50 chance)
  const normalThemes = [
    "theme-sage",
    "theme-pink",
    "theme-lavender",
    "theme-mint",
    "theme-peach",
    "theme-sky",
  ];

  const randomNum = Math.random();
  const randomTheme =
    randomNum < 0.01
      ? "theme-special"
      : normalThemes[Math.floor(Math.random() * normalThemes.length)];
  document.body.className = randomTheme;

  // Simple fade-in animation for content
  const content = document.querySelector(".content");
  content.style.opacity = "0";
  content.style.transform = "translateY(20px)";
  content.style.transition = "opacity 0.8s ease, transform 0.8s ease";

  // Label fade-in animation
  const label = document.querySelector(".label");
  label.style.opacity = "0";
  label.style.transition = "opacity 0.8s ease";

  setTimeout(() => {
    content.style.opacity = "1";
    content.style.transform = "translateY(0)";
  }, 100);

  setTimeout(() => {
    label.style.opacity = "0.7";
  }, 800);
});
