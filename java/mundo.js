const animatedElement = document.getElementById("animated-element");

animatedElement.addEventListener("click", () => {
    animatedElement.style.animation = "animation 5s linear infinite";
});